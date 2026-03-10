from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', '')

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    subject: str = ""
    message: str


class AdmissionForm(BaseModel):
    student_name: str
    date_of_birth: str
    grade_applying: str
    parent_name: str
    phone: str
    email: EmailStr
    address: str
    message: str = ""


class NewsletterSub(BaseModel):
    email: EmailStr


class ReviewCreate(BaseModel):
    name: str
    relation: str = "Parent"
    rating: int = 5
    text: str


class Review(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    relation: str = "Parent"
    rating: int = 5
    text: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "Ananda Academy API"}


@api_router.post("/contact")
async def submit_contact(form: ContactForm):
    doc = form.model_dump()
    doc['id'] = str(uuid.uuid4())
    doc['created_at'] = datetime.now(timezone.utc).isoformat()
    await db.contacts.insert_one(doc)
    try:
        html = f"""<h2 style="color:#1A2E6C;">New Contact Inquiry - Ananda Academy</h2>
        <table style="border-collapse:collapse;width:100%;">
        <tr><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Name:</td><td style="padding:8px;">{form.name}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Email:</td><td style="padding:8px;">{form.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Phone:</td><td style="padding:8px;">{form.phone}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Subject:</td><td style="padding:8px;">{form.subject}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Message:</td><td style="padding:8px;">{form.message}</td></tr>
        </table>"""
        await asyncio.to_thread(resend.Emails.send, {
            "from": SENDER_EMAIL,
            "to": [ADMIN_EMAIL],
            "subject": f"Contact: {form.subject or 'New Inquiry'}",
            "html": html
        })
    except Exception as e:
        logger.error(f"Email failed: {e}")
    return {"status": "success", "message": "Thank you for reaching out! We'll get back to you soon."}


@api_router.post("/admissions/apply")
async def submit_admission(form: AdmissionForm):
    doc = form.model_dump()
    doc['id'] = str(uuid.uuid4())
    doc['created_at'] = datetime.now(timezone.utc).isoformat()
    doc['status'] = 'pending'
    await db.admissions.insert_one(doc)
    try:
        html = f"""<h2 style="color:#1A2E6C;">New Admission Application - Ananda Academy</h2>
        <table style="border-collapse:collapse;width:100%;">
        <tr><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Student Name:</td><td style="padding:8px;">{form.student_name}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Date of Birth:</td><td style="padding:8px;">{form.date_of_birth}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Grade:</td><td style="padding:8px;">{form.grade_applying}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Parent Name:</td><td style="padding:8px;">{form.parent_name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Phone:</td><td style="padding:8px;">{form.phone}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Email:</td><td style="padding:8px;">{form.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Address:</td><td style="padding:8px;">{form.address}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;color:#1A2E6C;">Message:</td><td style="padding:8px;">{form.message}</td></tr>
        </table>"""
        await asyncio.to_thread(resend.Emails.send, {
            "from": SENDER_EMAIL,
            "to": [ADMIN_EMAIL],
            "subject": f"New Admission: {form.student_name}",
            "html": html
        })
    except Exception as e:
        logger.error(f"Email failed: {e}")
    return {"status": "success", "message": "Application submitted successfully! We will contact you shortly."}


@api_router.post("/newsletter")
async def subscribe_newsletter(data: NewsletterSub):
    existing = await db.newsletter.find_one({"email": data.email}, {"_id": 0})
    if existing:
        return {"status": "info", "message": "You're already subscribed!"}
    await db.newsletter.insert_one({
        "email": data.email,
        "id": str(uuid.uuid4()),
        "subscribed_at": datetime.now(timezone.utc).isoformat()
    })
    return {"status": "success", "message": "Successfully subscribed to our newsletter!"}


@api_router.get("/reviews")
async def get_reviews():
    reviews = await db.reviews.find({}, {"_id": 0}).to_list(100)
    return reviews


@api_router.post("/reviews")
async def submit_review(data: ReviewCreate):
    review = Review(**data.model_dump())
    doc = review.model_dump()
    await db.reviews.insert_one(doc)
    return {"status": "success", "message": "Thank you for your review!"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
