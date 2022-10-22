import { GET_MONTHS } from "../actionsTypes";

const initialState = {
  months: [],
  detail: {},
  income:{},
  expense:{}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTHS:
      return{
        ...state,
        months: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;