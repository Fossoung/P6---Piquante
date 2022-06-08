// installez le package Mongoose en exécutant, à partir du dossier backend   npm install mongoose  https://atinux.developpez.com/tutoriels/javascript/mongodb-nodejs-mongoose/
const mongoose = require("mongoose");
// Mongoose est un package qui facilite les interactions avec notre base de données MongoDB. Il nous permet de :
// valider le format des données ; gérer les relations entre les documents ; communiquer directement avec la base de données pour la lecture et l'écriture des documents.
// remplacer l'adresse SRV par la vôtre, et la chaîne <PASSWORD> par votre mot de passe utilisateur MongoDB
mongoose
  .connect('mongodb+srv://fossoung:FO1997fssng@cluster0.jbsg7.mongodb.net/Data',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    console.log(
      "Successful connection to MongoDB (FR)Connexion à MongoDB réussie !"
    )
  )
  .catch((error) => console.log(error));
