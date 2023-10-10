/** @format */
export const SET_CAREERS = "SET_CAREERS";


export const SETCAREERS = (data:any) => {
  return {
    type: SET_CAREERS,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CAREERS:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
