from django.db import models
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField
from apps.common.models import TimeStampedUUIDModel


class Enquiry(TimeStampedUUIDModel):
    name = models.CharField(verbose_name=_("Your Name"), max_length=100)
    phone_number = PhoneNumberField(
        verbose_name=_("Phone Number"), max_length=30, default="+84002165487"
    )
    email = models.EmailField(verbose_name=_("Email"))
    subject = models.CharField(_("Subject"), max_length=100)
    message = models.TextField(_("Message"))

    def __str__(self):
        return self.email

    class Meta:
        verbose_name_plural = "Enquiries"
