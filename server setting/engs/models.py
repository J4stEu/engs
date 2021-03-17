from app import db
from datetime import datetime
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field

class News(db.Model):
    __tablename__ = 'news'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(140), nullable=False)
    text = db.Column(db.Text, nullable=False)
    img = db.Column(db.Text, nullable=True)
    created = db.Column(db.DateTime, default=datetime.now())

    def __init__(self, *args, **kwargs):
        super(News, self).__init__(*args, **kwargs)
        
    def __repr__(self):
        return 'id: {}, title: {}, text: {}, img{}, created: {}>'.format(self.id, self.title, self.text, self.img, self.created)

class NewsSchema(SQLAlchemySchema):
    class Meta:
        model = News
        load_instance = True  # Optional: deserialize to model instances

    id = auto_field()
    title = auto_field()
    text = auto_field()
    img = auto_field()
    created = auto_field()

class Proverbs(db.Model):
    __tablename__ = 'proverbs'
    
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    created = db.Column(db.DateTime, default=datetime.now())

    def __init__(self, *args, **kwargs):
        super(Proverbs, self).__init__(*args, **kwargs)
        
    def __repr__(self):
        return 'id: {}, text: {}, created: {}>'.format(self.id, self.text, self.created)

class ProverbsSchema(SQLAlchemySchema):
    class Meta:
        model = Proverbs
        load_instance = True  # Optional: deserialize to model instances

    id = auto_field()
    text = auto_field()
    created = auto_field()

class Gallery(db.Model):
    __tablename__ = 'gallery'

    id = db.Column(db.Integer, primary_key=True)
    preview_src = db.Column(db.Text, nullable=False)
    src = db.Column(db.Text, nullable=False)
    created = db.Column(db.DateTime, default=datetime.now())

    def __init__(self, *args, **kwargs):
        super(Gallery, self).__init__(*args, **kwargs)
        
    def __repr__(self):
        return 'id: {}, preview_src: {}, src: {}, created: {}>'.format(self.id, self.preview_src, self.src, self.created)

class GallerySchema(SQLAlchemySchema):
    class Meta:
        model = Gallery
        load_instance = True  # Optional: deserialize to model instances

    id = auto_field()
    preview_src = auto_field()
    src = auto_field()
    created = auto_field()

class Files(db.Model):
    __tablename__ = 'files'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    src = db.Column(db.Text, nullable=False)
    created = db.Column(db.DateTime, default=datetime.now())

    def __init__(self, *args, **kwargs):
        super(Files, self).__init__(*args, **kwargs)
        
    def __repr__(self):
        return 'id: {}, title: {}, src: {}, created: {}>'.format(self.id, self.title, self.src, self.created)

class FilesSchema(SQLAlchemySchema):
    class Meta:
        model = Files
        load_instance = True  # Optional: deserialize to model instances

    id = auto_field()
    title = auto_field()
    src = auto_field()
    created = auto_field()