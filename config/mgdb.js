
const mongoose = require("mongoose");
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
