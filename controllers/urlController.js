const Url = require("../models/urlModel");
const { nanoid } = require("nanoid");
const validUrl = require("valid-url");

const createShortUrl = async (req, res) => {
    const { originalUrl } = req.body;

    if(!originalUrl) {
        return res.status(400).json({
            success : false,
            message : "Please provide a URL"
        });
    }

    if(!validUrl.isUri(originalUrl)) {
        return res.status(400).json({
            success : false,
            message : "Invalid URL format"
        });
    }

    try {
        const shortCode = nanoid(7);
        const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

        const url = await Url.create({originalUrl, shortCode, shortUrl});

        return res.status(201).json({
            success : true,
            shortUrl : url.shortUrl
        });
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Server Error"
        });
    }
};

const redirectToOriginal = async (req, res) => {
    const { shortCode } = req.params;

    try {
        const url = await Url.findOne({ shortCode });

        if(!url) {
            return res.status(404).json({
                success : false,
                message : "URL not found"
            })
        }

        return res.redirect(url.originalUrl);
    } catch (error) {
        return res.status(500).json( { 
            success : false,
            message : "Server Error"
        });
    }
};

const deleteUrl = async (req, res) => {
    const { shortCode} = req.params;

    try {
        const url = await Url.findOneAndDelete( { shortCode });

        if(!url) {
            return res.status(404).json( {
                success : false,
                message : "URL not found"
            });
        return res.status(200).json({
            success : true,
            message : "URL deleted"
        });
        }
    } catch (error) {
        return res.status(500).json({
            status : false,
            message : "Server Error"
        });
    }
}

module.exports = { createShortUrl, redirectToOriginal, deleteUrl };

