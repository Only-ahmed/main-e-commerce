export const SearchWholeData_DynamicData = (Cat) => {
    return (dispatch) => {
        const NewArray = []
        for (let i in Cat) {
            for (let f in Cat[i]) {
                for (let g in Cat[i][f]) {
                    for (let h in Cat[i][f][g]) {
                        NewArray.push(Cat[i][f][g][h])
                    }
                }
            }
        }
        // console.log(NewArray)
        dispatch({
            type: 'swd-dynamicData',
            payload: NewArray
        })
    }
}
export const swd_Categoryappear = (cat) => {
    return (dispatch) => {
        const NewArray = []
        for (let i in cat) {
            for (let f in cat[i]) {
                // for (let g in cat[i][f]) {
                // const value = cat
                NewArray.push(cat[i][f])
                // }
            }
        }
        dispatch({
            type: 'swd-category',
            payload: NewArray
        });
    };
}

export const Itemsappear2 = (ProductsPage) => {
    return (dispatch) => {
        const NewArray2 = []
        for (let i in ProductsPage) {
            for (let f in ProductsPage[i]) {
                for (let g in ProductsPage[i][f]) {
                    for (let h in ProductsPage[i][f][g]) {
                        NewArray2.push(ProductsPage[i][f][g][h])
                    }
                }
            }
        }
        dispatch({
            type: 'searchWholeData',
            payload: NewArray2
        })
    }
}

export const BrandFiltering2 = (myref, brand, specificCategory) => {
    return (dispatch) => {
        const valuestore2 = []
        for (let i in specificCategory) {
            if (myref.current.checked === true) {
                if (brand === specificCategory[i].brand) {
                    valuestore2.push(specificCategory[i])
                }
            } else if (myref.current.checked === false) {
                valuestore2.push(specificCategory[i])
                // valuestore2.reverse()
            }
        }
        dispatch({
            type: 'brandfilter2',
            payload: valuestore2
        })
    }
}
export const swd_discount = (myref6, specificCategory) => {
    return (dispatch) => {
        const valuestore = []
        for (let m in specificCategory) {
            if (myref6.current.checked === true) {
                if (specificCategory[m].oldprice = specificCategory[m].oldprice) {
                    valuestore.push(specificCategory[m])
                    valuestore.reverse()
                }
            } else if (myref6.current.checked === false) {
                valuestore.push(specificCategory[m])
                // valuestore.reverse()
            }
        }
        dispatch({
            type: 'swd-discount',
            payload: valuestore
        })
    }
}


// export const handleRange = (setPriceRange, setPriceStart, priceRange, event) => {
//     return (dispatch) => {
// console.log(priceRange.value)
// const handleRangee = (event) => {
// const newValue = []
// const newPriceRange = parseInt(event.target.value)
// setPriceRange(newPriceRange)
// setPriceStart(newPriceRange)
// for (let m in NewArray) {
// if (newPriceRange >= NewArray[m].oldprice) {
// newValue.push(NewArray[m])
// }
// console.log(newPriceRange, priceRange, NewArray[m].oldprice)
// }
// }
//         dispatch({
//             type: 'price change',
//             payload: newValue,
//         })
//     }
// }
export const swd_rateFilter = (value1, value2, specificCategory) => {
    return (dispatch) => {
        for (let i in specificCategory) {
            // var emptyArray = []
            if (value1.current.checked === true) {
                if (specificCategory[i].rate) {
                    var ss = specificCategory.filter((num) => num.rate >= value2)
                    specificCategory.reverse()
                }
            }
            // else if (value1.current.checked === false)
        }
        dispatch({
            type: 'swd-rate',
            payload: ss
        })
    }
}

export const swd_lowToHigh = (products) => {
    return (dispatch) => {
        const sortedProducts = products.sort((a, b) => a.price - b.price);
        dispatch({
            type: 'swd-lowtohigh',
            payload: sortedProducts
        })
        dispatch({
            type: 'lowtohigh-title',
            payload: 'Price: Low to High'
        })
    }
}

export const swd_highToLow = (products) => {
    return (dispatch) => {
        const sortedProducts = products.sort((a, b) => b.price - a.price)
        dispatch({
            type: 'swd-hightolow',
            payload: sortedProducts
        })
        dispatch({
            type: 'hightolow-title',
            payload: 'Price: High to Low'
        })
    }
}

export const swd_productRating = (products) => {
    return (dispatch) => {
        const sortedProducts = products.sort((a, b) => b.rate - a.rate)
        dispatch({
            type: 'swd-productrate',
            payload: sortedProducts
        })
        dispatch({
            type: 'productrate-title',
            payload: 'Product Rating'
        })
    }
}
