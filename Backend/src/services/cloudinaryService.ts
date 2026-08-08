import cloudinary from "../config/cloudinary";
import streamifier from "streamifier";

const uploadImage = (file: Express.Multer.File): Promise<string> => {

    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({folder: "olx-products",},(error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result!.secure_url);
            }
        );

        streamifier
            .createReadStream(file.buffer)
            .pipe(uploadStream);
    });
};

export default uploadImage;