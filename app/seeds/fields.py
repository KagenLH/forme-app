from app.models import db, Field
from app.models import Form


def seed_fields():
    form = Form(
        title='To Test Fields',
        owner_id=1
    )
    db.session.add(form)

    testField = Field(
        type="text",
        label="Test Field",
        required=False,
        form=form,  # creates the form_id / association
        choices='Some Stuff&&Another choice&&Hello from hell&&'
    )

    db.session.add(testField)
    db.session.commit()


def undo_fields():
    db.session.execute('TRUNCATE fields RESTART IDENTITY CASCADE;')
    db.session.commit()
