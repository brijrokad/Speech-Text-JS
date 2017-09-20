import os
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('front.html', title='this')

class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r"/", MainHandler)
        ]
        settings = {
            "debug": True,
            "static_path": './static'
        }
        tornado.web.Application.__init__(self, handlers, **settings)

if __name__ == "__main__":
    app = Application()
    app.listen(8888)
    tornado.ioloop.IOLoop.instance().start()