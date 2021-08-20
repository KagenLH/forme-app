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

        for field_info in data:
            field = Field(
                form_id=field_info["form_id"],
                type=field_info["type"],
                label=field_info["label"],
                max_length=field_info["max_length"],
                required=field_info["required"],
                placeholder=field_info["placeholder"],
                instructions=field_info["instructions"],
                choices=field_info["choices"]
            )

            # db.session.add(field)
            form_fields.append(field)

        # adds each instance individually, so list format is ok
        db.session.add_all(form_fields)
        db.session.commit()

        # must return dictionary, tuple, or string
        return {"fields": [field.to_dict for field in form_fields]}


@field_routes.route('/forms/<int:id>')
def form_fields(id):
    fields = Field.query.filter_by(form_id=id).all()

    return {'fields': [field.to_dict for field in fields]}
