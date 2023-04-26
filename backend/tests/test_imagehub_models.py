import pytest
from imagehub.models import Post, Comment, Subcomment, PostLike
from users.models import Account


@pytest.fixture
def account() -> Account:
    return Account.objects.create(email='abc@aaa.com', password='password')


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


@pytest.mark.django_db
def test_imagehub_model_post(post):
    print(post)
    assert post.title == "tytuł"


@pytest.mark.django_db
def test_imagehub_model_comment(comment):
    print(comment)
    assert comment.comment_text == "komentarz"


@pytest.mark.django_db
def test_imagehub_model_subcomment(subcomment):
    print(subcomment)
    assert subcomment.comment_text == "komentarz2"


@pytest.mark.django_db
def test_imagehub_model_post_like(like):
    print(like)
    assert like.type == 1
