var express = require('express');
var router = express.Router();
// var fs = require('fs-extra');
var auth = require('../config/auth');
var isUser = auth.isUser;

// Get Product model
var Product = require('../models/Product');

// Get Category model
var Category = require('../models/Category');

/*
 * GET all products
 */
router.get('/', function (req, res) {
    //router.get('/', isUser, function (req, res) {
    
        Product.find(function (err, products) {
            if (err)
                console.log(err);
    
            res.render('index', {
                title: 'All products',
                products: products
            });
        });
    
    });
    
    
    /*
     * GET products by category
     */
    router.get('/:category', function (req, res) {
    
        var categorySlug = req.params.category;
    
        Category.findOne({param: categorySlug}, function (err, c) {
            Product.find({categories: categorySlug}, function (err, products) {
                if (err)
                    console.log(err);
    
                res.render('categories', {
                    products: products
                });
            });
        });
    
    });
    
    
    // Exports
    module.exports = router;
    