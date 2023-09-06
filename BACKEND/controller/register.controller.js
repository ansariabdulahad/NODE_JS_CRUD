const dbService = require('../services/db.service');

const createRecord = async (req, res) => {
    const data = req.body;
    try {
        const dataRes = await dbService.insertData(data);

        res.status(200).json({
            isRegister: true,
            message: "Data Inserted",
            data: dataRes
        });
    } catch (error) {
        res.status(409).json({
            isRegister: false,
            message: "Data Not Inserted",
            error: error
        });
    }
}

module.exports = {
    createRecord
}