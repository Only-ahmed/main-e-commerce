import { useSelector } from "react-redux"
import { Categories } from "../../../Data/data"


export const SearchFilter = (searchdata) => {
    return (dispatch) => {
        const ValueStore = []
        for (let i in searchdata) {
            for (let n in searchdata[i]) {
                // for (let b in searchdata[i][n].name[1]) {
                // for (let b = 1; b >= searchdata.length; b++) {
                // if (event.current.value === searchdata[i][n].name[b]) {
                ValueStore.push(searchdata[i][n])
                // }
                // }
            }
        }
        dispatch({
            type: 'searchfilter',
            payload: ValueStore
        })
    }
}
export const SearchFilter2 = (data, data2, event, location, navigate) => {
    return (dispatch) => {
        // const ValueStore = ""
        const ValueStore = (data.filter(product => product.name.toLowerCase().indexOf(event.toLowerCase()) !== -1))
        // if (location === '/') {
        //     navigate('/search-page')
        // } else {
        //     navigate()
        // }

        dispatch({
            type: 'onclick',
            payload: ValueStore
        })
        dispatch({
            type: 'onclick2',
            payload: ValueStore
        })
    }
}

export const EventStore = (event) => {
    return (dispatch) => {
        dispatch({
            type: 'event_store',
            payload: event
        })
    }
}
export const testCat = (Cat) => {
    return (dispatch) => {
        const NewArray = []
        for (let i in Categories) {
            for (let f in Categories[i]) {
                for (let g in Categories[i][f]) {
                    for (let c in Categories[i][f][g]) {
                        NewArray.push(Categories[i][f][g][c])
                        // dispatch({ type: 'supermarket', Cat: Categories.supermarket })
                        // dispatch({ type: 'Fashion', Cat2: Categories.Fashion })
                        // dispatch({ type: 'HealthBeauty', Cat3: Categories.Fashion })
                    }
                }
            }
        }
        // console.log(NewArray)
        dispatch({
            type: 'test',
            payload: NewArray
        })
    }
}