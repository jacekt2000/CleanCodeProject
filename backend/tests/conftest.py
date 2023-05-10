import pytest
from imagehub.models import Post, Comment, Subcomment, PostLike
from users.models import Account


#users fixtures
@pytest.fixture
def account_user() -> Account:
    return Account.objects.create(username="john", email="john@gmail.com", password="password", first_name="John", last_name="Doe")

@pytest.fixture
def account_superuser() -> Account:
    return Account.objects.create(username="john", email="john@gmail.com", password="password", first_name="John", last_name="Doe", is_superuser=True)

@pytest.fixture
def account() -> Account:
    return Account.objects.create(email='abc@aaa.com', password='password')



#imagehub textures
@pytest.fixture
def post(account) -> Post:
    return Post.objects.create(user_id=account, title="tytuł", description="opis", create_date='2023-10-10', image='ścieżka do brazka', tags=['tag1','tag2'])


@pytest.fixture
def comment(post, account) -> Comment:
    return Comment.objects.create(post_id=post, user_id=account, comment_text="komentarz", create_date='2023-10-10')


@pytest.fixture
def subcomment(post, account, comment) -> Subcomment:
    return Subcomment.objects.create(parrent_comment=comment, post_id=post, user_id=account, comment_text="komentarz2", create_date='2023-10-10')


@pytest.fixture
def like(post, account) -> PostLike:
    return PostLike.objects.create(type=1, user_id=account, post_id=post)