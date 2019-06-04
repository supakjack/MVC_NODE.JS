var User = require('../models/userModel')
var _ = require('lodash')

exports.index = (req, res, next) => {
    User.find().sort({ created_date: -1 }).exec((err, data) => {
        res.render('users', { users: data })
    })
}
exports.add = (req, res, next) => {
    console.log(req.body)
    var user = new User(req.body)
    user.save((err, data) => {
        if (err) console.log(err)
        res.redirect('/users')
    })
}
exports.del = (req, res, next) => {
    User.findByIdAndRemove(req.params._id, (err, data) => {
        if (err) console.log(err)
        res.redirect('/users')
    })
}
exports.setEditById = (req, res, next) => {
    console.log(req.params._id, req.body)
    User.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
        if (err) console.log(err)
        res.redirect('/users')
    })
}
exports.getEditById = (req, res, next) => {
    User.findById(req.params._id, (err, data) => {
        if (err) console.log(err)
        res.render('users', { user: data })
    })
}
exports.searchById = (req, res, next) => {
    var search = _.omitBy(req.body, _.isEmpty)
    console.log(req.body, search)
    User.find(search, (err, data) => {
        if (err) console.log(err)
        res.render('users', { users: data })
    })
}
