import { combineReducers } from 'redux';
import EvaluationReducer from './evaluationReducer/Evaluation-reducer';
import submitSuggestionReducer from './submitSuggestionEducer/submitSuggestion-Reducer';


const rootReducer = combineReducers({
  EvaluationReducer,
  submitSuggestionReducer
});
export default rootReducer;