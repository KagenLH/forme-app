from .db import db


class Form(db.Model):
    __tablename__ = 'forms'

    id = db.Column(db.Integer, primary_key=True)
    fields = db.relationship('Field', backref='forms', lazy=True)
    title = db.Column(db.String(50))
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description = db.Column(db.Text)
    label_placement = db.Column(db.String(10))
    description_align = db.Column(db.String(10))
    title_align = db.Column(db.String(10))

    def to_dict(self):
        return {
            'id': self.id,
            'fields': self.fields,
            'title': self.title,
            'owner_id': self.owner_id,
            'description': self.description,
            'label_placement': self.label_placement,
            'description_align': self.description_align,
            'title_align': self.title_align
        }
