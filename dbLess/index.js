const dbLess =  {
    "settings": {
        "themeName": "default",
        "templateName": "page",
        "siteTitle": "ComponentJS",
        "siteDesc": "Component based development with NextJS",
    },
    "pages": [
        {
            "slug": "index",
            "title": ["Home", "H1", ""],
            "content": ["This is the home page"],
            "template": "home",
            "path": "/",
            "order": 0,
            "published": true,
            "created": ["2021-10-01T00:00:00.000Z"],
            "updated": "2021-10-01T00:00:00.000Z"
        },
        {
            "slug": "about",
            "title": ["About", "H1", ""],
            "content": "This is the about page",
            "template": "default",
            "path": "/about",
            "order": 1,
            "published": true,
            "created": "2021-10-01T00:00:00.000Z",
            "updated": "2021-10-01T00:00:00.000Z"
        },
        {
            "slug": "contact",
            "title": ["Contact", "H1", ""],
            "content": "This is the contact page",
            "template": "default",
            "path": "/contact",
            "order": 2,
            "published": true,
            "created": "2021-10-01T00:00:00.000Z",
            "updated": "2021-10-01T00:00:00.000Z"
        }
    ],
}

export default dbLess;