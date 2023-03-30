# from rest_framework.test import APIClient
# from django.test import TestCase
# from rest_framework import status
# from django.urls import reverse
#
# class UserRegistrationViewSetTestCase(TestCase):
#     def setUp(self):
#         self.client = APIClient()
#
#
#     def test_user_registration(self):
#         url = reverse('registration')
#         data = {"email": "testuser@example.com", "password": "test_password"}
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         self.assertEqual(response.data['email'], data['email'])
