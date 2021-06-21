import { bindActionCreators } from "redux";

export default function stocksReducer (state = {stocks: []} ){ 

    switch(action.type){ 

        case 'FETCH_STOCKS':
            return{stocks: action.payload}


        default:
          return state

    }
   

}