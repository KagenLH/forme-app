from app.models import db, Form


def seed_forms():
    test = Form(
            title = "Test Form Render",
            owner_id = 1,
            description = "",
            label_placement = "",
            description_align = "",
            title_align = "",
    )

    db.session.add(test)
    db.session.commit()


def undo_forms():
    db.session.execute('TRUNCATE forms RESTART IDENTITY CASCADE;')
    db.session.commit()
