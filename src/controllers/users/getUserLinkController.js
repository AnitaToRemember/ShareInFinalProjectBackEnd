const selectLinkPostOwnerModel = require("../../models/links/selectLinkPostOwnerModel");

const getUserLinkController = async (req, res, next) => {
		try {
			const { userId } = req.user;

			const userLinks = await selectLinkPostOwnerModel(userId);
	
			res.send({
				status: 'ok',
				data: 
					userLinks,
			});
		} catch (error) {
			next(error);
		}
	};

	module.exports = getUserLinkController;
