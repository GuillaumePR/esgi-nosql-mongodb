# esgi-nosql-mongodb
ESGI course about NoSQL, and more specifically, the use of MngoDB with Docker.

Run mongo db docker:
$ docker run -p 27017:27017 esgi-mongodb

Go to mongo db docker:
$ docker exec -it esgi-mongodb bash

Import listing files into mogodb docker:
$ docker cp listings.csv esgi-mongodb:/

Import listing.csv from docker files to mongodb database:
$ mongoimport --db='airbnb' --collection='listings' --file=listings.csv --type=csv --headerline

Connected to MongoDB database via Studio 3T using adress "localhost:27017".

In docker bash:
$ mogosh
to switch to mongo shell

then, switch to the airbnb database with:
> use airbnb

To see samples of data stored in the db, type:
> db.listings.find()
and for the number of entries in listings, type:
> db.listings.count()

To get the number of offers in the neighbourhood of "Bègles":
> db.listings.count({"neighbourhood": /.*Bègles*/})
OUT : 265
and to get the offers from the same neighbourhood:
> db.listings.find({"neighbourhood": /.*Bègles*/}

Top 3 offers in the Bègles neighbourhood sorted by ratings:
> db.listings.find({"neighbourhood": /.*Bègles*/, "number_of_reviews": {"$gt": 0}}).sort({"review_scores_rating": -1}).limit(3)

To increase the price of the offer with the ID 6891646 to $210.00:
> 

To count the number of offers which includes a "Refrigirator":
> 

Find the most expensive offer:
> 

Delete all offers from the host "GuestReady":
> 

/ranking?page=1&page=10 with .skip((page-1) * parPage).limit(perPage) creating an api route
Have the number of offers per neighbourhood using aggregates.
