from django.contrib.auth.models import PermissionsMixin, BaseUserManager


class AccountManager(BaseUserManager):
    def create_user(self, username: str , email: str, first_name: str = None, last_name: str = None, password: str = None,  **kwargs):
        user = self.model(
            email=self.normalize_email(email),
            username=self.normaluze_username(username),
            first_name=first_name,
            last_name=last_name,
            **kwargs
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email: str, password: str = None, **kwargs):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password
        )
        user.is_admin = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)

        return user