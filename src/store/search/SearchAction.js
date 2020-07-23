
export const LOAD_DATA = 'LOAD_DATA'
export const loadData = (query) => (dispatch) => {
    const APP_KEY = 'f6bad90d301531c49090dda0f27db248'
    const APP_ID = '75290b49'
    //fetch( `https://hn.algolia.com/api/v1/search?query=${query}`)
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(res => res.json())
    .then(res => {
        dispatch( {type: LOAD_DATA, payload: res})
    })
    
    
    
    
} 

export default loadData