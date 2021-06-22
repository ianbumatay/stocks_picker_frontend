export function addStocks(stock){

    return(dispatch) => {

        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(stock)
        }
        fetch('http://localhost:3000/api/v1/stocks', options) 
        .then( resp => resp.json())
        .then( stock => dispatch({type: "ADD_STOCKS", payload: stock}))

    }

}