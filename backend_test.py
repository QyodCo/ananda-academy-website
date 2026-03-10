#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class AnandaAcademyAPITester:
    def __init__(self):
        self.base_url = "https://joy-of-learning.preview.emergentagent.com/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        if not headers:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            else:
                raise ValueError(f"Unsupported method: {method}")

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.content:
                    try:
                        response_data = response.json()
                        print(f"Response: {json.dumps(response_data, indent=2)}")
                    except:
                        print(f"Response: {response.text[:200]}...")
                return True, response.json() if response.content else {}
            else:
                self.failed_tests.append({
                    'test': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200]
                })
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}...")
                return False, {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            self.failed_tests.append({
                'test': name,
                'error': 'Request timeout'
            })
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'test': name,
                'error': str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test("Root API", "GET", "", 200)

    def test_contact_form(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com", 
            "phone": "+91-9999999999",
            "subject": "API Test",
            "message": "This is a test message from the API testing suite."
        }
        return self.run_test(
            "Contact Form Submission",
            "POST", 
            "contact", 
            200, 
            test_data
        )

    def test_admission_form(self):
        """Test admission form submission"""
        test_data = {
            "student_name": "Test Student", 
            "date_of_birth": "2010-01-15",
            "grade_applying": "Class V",
            "parent_name": "Test Parent",
            "phone": "+91-9999999999", 
            "email": "parent@example.com",
            "address": "Test Address, Test City", 
            "message": "This is a test admission application."
        }
        return self.run_test(
            "Admission Form Submission", 
            "POST",
            "admissions/apply",
            200,
            test_data
        )

    def test_newsletter_subscription(self):
        """Test newsletter subscription"""
        test_data = {"email": f"newsletter{datetime.now().strftime('%H%M%S')}@example.com"}
        return self.run_test(
            "Newsletter Subscription",
            "POST",
            "newsletter", 
            200,
            test_data
        )

    def test_reviews_get(self):
        """Test getting reviews"""
        return self.run_test("Get Reviews", "GET", "reviews", 200)

    def test_reviews_post(self):
        """Test posting a review"""
        test_data = {
            "name": "Test Parent",
            "relation": "Parent", 
            "rating": 5,
            "text": "This is a test review from the API testing suite."
        }
        return self.run_test(
            "Post Review",
            "POST",
            "reviews",
            200, 
            test_data
        )

    def test_duplicate_newsletter_subscription(self):
        """Test duplicate newsletter subscription handling"""
        email = "duplicate@example.com"
        test_data = {"email": email}
        
        # First subscription
        self.run_test("Newsletter First Subscription", "POST", "newsletter", 200, test_data)
        
        # Duplicate subscription should return info message
        success, response = self.run_test(
            "Newsletter Duplicate Subscription", 
            "POST", 
            "newsletter", 
            200, 
            test_data
        )
        
        if success and response.get("status") == "info":
            print("✅ Duplicate handling working correctly")
            return True
        else:
            print("❌ Duplicate handling not working as expected")
            return False

def main():
    print("🚀 Starting Ananda Academy API Testing Suite")
    print("=" * 50)
    
    tester = AnandaAcademyAPITester()

    # Test all endpoints
    tests = [
        tester.test_root_endpoint,
        tester.test_contact_form,
        tester.test_admission_form, 
        tester.test_newsletter_subscription,
        tester.test_reviews_get,
        tester.test_reviews_post,
        tester.test_duplicate_newsletter_subscription
    ]

    for test in tests:
        try:
            test()
        except Exception as e:
            print(f"❌ Test failed with exception: {e}")
            tester.failed_tests.append({
                'test': test.__name__,
                'error': str(e)
            })

    # Print summary
    print("\n" + "=" * 50)
    print("📊 TEST SUMMARY")
    print("=" * 50)
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Tests Failed: {len(tester.failed_tests)}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%" if tester.tests_run > 0 else "0%")

    if tester.failed_tests:
        print("\n❌ FAILED TESTS:")
        for i, test in enumerate(tester.failed_tests, 1):
            print(f"{i}. {test.get('test', 'Unknown')}")
            if 'expected' in test:
                print(f"   Expected: {test['expected']}, Got: {test['actual']}")
            if 'response' in test:
                print(f"   Response: {test['response']}")
            if 'error' in test:
                print(f"   Error: {test['error']}")

    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())