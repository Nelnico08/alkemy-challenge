import { CLEAN_DETAIL_STATE, GET_MONTHS, GET_MONTHS_DETAIL } from "../actionsTypes";

export const getMonths = () => async(dispatch) =>{
  try {
    const months = await fetch('http://localhost:3001/month');
    const data = await months.json();

    dispatch({type: GET_MONTHS, payload: data})
    
  } catch (error) {
    console.log(error)
  }
};

export const getMonthDetail = (monthID) => async(dispatch) => {
  try {
    const month = await fetch(`http://localhost:3001/month/${monthID}`);
    const data = await month.json();

    dispatch({type:GET_MONTHS_DETAIL, payload: data})
  } catch (error) {
    console.log(error)
  }
};

export const cleanDetailState = () => ({
  type: CLEAN_DETAIL_STATE
})


