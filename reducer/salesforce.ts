/** @format */
export const SET_SALESFORCE = "SET_SALESFORCE";


export const SETSALESFORCE = (data:any) => {
  return {
    type: SET_SALESFORCE,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SALESFORCE:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
