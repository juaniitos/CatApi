from django.db import models

# Create your models here.
class Cats(models.Model):
    name = models.CharField(max_length=200)
    race = models.CharField(max_length=200)
    age = models.IntegerField(default=0)
    photo = models.TextField(blank=False)
    fauvorite = models.BooleanField(default=False)

    def __str__(self):
        return self.name
