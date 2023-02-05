const ProductSchema = require('../../models/Product')
const FillingSchema = require('../../models/Filling')
const SizeSchema = require('../../models/Size')
const MarketSchema = require('../../models/Market')
const SauceSchema = require('../../models/Sauce')
const BreadSchema = require('../../models/Bread')
const VegetableSchema = require('../../models/Vegetable')

module.exports.getProducts = async (req, res) => {
    await ProductSchema.find().then(data => {
        res.send(data)
    }).catch((e) => res.send(e));
}

module.exports.getFillings = async (req, res) => {
    await FillingSchema.find().then(data => {
        res.send(data)
    }).catch((e) => res.send(e));
}

module.exports.getSizes = async (req, res) => {
    await SizeSchema.find().then(data => {
        res.send(data)
    }).catch((e) => res.send(e));
}

module.exports.getMarkets = async (req, res) => {
    await MarketSchema.find().then(data => {
        res.send(data)
    }).catch((e) => res.send(e));
}

module.exports.getSauces = async (req, res) => {
    await SauceSchema.find().then(data => {
        res.send(data)
    }).catch((e) => res.send(e));
}

module.exports.getBreads = async (req, res) => {
    await BreadSchema.find().then(data => {
        res.send(data)
    }).catch((e) => res.send(e));
}

module.exports.getVegetables = async (req, res) => {
    await VegetableSchema.find().then(data => {
        res.send(data)
    }).catch((e) => res.send(e));
}

