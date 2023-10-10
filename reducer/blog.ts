/** @format */
export const SET_BLOG_DATA = "SET_BLOG_DATA";
export const SET_PRODUCT_PAGE_DATA = "SET_PRODUCT_PAGE_DATA";
export const SET_DEPARTMENT_PAGE_DATA = "SET_DEPARTMENT_PAGE_DATA";
export const SET_PRODUCT_PAGE_LOADER = "SET_PRODUCT_PAGE_LOADER";


export const SETBLOGDATA = (data:any) => {
  return {
    type: SET_BLOG_DATA,
    payload: data,
  };
};

export const setProductPageData = (data:any) => {
  return {
    type: SET_PRODUCT_PAGE_DATA,
    payload: data,
  };
};

export const setDepartmentData = (data:any) => {
  return {
    type: SET_DEPARTMENT_PAGE_DATA,
    payload: data,
  };
};

export const setProductPageLoader = (data:boolean) => {
  return {
    type: SET_PRODUCT_PAGE_LOADER,
    payload: data,
  };
};



const initialState:any = {pageProductLoader :true,departmentData:{}};

//Initial state of the counter

const reducer = (state = initialState, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BLOG_DATA:
      return {
        ...state,
        blog_Data: payload,
      };
    case SET_PRODUCT_PAGE_DATA:
      return {
        ...state,
        pageProductData: payload,
      };
    case SET_DEPARTMENT_PAGE_DATA:
      return {
        ...state,
        departmentData: payload,
      };

    case SET_PRODUCT_PAGE_LOADER:
      return {
        ...state,
        pageProductLoader: payload,
      };
  

    default:
      return state;
  }
};

export default reducer;
