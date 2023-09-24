// Importing dependencies model
const { selectUserByIdModel } = require('../../models/users');

const getOwnUserController = async (req, res, next) => {
    try {
        // Obtaining new user data.
        let user = await selectUserByIdModel(req.user.id);
        user.avatar = `http://${req.headers.host}/${user.avatar}`;

        res.send({
            status: 'ok',
            data: {
                user,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getOwnUserController;
