const ctrl = {};

const { Image } = require('../models');

ctrl.index = async (req, res) => {
    await Image.find().sort({ timestamp: -1 }).limit(6).then(documentos => {
        const contexto = {
            images: documentos.map(documento => {
                return {
                    views: documento.views,
                    likes: documento.likes,
                    id: documento._id,
                    title: documento.title,
                    filename: documento.filename,
                    description: documento.description,
                    timestamp: documento.timestamp,
                    uniqueId: documento.uniqueId
                }
            })
        }
        res.render('index', { images: contexto.images })
    });
};

module.exports = ctrl;