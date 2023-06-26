var express = require("express");
var router = express.Router();
const { getDB } = require("../conn.js");

/* GET home page. */
router.get("/", async (req, res, next) => {
  //res.render('index', { title: 'Express' });
  let collection = await getDB().collection("listings");
  let results = await collection.find({}).limit(50).toArray();
  res.send(results).status(200);
});

router.get('/ranking', async (req, res, next) => {
  // Récupère les données dans l'URL 
  const page = parseInt(req.query.page) || 1;
  const parPage = parseInt(req.query.parPage) || 10;

  // Récupère le nombre total de page en fonction de la variable parPage
  let collection = await getDB().collection("listings");
  let totalCount = await collection.countDocuments({});
  let totalPages = Math.ceil(totalCount / parPage);

  // Récupère la liste des offres dans l'ordre décroissant des prix
  let results = await collection.find({})
    .sort({ price: -1 })
    .skip((page - 1) * parPage)
    .limit(parPage)
    .toArray();

  // Affiche le résultat de cette requête avec l'ID, le nom et le prix
  let formattedResults = results.map((listing) => {
    return `ID: ${listing.id} => Name: ${listing.name} => Prix: ${listing.price}\n`;
  });

  // Création de la pagination
  let pagination = [];
  for (let i = 1; i <= totalPages; i++) {
    pagination.push(`<a href="/ranking?page=${i}&parPage=${parPage}">${i}</a>`);
    pagination.push(' ');
  }

  // Join le résultat de la requête et la pagination
  let pageContent = formattedResults.join('<br>') + '<br><br>' + pagination.join('');

  res.send(pageContent).status(200);
}); 


module.exports = router;
