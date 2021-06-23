export function deleteStocks(stockId){ 

    return() => {
        return fetch(`http://localhost:3000/api/v1/${stockId}`, {Method: "DELETE"}) 
               .then( stock => dispatchEvent({ type: "DELETE_STOCKS", payload: stockId}))
    }

}