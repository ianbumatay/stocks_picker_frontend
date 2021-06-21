export function fetchStocks(){
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/stocks')
        .then(resp => resp.json())
        .then(stocks => dispatch({type: 'FETCH_STOCKS', payload: stocks}))
    }

}