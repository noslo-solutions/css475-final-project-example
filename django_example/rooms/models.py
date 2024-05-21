from django.db import models

class Room(models.Model):
    building = models.CharField(max_length=10)
    room = models.CharField(max_length=5)
    capacity = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.building} {self.room}"
