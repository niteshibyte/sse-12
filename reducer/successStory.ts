/** @format */
export const SET_SUCCESS_STORY_PAGE = "SET_SUCCESS_STORY_PAGE";


export const SETSUCCESSSTORYPAGE = (data:any) => {
  return {
    type: SET_SUCCESS_STORY_PAGE,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SUCCESS_STORY_PAGE:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
