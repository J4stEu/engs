from app import application
from models import News, NewsSchema
from models import Gallery, GallerySchema
from models import Files, FilesSchema
from models import Proverbs, ProverbsSchema
import random
from app import db
from flask import request, jsonify

#news settings
@application.route('/api/news', methods = ['POST'])
def news():
    if request.method == 'POST':
        n = News.query.limit(5).all()
        #n = News.query.all()
        newsSchema = NewsSchema(many=True)
        output = newsSchema.dump(n)
        return jsonify(output)

@application.route('/api/get_more_news', methods = ['POST'])
def get_more_news():
    if request.method == 'POST':
        idList = [((request.json['postsCounted'] + 1) + new_id) for new_id in range(5)]
        n = News.query.filter(News.id.in_(idList)).all()
        newsSchema = NewsSchema(many=True)
        output = newsSchema.dump(n)
        return jsonify(output)

@application.route('/api/init_post', methods = ['POST'])
def init_post():
    if request.method == 'POST':
        n = News.query.filter(News.id == int(request.json['postId'])).all()
        newsSchema = NewsSchema(many=True)
        output = newsSchema.dump(n)
        return jsonify(output)

@application.route('/api/posts_count', methods = ['POST'])
def posts_count():
    if request.method == 'POST':
        n = News.query.count()
        return jsonify(n)

@application.route('/api/proverb', methods = ['POST'])
def proverb():
    if request.method == 'POST':
        prId = Proverbs.query.count()
        randProverbId = random.randint(1, prId)
        n = Proverbs.query.filter(Proverbs.id == randProverbId).all()
        proverbsSchema = ProverbsSchema(many=True)
        output = proverbsSchema.dump(n)
        return jsonify(output)

#gallery settings
@application.route('/api/gallery', methods = ['POST'])
def gallery():
    if request.method == 'POST':
        n = Gallery.query.all()
        gallerySchema = GallerySchema(many=True)
        output = gallerySchema.dump(n)
        return jsonify(output)

@application.route('/api/get_files', methods = ['POST'])
def get_files():
    if request.method == 'POST':
        n = Files.query.all()
        filesSchema = FilesSchema(many=True)
        output = filesSchema.dump(n)
        return jsonify(output)