from app import application
from models import News, NewsSchema
from models import Gallery, GallerySchema
from models import Files, FilesSchema
from models import Proverbs, ProverbsSchema
import random
from app import db
from flask import request, jsonify
import json

#news settings
@application.route('/api/news', methods = ['GET'])
def news():
    if request.method == 'GET':
        n = News.query.limit(5).all()
        #n = News.query.all()
        newsSchema = NewsSchema(many=True)
        output = newsSchema.dump(n)
        return jsonify(output)

@application.route('/api/more_news', methods = ['GET'])
def more_news():
    if request.method == 'GET':
        postsCounted = request.values.get('postsCounted')
        idList = [((int(postsCounted) + 1) + new_id) for new_id in range(5)]
        n = News.query.filter(News.id.in_(idList)).all()
        newsSchema = NewsSchema(many=True)
        output = newsSchema.dump(n)
        return jsonify(output)

@application.route('/api/init_post', methods = ['GET'])
def init_post():
    if request.method == 'GET':
        postId = request.values.get('postId')
        n = News.query.filter(News.id == int(postId)).all()
        newsSchema = NewsSchema(many=True)
        output = newsSchema.dump(n)
        return jsonify(output)

@application.route('/api/posts_count', methods = ['GET'])
def posts_count():
    if request.method == 'GET':
        n = News.query.count()
        return jsonify(n)

@application.route('/api/proverb', methods = ['GET'])
def proverb():
    if request.method == 'GET':
        prId = Proverbs.query.count()
        randProverbId = random.randint(1, prId)
        n = Proverbs.query.filter(Proverbs.id == randProverbId).all()
        proverbsSchema = ProverbsSchema(many=True)
        output = proverbsSchema.dump(n)
        return jsonify(output)

#gallery settings
@application.route('/api/gallery', methods = ['GET'])
def gallery():
    if request.method == 'GET':
        n = Gallery.query.all()
        gallerySchema = GallerySchema(many=True)
        output = gallerySchema.dump(n)
        return jsonify(output)

@application.route('/api/files', methods = ['GET'])
def get_files():
    if request.method == 'GET':
        n = Files.query.all()
        filesSchema = FilesSchema(many=True)
        output = filesSchema.dump(n)
        return jsonify(output)