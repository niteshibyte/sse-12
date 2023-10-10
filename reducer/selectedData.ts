/** @format */
export const SET_SELECTED_DATA = "SET_SELECTED_DATA";


export const SETSELECTEDDATA = (data:any) => {
        
  return {
    type: SET_SELECTED_DATA,
    payload: {...data},
  };
};



const initialState:Object = {category:'All',whiteCategory:'All',successCategory:"All",industry:"",analystCategory:"All",bussinessCategory:"All",blogCategory:"All"};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SELECTED_DATA:
      return {
        ...state,
       ... payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
