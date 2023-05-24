import pytest


@pytest.mark.django_db
def test_users_models_account(account_user):
    custom_email = "abc@gmail.com"
    custom_username = "user123"
    custom_password = "1234A5678"

    account_user.email = custom_email
    account_user.username = custom_username
    account_user.password = custom_password

    assert account_user.username == custom_username
    assert account_user.email == custom_email
    assert account_user.password == custom_password


@pytest.mark.xfail
@pytest.mark.django_db
def test_users_models_property_is_not_staff(account_user):
    assert account_user.is_staff == True


@pytest.mark.django_db
def test_users_models_property_is_staff(account_superuser):
    assert account_superuser.is_staff == True
