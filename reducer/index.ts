/** @format */

import { combineReducers } from "redux";

import header from './header';
import footer from './footer';
import homeData from './homeData';
import blogData from './blog'
import industry from './industry-page'
import webinar from './webinar'
import selectedData from './selectedData'
import webinarData from './webinarapiData'
import whitepaperData from './whitepaperapiData'
import whitePaper from './whitePaper'
import touchpoint from './touch-point'
import successstory from './successStory'
import suceessdata from './successStoryApiData'
import successsingle from './successStorySingle'
import about from './about'
import contact from './contact'
import request from './request'
import career from './career'
import becomeapartner from './becomeAPartner';
import singlesuccess from './singleSuccessStory';
import singlewebinar from './singleWebinar';
import singlewhitepaper from './singleWhitePaper';
import analyst from './analyst';
import analystsingle from './analystsingle';
import bipage from './bipage';
import biData from './biData';
import singlereport from './singlereport';
import singleproduct from './singleproduct'
import analystData from './analystData';
import blogsingle from './blogsingle'
import singleblog from './blogsingle';
import team from './team';
import marketing  from './marketing';
import salesforce from './salesforce'
export const rootReducer = combineReducers({

  header,
  footer,
  homeData,
  blogData,
  industry,
  webinar,
  webinarData,
  selectedData,
  whitepaperData,
  whitePaper,
  touchpoint,
  successstory,
  suceessdata,
  successsingle,
  about,
  contact,
  request,
  career,
  becomeapartner,
  singlesuccess,
  singlewebinar,
  singlewhitepaper,
  analyst,
  analystsingle,
  bipage,
  biData,
  singleproduct,
  singlereport,
  analystData,
  blogsingle,
  singleblog,
  team,
  marketing,
  salesforce


});

export default rootReducer;
