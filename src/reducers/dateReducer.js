import moment from 'moment';
import {SET_DATE} from '../actions/dateActions'

const initialState = moment().format('LL')

function dateReducer(state = initialState, action) {
    
    switch (action.type) {
        
        case SET_DATE:
            return action.date

        default:
            return state;
    }

}


export default dateReducer