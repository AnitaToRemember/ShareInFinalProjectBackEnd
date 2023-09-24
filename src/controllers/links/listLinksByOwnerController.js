// Importing models
const selectAllLinkPostsModel = require('../../models/links/selectAllLinkPostsModel');

// Final controller function that returns the list of entries created by the owner.
const listLinksByOwnerController = async (req, res, next) => {
    try {
        // Get the user's ID from the authenticated user (assuming you have authentication middleware).
        const userId = req.user.id;

        // Fetch links created by the owner (user with userId)
        const links = await selectAllLinkPostsModel('', userId);

        res.send({
            status: 'ok',
            data: {
                links,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = listLinksByOwnerController;
