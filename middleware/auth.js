
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(" ")[1];
    // décoder le token en vérifiant qu'il correspond avec sa clef secrète
    const decodedToken = jwt.verify(token,"RANDOM_TOKEN_SECRET");
    // on récupère le user id décodé par le jwt.vérify
    const userId = decodedToken.userId;
    // on rajoute l'objet userId à l'objet requete
    req.auth = { userId };
    // si il y a un userId et que les id sont différants entre requete et token
    if (req.body.userId && req.body.userId !== userId) {
      // renvoi un message
      throw error;
      // sinon c'est que c'est bon
    } else {
      req.auth = { userId };
      // passe au suivant
      next();
    }
    // si il y a une erreur
  } catch (error) {
    // reponse status 401 Unauthorized 
    res.status(401).json({ error });
  }
};
