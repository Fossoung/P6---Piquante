
const multer = require("multer");
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/bmp": "bmp",
  "image/gif": "gif",
  "image/x-icon": "ico",
  "image/svg+xml": "svg",
  "image/tiff": "tif",
  "image/tif": "tif",
  "image/webp": "webp",
};
const storage = multer.diskStorage({
  // on choisit la destination
  destination: (req, file, callback) => {
    // null dit qu'il n'y a pas eu d'erreur à ce niveau la et 'images' c'est le nom du dossier
    callback(null, "images");
  },
  // on definit les termes de son appel 
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/bmp" ||
      file.mimetype === "image/gif" ||
      file.mimetype === "image/ico" ||
      file.mimetype === "image/svg" ||
      file.mimetype === "image/tiff" ||
      file.mimetype === "image/tif" ||
      file.mimetype === "image/webp"
    ) {
      // aura son nom associé à une date (pour le rendre le plus unique possible) et un point et son extension
      callback(null, name + Date.now() + "." + extension);
      // si ce n'est pas un fichier image
    } else {
      console.log("fichier non accepté");
      callback(
        null,
        "isole/" + req.auth.userId + "_" + name + Date.now() + "." + extension
      );
    }
  },
});
module.exports = multer({ storage }).single("image");
