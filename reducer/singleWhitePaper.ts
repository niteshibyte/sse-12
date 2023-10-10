/** @format */
export const SET_SINGLE_WHITEPAPER = "SET_SINGLE_WHITEPAPER";


export const SETSINGLEWHITEPAPER = (data:any) => {
        
  return {
    type: SET_SINGLE_WHITEPAPER,
    payload: {...data},
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SINGLE_WHITEPAPER:
      return {
        ...state,
       ... payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
