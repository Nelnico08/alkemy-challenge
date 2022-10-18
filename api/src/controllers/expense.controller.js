const { Expense, Month } = require('../db')

const getExpense = async(req, res, next) => {
  try{
    const { monthID } = req.params;

    const month = await Month.findByPk(monthID);
    if(!month) return res.json("Month ID doesn't exist");

    const expenses = await Expense.findAll({where:{ id: monthID }})

    return res.json(expenses)
  }catch(err){
    next(err)
  }
};

const postExpense = async(req, res, next) => {
  try {
    const { monthID, concept, date, amount } = req.body

    if(!monthID || !concept || !date || !amount) return res.json('Some parameters are missing')

    const searchMonth = await Month.findByPk(monthID)
    if(!searchMonth) return res.json("Month ID doesn't exist");

    await Expense.create({
      concept,
      date,
      amount,
      monthId: monthID
    });

    const subtotal = searchMonth.total;
    await Month.update({total: subtotal - amount}, {where:{id: monthID}})

    return res.json("Expense added");

  } catch (error) {
    next(error)
  }
};

module.exports = {
  getExpense,
  postExpense
}