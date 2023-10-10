/** @format */
export const SET_WHITEPAPER_API_DATA = "SET_WHITEPAPER_API_DATA";


export const SETWHITEPAPERAPIDATA = (data:any) => {
  return {
    type: SET_WHITEPAPER_API_DATA,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WHITEPAPER_API_DATA:
      return {
        ...state,
        ... payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
