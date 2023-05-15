from django.contrib import admin
from django.contrib.auth import get_user_model
#
# class AccountAdmin(admin.ModelAdmin):
#     list_display = ('name', 'email', )
# #
# admin.register(Account, AccountAdmin)
#
# # admin.site.unregister(get_user_model())
admin.site.register(get_user_model())
