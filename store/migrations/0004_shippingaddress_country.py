# Generated by Django 5.0.7 on 2024-08-24 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='shippingaddress',
            name='country',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
    ]
