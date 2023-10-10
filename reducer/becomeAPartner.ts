/** @format */
export const SET_BECOME_A_PARTNER = "SET_BECOME_A_PARTNER";


export const SETBECOMEAPARTNER = (data:any) => {
  return {
    type: SET_BECOME_A_PARTNER,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BECOME_A_PARTNER:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
