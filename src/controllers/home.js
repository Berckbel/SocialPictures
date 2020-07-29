const { model } = require("mongoose");

const ctrl = {};

ctrl.index = (req, res) => {
    res.send('Index page');
};

module.exports = ctrl;