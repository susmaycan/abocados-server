module.exports = {
    findAll: async (req, res) => {
        const db = require('../data/db.json')
        if (db) {
            res.send(db)
        } else {
            res.status(500).send({
                message: "Error 500 - Could not retrieve data."
            });
        }
    }
};
