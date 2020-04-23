const SET_DATE = "SET_DATE"

const setDate = date => {
    return {
        type: SET_DATE,
        date
    }
}




export {setDate, SET_DATE} 