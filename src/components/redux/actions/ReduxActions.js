import { useEffect } from 'react';
import { Categories, ProductsPage, } from '../../../Data/data'
import cloneDeep from 'clone-deep';


export const appearCat = (Cat) => {
    return (dispatch) => {
        const NewArray = []
        for (let i in Cat) {
            for (let f in Cat[i]) {
                for (let g in Cat[i][f]) {
                    NewArray.push(Cat[i][f][g])
                    // dispatch({ type: 'supermarket', Cat: Categories.supermarket })
                    // dispatch({ type: 'Fashion', Cat2: Categories.Fashion })
                    // dispatch({ type: 'HealthBeauty', Cat3: Categories.Fashion })
                }
            }
        }
        // console.log(NewArray)
        dispatch({
            type: 'supermarket2',
            payload: NewArray
        })
    }
}


const NewArray = []
for (let i in ProductsPage.Supermarket) {
    for (let f in ProductsPage.Supermarket[i]) {
        for (let g in ProductsPage.Supermarket[i][f]) {
            NewArray.push(ProductsPage.Supermarket[i][f][g])
        }
    }
}

export const Categoryappear = (cat) => {
    return (dispatch) => {
        const NewArray = []
        for (let i in cat) {
            for (let f in cat[i]) {
                for (let g in cat[i][f]) {
                    const value = cat[i][f][g]
                    NewArray.push(value)
                    // dispatch({ type: 'supermarket', Cat: Categories.supermarket })
                    // dispatch({ type: 'Fashion', Cat2: Categories.Fashion })
                    // dispatch({ type: 'HealthBeauty', Cat3: Categories.Fashion })
                }
            }
        }
        dispatch({
            type: 'supermarket',
            payload: NewArray
        });
    };
}

export const Itemsappear = (ProductsPage, ProductsPage2) => {
    return (dispatch) => {
        const NewArray = []
        for (let i in ProductsPage) {
            for (let f in ProductsPage[i]) {
                for (let g in ProductsPage[i][f]) {
                    NewArray.push(ProductsPage[i][f][g])
                    NewArray.reverse()
                }
            }
        }

        dispatch({
            type: 'items',
            payload: NewArray
        })
        // dispatch({
        // type: 'searchWholeData',
        // payload: NewArray2
        // })
    }
}

export const ProductDetailsFunc = (DynamicDetails, swd_DynamicDetails, id) => {
    return (dispatch) => {
        const valuestore = []
        const valuestore2 = []
        for (let m in DynamicDetails) {
            if (id == DynamicDetails[m].id) {
                valuestore.push(DynamicDetails[m])
            }
        }
        for (let m in swd_DynamicDetails) {
            if (id == swd_DynamicDetails[m].id) {
                valuestore.push(swd_DynamicDetails[m])
            }
        }
        // console.log(valuestore)
        console.log(valuestore2)


        dispatch({
            type: 'sameID',
            payload: valuestore
        })
        // dispatch({
        //     type: 'sameID2',
        //     payload: valuestore2
        // })
    }
}

export const BrandFiltering = (myref, brand, specificCategory) => {
    return (dispatch) => {
        const valuestore = []
        for (let i in specificCategory)
            if (myref.current.checked === true) {
                if (brand === specificCategory[i].brand) {
                    valuestore.push(specificCategory[i])
                }
            } else if (myref.current.checked === false) {
                valuestore.push(specificCategory[i])
                valuestore.reverse()
            }
        dispatch({
            type: 'brandfilter',
            payload: valuestore
        })
    }
}


export const discount = (myref6, specificCategory) => {
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
                valuestore.reverse()
            }
            // console.log(myref6)
        }
        dispatch({
            type: 'discount',
            payload: valuestore
        })
    }
}
export const handleRange = (setPriceRange, setPriceStart, priceRange, event) => {
    return (dispatch) => {
        // console.log(priceRange.value)
        // const handleRangee = (event) => {
        const newValue = []
        const newPriceRange = parseInt(event.target.value)
        setPriceRange(newPriceRange)
        setPriceStart(newPriceRange)
        for (let m in NewArray) {
            if (newPriceRange >= NewArray[m].oldprice) {
                newValue.push(NewArray[m])
            }
            // console.log(newPriceRange, priceRange, NewArray[m].oldprice)
        }
        // }
        dispatch({
            type: 'price change',
            payload: newValue,
        })
    }
}

export const rateFilter = (value1, value2, specificCategory) => {
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
            type: 'rate',
            payload: ss
        })
    }
}


///////////////

export const lowToHigh = (products) => {
    return (dispatch) => {
        const sortedProducts = products.sort((a, b) => a.price - b.price);
        dispatch({
            type: 'lowtohigh',
            payload: sortedProducts
        })
        dispatch({
            type: 'lowtohigh-title',
            payload: 'Price: Low to High'
        })
    }
}

export const highToLow = (products) => {
    return (dispatch) => {
        const sortedProducts = products.sort((a, b) => b.price - a.price)
        dispatch({
            type: 'hightolow',
            payload: sortedProducts
        })
        dispatch({
            type: 'hightolow-title',
            payload: 'Price: High to Low'
        })
    }
}

export const productRating = (products) => {
    return (dispatch) => {
        const sortedProducts = products.sort((a, b) => b.rate - a.rate)
        dispatch({
            type: 'productrate',
            payload: sortedProducts
        })
        dispatch({
            type: 'productrate-title',
            payload: 'Product Rating'
        })
    }
}
