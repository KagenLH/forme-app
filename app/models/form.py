from .db import db


class Form(db.Model):
    __tablename__ = 'forms'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    owner_id = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text)
    label_align = db.Column(db.String(10))
    description_align = db.Column(db.String(10))
    title_align = db.Column(db.String(10))
