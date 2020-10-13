const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const SALT_I = 10
const config = require('./../config/config').get(process.env.NODE_ENV)

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    review:{
        type:String,
        default:'n/a'
    },
    pages:{
        type:String,
        default:'n/a'
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    price:{
        type:String,
        default:'n/a'
    },
    ownerId:{
        type:String,
        required:true
    }
},{timestamps:true})


const Book = mongoose.model('Book', bookSchema)

module.exports = {Book}