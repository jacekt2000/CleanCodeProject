import pytest


@pytest.mark.django_db
def test_imagehub_model_post(post):
    custom_title = "Ab c d"
    post.title = custom_title

    print(post)
    assert post.title == custom_title


@pytest.mark.django_db
def test_imagehub_model_comment(comment):
    custom_comment = "Jakiś komentarz"
    comment.comment_text = custom_comment

    print(comment)
    assert comment.comment_text == custom_comment


@pytest.mark.django_db
def test_imagehub_model_subcomment(subcomment):
    custom_subcomment = "Jakiś komentarz do komentarzaaaaa"
    subcomment.comment_text = custom_subcomment

    print(subcomment)
    assert subcomment.comment_text == custom_subcomment


@pytest.mark.django_db
def test_imagehub_model_post_like(like):
    custom_like = 1
    like.type = custom_like

    print(like)
    assert like.type == custom_like
