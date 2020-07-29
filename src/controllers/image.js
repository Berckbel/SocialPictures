const ctrl = {};

ctrl.index = (req, res)=>{
    res.send('Index page');
};

ctrl.create = (req, res)=>{
    res.send('Works');
};

ctrl.like = (req, res)=>{
    res.send('Like page');
};

ctrl.comment = (req, res)=>{
    res.send('Comment page');
};

ctrl.remove = (req, res)=>{
    res.send('Remove page');
};

module.exports = ctrl;