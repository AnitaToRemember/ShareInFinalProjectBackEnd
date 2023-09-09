//Importing dependencies
const express = require('express');
const router = express.Router();


//Importing intermediate controller functions
const {
    authUser, 
    authUserOptional,
    linkPostExists,
    userExists, 
}= require('../middlewares');

//Importing final controller functions

const { 
    newLinkController, 
    listLinksController, 
    getLinkController, 
    votePostedLinkController, 
    deteleLinkByIdController
} = require('../controllers/links');
const listLinksByOwnerController = require('../controllers/links/listLinksByOwnerController');


//Creating a new post with a link
router.post('/links', authUser, userExists, newLinkController);

//Obtaining all the posts
router.get('/links', authUserOptional, listLinksController);

//Obtaining all the posts form one user
router.get('/mylinks', authUser, listLinksByOwnerController);

//Filter all the posts
router.get('/links/filter', authUserOptional, listLinksController);

//Selecting an specific link post by id
router.get('/links/:linkId', authUserOptional, linkPostExists, getLinkController);

//vote a link posted
router.post('/links/:linkId/votes', authUser, userExists, linkPostExists, votePostedLinkController);

//delete a posted link
router.delete('/links/:linkId', authUser, userExists, linkPostExists, deteleLinkByIdController);

module.exports = router;