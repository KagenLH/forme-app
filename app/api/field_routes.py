from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Field, db

field_routes = Blueprint('fields', __name__)


@field_routes.route('/', methods=['POST'])
def fields():
    if request.method == 'POST':
        # get fields data from request body
        data = request.get_json()
        form_fields = []

        for info in data:
            field = Field(
                form_id=info["form_id"],
                type=info["type"],
                label=info["label"],
                max_length=info["max_length"],
                required=info["required"],
                placeholder=info["placeholder"],
                instructions=info["instructions"],
                choices=info["choices"]
            )

            # db.session.add(field)
            form_fields.append(field)

        # adds each instance individually
        db.session.add_all(form_fields)
        db.session.commit()

        # must return dictionary, tuple, or string
        return {"fields": [field.to_dict for field in form_fields]}


@field_routes.route('/forms/<int:id>')
def form_fields(id):
    fields = Field.query.filter_by(form_id=id).all()

    return {'fields': [field.to_dict for field in fields]}
