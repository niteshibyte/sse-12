/** @format */
export const SET_MARKETING = "SET_MARKETING";


export const SETMARKETING = (data:any) => {
  return {
    type: SET_MARKETING,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MARKETING:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
