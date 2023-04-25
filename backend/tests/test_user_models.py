import pytest
from users.models import Account, AccountManager

@pytest.mark.django_db
def test_user_model():
    account = Account.objects.create(
        email="john@gmail.com",
        password="password"
    )

    assert account.email == "john@gmail.com"
    assert account.password == "password"


@pytest.mark.django_db
def test_user_model_all():
    account = Account.objects.create(
        first_name="John",
        last_name="Doe",
        email="john@gmail.com",
        password="password",
        is_superuser=True
    )

    assert account.first_name == "John"
    assert account.last_name == "Doe"
    assert account.email == "john@gmail.com"
    assert account.password == "password"
    assert account.is_superuser == True


@pytest.mark.django_db
def test_user_is_staff():
    account = Account()
    assert account.is_staff == False
