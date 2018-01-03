var rp = require('request-promise');
var reposModel = require("../models/repos");
var starsModel = require("../models/stars");
var controller = {};

controller.index = function (req, res) {
    reposModel.getAll("liuguangqiang", 20, 1).then(function (repos) {
        res.render('index', {
            title: "GithubTags:" + repos.length,
            repos: repos
        });
    });
}

module.exports = controller;