/** @format */
export const SET_FOOTER = "SET_FOOTER";


export const SETFOOTERDATA = (data:any) => {
  return {
    type: SET_FOOTER,
    payload: data,
  };
};



const initialState:any = {}

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FOOTER:
      return {
        ...state,
       ... payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
