/** @format */
export const SET_SUCCESS_STORY_SINGLE = "SET_SUCCESS_STORY_SINGLE";


export const SETSUCCESSSTORYSINGLE = (data:any) => {
  return {
    type: SET_SUCCESS_STORY_SINGLE,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SUCCESS_STORY_SINGLE:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
