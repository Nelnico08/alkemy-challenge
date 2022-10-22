import { GET_MONTHS } from "../actionsTypes";

export const getMonths = () => async(dispatch) =>{
  try {
    const months = await fetch('http://localhost:3001/month');
    const data = await months.json();

    dispatch({type: GET_MONTHS, payload: data})
    
  } catch (error) {
    console.log(error)
  }
}
