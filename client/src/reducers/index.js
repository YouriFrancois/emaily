import { combineReducers} from 'redux';
import {reducer as redduxForm } from 'redux-form'
import authReducer from './authReducers';
import surveyReducer from "./SurveysReducer"

export default combineReducers({
auth:authReducer,
form:redduxForm,
surveys:surveyReducer

});