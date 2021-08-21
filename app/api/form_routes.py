from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import Form, db, Field

form_routes = Blueprint("forms", __name__)


# get all forms --- remove this route?
@form_routes.route('/')
# @login_required
def get_forms():
    forms = Form.query.all()  # original query for ALL forms
    return {'forms': [form.to_dict() for form in forms]}


# @form_routes.route('/<int:id>', methods=['GET', 'DELETE'])
# @login_required
# def forms(id):
#     # get a specific form by primary key
#     if request.method == 'GET':
#         form = Form.query.get(id)
#         return form.to_dict()
#     # delete a specific form by primary key
#     elif request.method == 'DELETE':
#         form = Form.query.get(id)  # takes a form's id

#         db.session.delete(form)
#         db.session.commit()
#         return form.to_dict()


# (GET) allow user to access a form without being logged in, i.e. SHARED form
@form_routes.route('/<int:id>/shared')
def shared_form(id):
    form = Form.query.get(id)
    return form.to_dict()


# get forms by owner_id (i.e. all forms owned by a specific user)
@form_routes.route('/users/<int:id>')
def user_forms(id):  # takes a user's id
    forms = Form.query.filter_by(owner_id=id).all()
    # destructure in forms store
    return {'forms': [form.to_dict() for form in forms]}


@form_routes.route('/build', methods=['POST'])
@login_required
def create_form():
    # print('***** REQUEST DATA INFO *****', request.get_json())

    user_id = session['_user_id']

    # pull JSON data from request body
    data = request.get_json()
    form_fields = []

    form = Form(
        title=data["title"],
        owner_id=user_id,
        description=data["description"],
        label_placement=data["labelPlacement"],
        description_align=data["descriptionAlignment"],
        title_align=data["titleAlignment"],
    )

    db.session.add(form)
    db.session.commit()

    print('FORM FORM FORM:', form)

    for field_info in data["fields"]:
        if (type(field_info["maxLength"]) is not int):
            field_info["maxLength"] = None
        else:
            int(field_info["maxLength"])
        print('*******max length ********',field_info["maxLength"])
        field = Field(
            type=field_info["type"],
            label=field_info["label"],
            max_length=field_info["maxLength"],
            required=field_info["required"],
            placeholder=field_info["placeholder"],
            instructions=field_info["instructions"],
            choices=field_info["choices"],
            form_id=form.id
        )

        # db.session.add(field)
        form_fields.append(field)
        
    db.session.add_all(form_fields)
    db.session.commit()

    # form.fields = form_fields
    # db.session.commit

    return form.to_dict()


# ! currently causes error "405 method not allowed"
# ! when not bundled with `user_forms(id)` above
# delete a specific form by primary key
# @form_routes.route('/<int:id>', methods=['DELETE'])
# def delete_form(id):
#     if request.method == 'DELETE':
#         form = Form.query.get(id)

#         db.session.delete(form)
#         db.session.commit()
#         return form.to_dict()


@form_routes.route('/<int:id>')
def get_form(id):
    form = Form.query.filter(Form.id == id).first()
    # fields = Field.query.filter(Field.form_id == form.id).all()

    print('FORM IS HERE!!! ', form.to_dict())
    # print('FIELD IS HERE!!!!! ***',
    #       {'fields': [field.to_dict() for field in fields]})
    
    # form["fields"] = {'fields': [field.to_dict() for field in fields]}

    return form.to_dict()
