import pytest
from imagehub.models import Tag, Post, Comment, Subcomment, PostLike
from users.models import Account
from rest_framework.test import APIClient


@pytest.fixture
def api_client():
    client = APIClient()
    return client


#users fixtures
@pytest.fixture
def account() -> Account:
    return Account.objects.create(username="ABC", email='abc@aaa.com', password='password')



#imagehub textures

@pytest.fixture
def tag() -> Tag:
    return Tag.objects.create(tag="tag")

@pytest.fixture
def post(account, tag) -> Post:
    return Post.objects.create(user=account, title="tytuł", description="opis", create_date='2023-10-10', image='ścieżka do brazka', tag=tag)


@pytest.fixture
def comment(post, account) -> Comment:
    return Comment.objects.create(post=post, user=account, comment_text="komentarz", create_date='2023-10-10')


@pytest.fixture
def subcomment(post, account, comment) -> Subcomment:
    return Subcomment.objects.create(parrent_comment=comment, user=account, comment_text="komentarz2", create_date='2023-10-10')


@pytest.fixture
def like(post, account) -> PostLike:
    return PostLike.objects.create(type=1, user=account, post=post)


@pytest.fixture
def post_payload():
    payload = {
        'title': 'Lewis Hamilton',
        'user': 1,
        'description': 'Desc...',
        'tag': 1,
        'image': ''
    }
    return payload