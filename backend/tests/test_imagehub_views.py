# from model_bakery import baker
# import pytest
# import json 
# from imagehub.models import Post  


# @pytest.mark.django_db
# def test_create_post(api_client, post_payload):
#     url = '/api/posts/'
#     response = api_client.post(url, post_payload, format='json')
#     assert response.status_code == status.HTTP_201_CREATED
#     assert Post.objects.count() == 1

# @pytest.mark.django_db
# def test_post_list():
#         response = client.get('api/posts/')

#         assert response.status_code == 200
#         assert len(json.loads(response.content)) == 2