from app.models import db, Form


def seed_forms():
    test = Form(
        title='Test Form',
        owner_id='1',
        description='This is a test form.'
        # label_align=None
        # description_align=None
        # title_align=None
    )
    test2 = Form(
        title='Another Test Form',
        owner_id='1',
        description='This is a another test form.'
        # label_align=None
        # description_align=None
        # title_align=None
    )

    db.session.add(test)
    db.session.add(test2)
    db.session.commit()


def undo_forms():
    db.session.execute('TRUNCATE forms RESTART IDENTITY CASCADE;')
    db.session.commit()
