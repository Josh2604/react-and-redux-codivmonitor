import { SET_COUNTRIES, SET_COUNTRY, SET_SELECTED} from './types';

export const SetCountries = (data) => async dispatch => {
  try{
    dispatch({
      type: SET_COUNTRIES,
      payload: data
    })
  }catch(error){
    console.error(error);
  }
};

export const SetCountry = (data) => async dispatch => {
  try{
    dispatch({
      type: SET_COUNTRY,
      payload: data
    });
  }catch(error){
    console.error.log();
  }
};

export const SelectedCountry =  (data) =>  async dispatch => {
  try{
      dispatch({
          type: SET_SELECTED,
          payload: data
      })
  }catch(err){
      console.log(err)
  }
}