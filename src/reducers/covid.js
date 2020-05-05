import {SET_COUNTRIES, SET_COUNTRY, SET_SELECTED} from './../actions/types';

const initialState = {
  countries: [],
  countrySelected: 'all',
  selectedCountry: {}
};

export default (state = initialState, action) => {
  switch(action.type){
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    case SET_COUNTRY:
      return {
        ...state,
        countrySelected: action.payload
      }
    case SET_SELECTED:
        return {
          ...state,
          selectedCountry: action.payload
        }      
    default:
      return state;
  }
};