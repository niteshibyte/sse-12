/** @format */
export const SET_SINGLE_WEBINAR = "SET_SINGLE_WEBINAR";


export const SETSINGLEWEBINAR = (data:any) => {
        
  return {
    type: SET_SINGLE_WEBINAR,
    payload: {...data},
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SINGLE_WEBINAR:
      return {
        ...state,
       ... payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
