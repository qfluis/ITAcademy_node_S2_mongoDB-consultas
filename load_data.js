db = db.getSiblingDB('restaurantes');
db.restaurantes.drop();

db.restaurantes.insertMany([{
    "_id": {
        "$oid": "62507a572562bda400438a7a"
    },
    "address": {
        "building": "1007",
        "coord": [
            -73.856077,
            40.848447
        ],
        "street": "Morris Park Ave",
        "zipcode": "10462"
    },
    "borough": "Bronx",
    "cuisine": "Bakery",
    "grades": [
        {
            "date": {
                "$date": "2014-03-03T00:00:00Z"
            },
            "grade": "A",
            "score": 2
        },
        {
            "date": {
                "$date": "2013-09-11T00:00:00Z"
            },
            "grade": "A",
            "score": 6
        },
        {
            "date": {
                "$date": "2013-01-24T00:00:00Z"
            },
            "grade": "A",
            "score": 10
        },
        {
            "date": {
                "$date": "2011-11-23T00:00:00Z"
            },
            "grade": "A",
            "score": 9
        },
        {
            "date": {
                "$date": "2011-03-10T00:00:00Z"
            },
            "grade": "B",
            "score": 14
        }
    ],
    "name": "Morris Park Bake Shop",
    "restaurant_id": "30075445"
}, {
    "_id": {
        "$oid": "62507a572562bda400438a7b"
    },
    "address": {
        "building": "469",
        "coord": [
            -73.961704,
            40.662942
        ],
        "street": "Flatbush Avenue",
        "zipcode": "11225"
    },
    "borough": "Brooklyn",
    "cuisine": "Hamburgers",
    "grades": [
        {
            "date": {
                "$date": "2014-12-30T00:00:00Z"
            },
            "grade": "A",
            "score": 8
        },
        {
            "date": {
                "$date": "2014-07-01T00:00:00Z"
            },
            "grade": "B",
            "score": 23
        },
        {
            "date": {
                "$date": "2013-04-30T00:00:00Z"
            },
            "grade": "A",
            "score": 12
        },
        {
            "date": {
                "$date": "2012-05-08T00:00:00Z"
            },
            "grade": "A",
            "score": 12
        }
    ],
    "name": "Wendy'S",
    "restaurant_id": "30112340"
}
]);