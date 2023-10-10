/** @format */
export const SET_INDUSTRY_PAGE_DATA = "SET_INDUSTRY_PAGE_DATA";


export const SETINDUSTRYPAGEDATA = (data:any) => {
  return {
    type: SET_INDUSTRY_PAGE_DATA,
    payload: data,
  };
};



const initialState:any[] = [];

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_INDUSTRY_PAGE_DATA:
      return {
        ...state,
        industry_page_Data: payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
