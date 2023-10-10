/** @format */
export const SET_BI_DATA = "SET_BI_DATA";


export const SETBIDATA = (data:any) => {
  return {
    type: SET_BI_DATA,
    payload: data,
  };
};



const initialState:any = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BI_DATA:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
