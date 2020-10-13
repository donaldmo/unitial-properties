const express = require('express');
const { body } = require('express-validator');

const listingController = require('../controllers/listing');

const router = express.Router();

// GET listing/featured-listing
router.get('/featured-listings', listingController.getListing);

// POST listing/create-listing
const createPostValidator = [
	body('title').trim().isLength({ min: 5 }),
	body('content').trim().isLength({ min: 5 })
];

router.post('/create-listing', listingController.createListing);

module.exports = router;