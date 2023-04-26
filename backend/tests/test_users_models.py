import pytest
from users.models import Account, AccountManager


@pytest.fixture
def account_user() -> Account:
    return Account.objects.create(username="john", email="john@gmail.com", password="password", first_name="John", last_name="Doe")


@pytest.fixture
def account_superuser() -> Account:
    return Account.objects.create(username="john", email="john@gmail.com", password="password", first_name="John", last_name="Doe", is_superuser=True)


@pytest.mark.django_db
def test_users_models_account(account_user):
    assert account_user.first_name == "John"
    assert account_user.last_name == "Doe"
    assert account_user.email == "john@gmail.com"
    assert account_user.password == "password"


@pytest.mark.xfail
@pytest.mark.django_db
def test_users_models_property_is_not_staff(account_user):
    assert account_user.is_staff == True


@pytest.mark.django_db
def test_users_models_property_is_staff(account_superuser):
    assert account_superuser.is_staff == True
