/** @format */
export const SET_WHITE_PAPER_DATA = "SET_WHITE_PAPER_DATA";


export const SETWHITEPAPERDATA = (data:any) => {
  return {
    type: SET_WHITE_PAPER_DATA,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WHITE_PAPER_DATA:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
