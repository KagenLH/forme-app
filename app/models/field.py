from .db import db


class Field(db.Model):
    __tablename__ = 'fields'

    id = db.Column(db.Integer, primary_key=True)
    form_id = db.Column(db.Integer, db.ForeignKey('forms.id'), nullable=False)
    type = db.Column(db.String(10), nullable=False)
    label = db.Column(db.String(55))
    max_length = db.Column(db.Integer)
    required = db.Column(db.Boolean, nullable=False)
    placeholder = db.Column(db.String(255))
    instructions = db.Column(db.String(255))
    choices = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'forms': self.forms,  # due to bidirectional relationship
            'form_id': self.form_id,
            'type': self.type,
            'label': self.label,
            'max_length': self.max_length,
            'required': self.required,
            'placeholder': self.placeholder,
            'instructions': self.instructions,
            'choices': self.choices
        }
