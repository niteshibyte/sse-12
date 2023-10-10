/** @format */
export const SET_BLOG_SINGLE = "SET_BLOG_SINGLE";


export const SETBLOGSINGLE = (data:any) => {
  return {
    type: SET_BLOG_SINGLE,
    payload: data,
  };
};



const initialState:Object = {};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BLOG_SINGLE:
      return {
        ...state,
        ...payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
