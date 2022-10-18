const { Income, Month } = require('../db')

const getIncome = async(req, res, next) => {
  try{
    const { monthID } = req.params;

    const month = await Month.findByPk(monthID);
    if(!month) return res.json("Month ID doesn't exist");

    const incomes = await Income.findAll({where:{ id: monthID }})

    return res.json(incomes)
  }catch(err){
    next(err)
  }
};

const postIncome = async(req, res, next) => {
  try {
    const { monthID, concept, date, amount } = req.body

    if(!monthID || !concept || !date || !amount) return res.json('Some parameters are missing')

    const searchMonth = await Month.findByPk(monthID)
    if(!searchMonth) return res.json("Month ID doesn't exist");

    await Income.create({
      concept,
      date,
      amount,
      monthId: monthID
    });

    const subtotal = searchMonth.total;
    await Month.update({total: subtotal + amount}, {where:{id: monthID}})

    return res.json("Income added");

  } catch (error) {
    next(error)
  }
};

module.exports = {
  getIncome,
  postIncome
}