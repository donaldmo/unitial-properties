const { validationResult } = require('express-validator');
const Listing = require('../models/listing');

// for testing and development only
let listingData = require('./listingData.json')

exports.getListing = (req, res, next) => {
  res.status(200).json([listingData]);
};

exports.createListing = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(442).json({
      message: 'Validation failed, entered data is incorrect.',
      errors: errors.array()
    })
  }

  const title = req.body.title;
  const content = req.body.content;

  let listing = {
    title: title,
    content: content,
    imageUrl: 'images/IMG_20200705_104719.jpg',
    creator: { 
      name: 'Donald' 
    }
  }

  res.status(201).json(listing)

  // Create post in db
  // const post = new Post({
  //   title: title,
  //   content: content,
  //   imageUrl: 'images/IMG_20200705_104719.jpg',
  //   creator: { 
  //     name: 'Donald' 
  //   }
  // })

  // post.save().then(res => {
  //   console.log(res);
    
  //   res.status(201).json({
  //     message: 'Post created successfully!',
  //     post: res
  //   })
  // })
  // .catch(error => {
  //   console.log(error)
  // })
};
