/** @format */
export const SET_WEBINAR = "SET_WEBINAR";


export const SETWEBINARDATA = (data:any) => {
  return {
    type: SET_WEBINAR,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WEBINAR:
      return {
        ...state,
        webinar: payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
