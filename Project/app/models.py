from django.db import models

from django.contrib.postgres.fields import ArrayField


class Companyname(models.Model):
    companyname = models.CharField(max_length=255)
    
    def __str__(self):
        return self.companyname



class Entry(models.Model):
    company_name=models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.CharField(max_length=255)
    cemail = models.CharField(max_length=255, null=True, blank=True)
    phone_no = models.CharField(max_length=255, null=True, blank=True)
    emp_id = models.CharField(max_length=255, null=True, blank=True)
    code = models.CharField(max_length=255, null=True, blank=True)
    value = models.CharField(max_length=255, null=True, blank=True)
    last_status = models.IntegerField(null=True, blank=True)
    