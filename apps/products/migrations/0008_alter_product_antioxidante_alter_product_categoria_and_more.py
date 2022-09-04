# Generated by Django 4.1 on 2022-09-04 21:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_galeria'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='antioxidante',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.antioxidante'),
        ),
        migrations.AlterField(
            model_name='product',
            name='categoria',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.categoria'),
        ),
        migrations.AlterField(
            model_name='product',
            name='conservador',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.conservador'),
        ),
        migrations.AlterField(
            model_name='product',
            name='estabilizante',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.estabilizante'),
        ),
        migrations.AlterField(
            model_name='product',
            name='ingredientes',
            field=models.ManyToManyField(related_name='products', to='products.ingrediente'),
        ),
        migrations.AlterField(
            model_name='product',
            name='sub_categoria',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.categoriasub'),
        ),
    ]
