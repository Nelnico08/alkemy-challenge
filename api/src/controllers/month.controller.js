const { Month } = require('../db');

const getMonth = async(req,res,next) => {
  try {
    const { monthID } = req.params;
    
    if(monthID){
      const searchMonth = await Month.findByPk(
        monthID, 
        {
          attributes: ['id', 'name', 'total']
        }
      );
      if(!searchMonth) return res.json("Month ID doesn't exist");

      return res.json(searchMonth)
    }
    
    let allMonths = await Month.findAll({
      order: [['id', 'ASC']],
      attributes:['id', 'name', 'total']
    });

    if(allMonths.length > 10){
      const startIndex = allMonths.length - 10;
      const endIndex = allMonths.length; 
      allMonths = allMonths.slice(startIndex, endIndex);
    }

    return res.json(allMonths)
    
  } catch (error) {
    next(error)
  }
}

const postMonth = async(req,res,next) => {
  try {
    const { monthName } = req.body;

    if(!monthName) throw new Error('The month name is required');

    await Month.findOrCreate({
      where: { name: monthName},
      defaults:{
        name: monthName,
        total: 0
      }
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