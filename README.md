# MongoDB

### 1 - Lancer un container Mongo
- `docker run -p 27017:27017 mongo`

### 2 - Importation de données
- `mongoimport --db airbnb --type csv --headerline --host "localhost:27017"  --file "listings.csv"`

### 3 - Tester commande find et count
- `db.listings.find()`
- `db.listings.count()`

### 4 - Combien d'offres pour le quartier de "Bègles" avec count ?
- `db.listings.find({'neighbourhood': /Bègles/}).count()`

### 5 - Lister les offres du même quartier
- `db.listings.find({'neighbourhood': /Bègles/})`

### 6 - Lister le Top 3 des offres du quartier par note moyenne avec find
- `db.listings.find({'neighbourhood': /Bègles/}).sort({'review_scores_rating': 1}).limit(3)`

### 7 - Augmenter le prix du logement ayant l'id 
- `db.listings.updateOne({'id': 6891646}, {"$set": {'price': '$210.00'}})`

### 8 - Compter le nombre de logements avec un réfrigérateur
- `db.listings.find({'amenities': /Refrigerator/}).count()`

### 9 - Trouver le logement le plus cher
- `db.listings.find().sort({'price': -1}).limit(1)`

### 10 - Supprimer tous les logements du host 'GuestReady' en 1 seule commande
- `db.listings.deleteMany({'host_name': 'GuestReady'})`


### 11 - Faire une route qui affiche en fonction de ce qu'on met en paramètre dans l'URL les logements dans l'ordre décroissant avec une pagination 

- La route est dans le fichier 'index.js' qui se trouve dans le répertoire 'routes/'

### 12 - Trouver un moyen d'avoir le nombre de logement par quartier (aggregate) (Renvoie un tableau avec un le nom du quartier et le nombre du logement)
- `db.listings.aggregate([{ $group: { _id: "$neighbourhood", count: { $sum: 1 }}}])`


Après avoir clone le répertoire, il faut faire un 'npm install' pour récupérer toute les dépendances.

Pour lancer l'application, il faut faire un 'npm run dev'
