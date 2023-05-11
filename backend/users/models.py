from django.contrib.auth.models import PermissionsMixin, AbstractBaseUser
from django.db import models
from .manager import AccountManager
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail


class Account(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(unique=True, max_length=255)
    email = models.EmailField(unique=True)
    born_date = models.DateField(null=True, blank=True)
    first_name = models.CharField(max_length=255, null=True)
    last_name = models.CharField(max_length=255, null=True)
    #is_admin = models.BooleanField(default=False, editable=False)
    is_active = models.BooleanField(default=True, editable=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = AccountManager()

    @property
    def is_staff(self):
        return self.is_superuser


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "{}?token={}".format(reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message:
        email_plaintext_message,
        # from:
        "[email protected]",
        # to:
        [reset_password_token.user.email]
    )