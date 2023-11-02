import multer, { FileFilterCallback } from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryConfig";

// https://dev.to/franciscomendes10866/image-upload-to-cloudinary-with-node-js-523o

const upload = multer({
  storage: new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      //@ts-ignore
      folder: "DEV",
    },
  }),
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/gif"
    ) {
      // File type is accepted; upload the file, passing null as the error param
      cb(null, true);
    } else {
      // format not supported. Deny the upload with custom error
      cb(
        //@ts-ignore
        new Error(
          "File format not supported. Please upload png/jpeg/gif only."
        ),
        false
      );
    }
  },
});

export default upload;
