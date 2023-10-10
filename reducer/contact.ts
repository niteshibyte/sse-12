/** @format */
export const SET_CONTACT_US = "SET_CONTACT_US";


export const SETCONTACTUS = (data:any) => {
  return {
    type: SET_CONTACT_US,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CONTACT_US:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
