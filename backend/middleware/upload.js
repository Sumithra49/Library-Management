const multer = require("multer");
const path = require("path"); // ✅ Required

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)), // uses path here!
});

const upload = multer({ storage });

module.exports = upload;
