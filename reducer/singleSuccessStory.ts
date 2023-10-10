/** @format */
export const SET_SINGLE_SUCCESS_STORY = "SET_SINGLE_SUCCESS_STORY";


export const SETSINGLESUCCESSSTORY = (data:any) => {
        
  return {
    type: SET_SINGLE_SUCCESS_STORY,
    payload: {...data},
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SINGLE_SUCCESS_STORY:
      return {
        ...state,
       ... payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
