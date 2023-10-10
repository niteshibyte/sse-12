/** @format */
export const SET_SUCCESS_STORY_API_DATA = "SET_SUCCESS_STORY_API_DATA";


export const SETSUCCESSSTORYAPIDATA = (data:any) => {
  return {
    type: SET_SUCCESS_STORY_API_DATA,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SUCCESS_STORY_API_DATA:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
