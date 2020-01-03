const express = require('express')
const cloudinary = require('cloudinary').v2
const multerUploads = require('./multer')
const Datauri = require('datauri')
const datauri = new Datauri()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const cloudinaryRouter = express.Router()

cloudinaryRouter
    .route('/upload-image')
    .post(multerUploads, (req, res, next) => {
        if(req.file){
            const { buffer } = req.file
            datauri.format('.png', buffer)
            const file = datauri.content

            cloudinary.uploader.upload(file, function(err, result){
                if(result){
                    const imageUrl = result.url
                    res.status(200).json({
                        imageUrl
                    })
                }else{
                    res.status(400).json({
                        message: 'Something went wrong with your request',
                        data: {
                            err
                        }
                    })
                }
            })
            
        }
        
        
       
    })

module.exports= cloudinaryRouter