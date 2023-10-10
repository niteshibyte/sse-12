/** @format */
export const SET_WEBINAR_API_DATA = "SET_WEBINAR_API_DATA";


export const SETWEBINARAPIDATA = (data:any) => {
  return {
    type: SET_WEBINAR_API_DATA,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WEBINAR_API_DATA:
      return {
        ...state,
        webinarData: payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
