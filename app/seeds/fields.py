from app.models import db, Field


def seed_fields():
    testField = Field(
        type="text",
        form_id=1,
        label="Name",
        required=False
    )

    db.session.add(testField)
    db.session.commit()


def undo_fields():
    db.session.execute('TRUNCATE fields RESTART IDENTITY CASCADE;')
    db.session.commit()
