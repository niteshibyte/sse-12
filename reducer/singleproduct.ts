/** @format */
export const SET_SINGLE_PRODUCT = "SET_SINGLE_PRODUCT";


export const SETSINGLEPRODUCT = (data:any) => {
  return {
    type: SET_SINGLE_PRODUCT,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SINGLE_PRODUCT:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
