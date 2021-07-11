

export function deleteStocks(stockId){ 
    return(dispatch) => {
        return fetch(`http://localhost:3000/api/v1/stocks/${stockId}`, {method: "DELETE"}) 
               .then( stock => dispatch({ type: "DELETE_STOCKS", payload: stockId}))
    }

}