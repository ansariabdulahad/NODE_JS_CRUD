const mongo = require('mongoose');
const registerSchema = require('../model/register.model');

mongo.connect('mongodb+srv://abdulansari:ys6qp9sGB5Y0f4eT@node.aczu3nm.mongodb.net/userData');

const insertData = async (data) => {
    const dataRes = await new registerSchema(data).save();
    return dataRes;
}

module.exports = {
    insertData
};