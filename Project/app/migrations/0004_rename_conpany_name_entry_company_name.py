# Generated by Django 4.2.4 on 2023-08-22 20:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_entry_conpany_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entry',
            old_name='conpany_name',
            new_name='company_name',
        ),
    ]
