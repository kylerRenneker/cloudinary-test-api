const express = require('express')
const cloudinary = require('cloudinary')
const multerUploads = require('./multer')

const cloudinaryRouter = express.Router()

cloudinaryRouter
    .route('/upload-image')
    .post(multerUploads, (req, res, next) => {
        console.log('req.file: ', req.file)
        console.log(req.body)
        // const { image } = req.body
        // cloudinary.uploader.upload(`${image}`, function(err, result){
        //     console.log(result, err)
        // })
        // .catch(next)
    })

module.exports= cloudinaryRouter