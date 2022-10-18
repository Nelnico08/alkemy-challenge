const { Month } = require('../db');

const getMonth = async(req,res,next) => {
  try {
    const { monthID } = req.params;
    
    const searchMonth = await Month.findByPk(monthID);
    if(!searchMonth) return res.json("Month ID doesn't exist");

    return res.json(searchMonth)
  } catch (error) {
    next(error)
  }
}

const postMonth = async(req,res,next) => {
  try {
    const { monthName } = req.body;

    if(!monthName) throw new Error('The month name is required');

    await Month.create({
      name: monthName,
      total: 0
    });

    return res.json('Month added')
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getMonth,
  postMonth
};