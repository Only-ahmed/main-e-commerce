// import { ProductsPage } from "../../../Data/data"

import { specialCharMap } from "@testing-library/user-event/dist/keyboard"



export const appearCat2 = (Cat) => {
    return (dispatch) => {
        const NewArray = []
        for (let i in Cat) {
            // for (let f in Cat[i]) {
            // for (let g in Cat[i][f]) {
            NewArray.push(Cat[i])
            // dispatch({ type: 'supermarket', Cat: Categories.supermarket })
            // dispatch({ type: 'Fashion', Cat2: Categories.Fashion })
            // dispatch({ type: 'HealthBeauty', Cat3: Categories.Fashion })
            // }
            // }
        }
        // console.log(NewArray)
        dispatch({
            type: 'newbrandfilter',
            payload: NewArray
        })
    }
}
export const Itemsappear2 = (ProductsPage) => {
    return (dispatch) => {
        const NewArray = []
        for (let i in ProductsPage) {
            // for (let f in ProductsPage[i]) {
            // for (let g in ProductsPage[i][f]) {
            NewArray.push(ProductsPage[i])
            // }
            // }
        }
        dispatch({
            type: 'itemss',
            payload: NewArray
        })
    }
}

export const BrandFiltering2 = (myref, brand, specificCategory, productPageCat) => {
    return (dispatch) => {
        const valuestore = []
        for (let m in specificCategory) {
            if (myref.current.checked === true) {
                if (brand === specificCategory[m].brand) {
                    valuestore.push(specificCategory[m])
                }
            } else if (myref.current.checked === false) {
                valuestore.push(specificCategory[m])
            }
        }
        dispatch({
            type: 'brandfilter-PPCategory',
            payload: valuestore
        })
    }
}

export const discount2 = (myref6, specificCategory) => {
    return (dispatch) => {
        const valuestore = []
        for (let m in specificCategory) {
            if (myref6.current.checked === true) {
                if (specificCategory[m].oldprice = specificCategory[m].oldprice) {
                    valuestore.push(specificCategory[m])
                }
            } else if (myref6.current.checked === false) {
                valuestore.push(specificCategory[m])
            }
            // console.log(myref6)
        }
        dispatch({
            type: 'discount2',
            payload: valuestore
        })
    }
}

export const rateFilter2 = (value1, value2, specificCategory) => {
    return (dispatch) => {
        for (let i in specificCategory) {
            // var emptyArray = []
            if (value1.current.checked === true) {
                if (specificCategory[i].rate) {
                    var ss = specificCategory.filter((num) => num.rate >= value2)
                }
            }
            // else if (value1.current.checked === false)
        }
        dispatch({
            type: 'rate2',
            payload: ss
        })
    }
}