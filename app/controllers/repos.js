var rp = require('request-promise');
var reposModel = require("../models/repos");
var starsModel = require("../models/stars");
var controller = {};

controller.getAll = function (req, res) {
    reposModel.getAll("liuguangqiang", 20, 1).then(function (repos) {
        res.send(repos)
    });
}

controller.getStarred = function (req, res) {
    starsModel.getAll("liuguangqiang", 20, 1).then(function (repos) {
        res.send(repos)
    });
}

module.exports = controller;