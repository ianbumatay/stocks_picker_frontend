//import { bindActionCreators } from "redux";

export default function stocksReducer (state = {stocks: []}, action ){ 

    switch(action.type){ 

        case 'FETCH_STOCKS':
            return {stocks: action.payload} 

        case 'ADD_STOCKS':
            return{
                ...state,
                stocks: [...state.stocks, action.payload]
            } 

        case 'DELETE_STOCKS':
            const filteredId = state.stocks.filter( stock => stock.id !== action.payload) 

            return { stocks: filteredId}



        default:
          return state

    }
   

}