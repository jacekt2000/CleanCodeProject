import pytest


@pytest.mark.django_db
def test_users_models_account(account):
    custom_email = "abc@gmail.com"
    custom_username = "user123"
    custom_password = "1234A5678"

    account.email = custom_email
    account.username = custom_username
    account.password = custom_password

    print(account)
    
    assert account.username == custom_username
    assert account.email == custom_email
    assert account.password == custom_password


