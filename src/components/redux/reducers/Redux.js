// import { ProductsPage } from '../../../Data/data';
// import { action1 } from '../actions/ReduxActions';
// import { Categories } from "../../../Data/data";



const InitialState = {
    array1: [],
    array2: [],
    array3: [],
    array4: [],
    dynamicData: [],
    dynamicData2: [],
    fuck: [],
    searchFilter: [],
    searchFilter2: [],
    event: [],
    sortTitles: ['Popularity'],
    // -------------//---------------
    swd_dynamicData: [],
    fuck2: [],
    swd_category: [],
}

export const reducer = (state = InitialState, action) => {
    // switch (action.type) {
    // case "supermarket":
    // return { ...state, array1: action.payload };
    // case "Fashion":
    //     return { ...state, array1: action.Cat2 };
    // case "HealthBeauty":
    //     return { ...state, array1: action.Cat3 };
    // default: return { state };
    if (action.type === 'supermarket') {
        return ({ ...state, array1: action.payload })
    } else if (action.type === 'supermarket2') {
        return ({ ...state, dynamicData: action.payload })
    } else if (action.type === 'items') {
        return ({ ...state, array2: action.payload })
    } else if (action.type === 'sameID') {
        return ({ ...state, array3: action.payload })
    } else if (action.type === 'brandfilter') {
        return ({ ...state, array2: action.payload })
    } else if (action.type === 'discount') {
        return ({ ...state, array2: action.payload })
    } else if (action.type === 'price change') {
        return ({ ...state, array2: action.payload })
    } else if (action.type === 'rate') {
        return ({ ...state, array2: action.payload })
        // ------------------search-page--------------------
    } else if (action.type === 'swd-dynamicData') {
        return ({ ...state, swd_dynamicData: action.payload })
    } else if (action.type === 'swd-category') {
        return ({ ...state, swd_category: action.payload })
    } else if (action.type === 'searchWholeData') {
        return ({ ...state, fuck2: action.payload })
    } else if (action.type === 'brandfilter2') {
        return ({ ...state, fuck2: action.payload })
    } else if (action.type === 'swd-discount') {
        return ({ ...state, fuck2: action.payload })
    } else if (action.type === 'swd-rate') {
        return ({ ...state, fuck2: action.payload })
        // ----------------product-page-category-------------
    } else if (action.type === 'newbrandfilter') {
        return ({ ...state, dynamicData2: action.payload })
    } else if (action.type === 'itemss') {
        return ({ ...state, fuck: action.payload })
    } else if (action.type === 'brandfilter-PPCategory') {
        return ({ ...state, fuck: action.payload })
    } else if (action.type === 'discount2') {
        return ({ ...state, fuck: action.payload })
    } else if (action.type === 'rate2') {
        return ({ ...state, fuck: action.payload })

        // -----------------search-filter----------------- 
    } else if (action.type === 'searchfilter') {
        return ({ ...state, searchFilter: action.payload })
    } else if (action.type === 'onclick') {
        return ({ ...state, array2: action.payload })
    } else if (action.type === 'onclick2') {
        return ({ ...state, fuck2: action.payload })
    } else if (action.type === 'event_store') {
        return ({ ...state, event: action.payload })

        // -----------------sort-dropdown-------------
    } else if (action.type === 'lowtohigh') {
        return ({ ...state, array2: action.payload })
    } else if (action.type === 'lowtohigh-title') {
        return ({ ...state, sortTitles: action.payload })
    } else if (action.type === 'hightolow') {
        return ({ ...state, array2: action.payload })
    } else if (action.type === 'hightolow-title') {
        return ({ ...state, sortTitles: action.payload })
    } else if (action.type === 'productrate') {
        return ({ ...state, array2: action.payload })
    } else if (action.type === 'productrate-title') {
        return ({ ...state, sortTitles: action.payload })

        // -----------------swd-sort-dropdown-------------
    } else if (action.type === 'swd-lowtohigh') {
        return ({ ...state, fuck2: action.payload })
    } else if (action.type === 'lowtohigh-title') {
        return ({ ...state, sortTitles: action.payload })
    } else if (action.type === 'swd-hightolow') {
        return ({ ...state, fuck2: action.payload })
    } else if (action.type === 'hightolow-title') {
        return ({ ...state, sortTitles: action.payload })
    } else if (action.type === 'swd-productrate') {
        return ({ ...state, fuck2: action.payload })
    } else if (action.type === 'productrate-title') {
        return ({ ...state, sortTitles: action.payload })
    }
    return state
}
// }

// export default Redux;