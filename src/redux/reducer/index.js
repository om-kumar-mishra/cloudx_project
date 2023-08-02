
import { combineReducers } from "redux"

import HomeReducer from "./HomeReducer"
import ServiceReducer from "./ServiceReducer"
import IndustryReducer from "./IndustryReducer"
import GalleryReducer from "./GalleryReducer"
import ContactReducer from "./ContactReducer"
import CMSReducer from "./CMSReducer"
import NewsLetterReducer from "./NewsLetterReducer"
import FooterContactReducer from "./FooterContactReducer"

const rootReducer = combineReducers({

    HomeReducer, ServiceReducer, IndustryReducer, GalleryReducer, ContactReducer, CMSReducer, NewsLetterReducer, FooterContactReducer

})

export default rootReducer;