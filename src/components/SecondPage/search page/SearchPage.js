import '../SecondPage.css'
import headerimg from '../../../Data/images/Second Page/headerIMG/1152_x_252_eng.png'
import { Col, Row } from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { appearCat, BrandFiltering, Categoryappear, handleRange, } from '../../redux/actions/ReduxActions'
import { BrandFiltering2, Itemsappear2, SearchWholeData_DynamicData, swd_Categoryappear, swd_discount, swd_highToLow, swd_lowToHigh, swd_productRating, swd_rateFilter } from '../../redux/actions/SearchPageAction'
import { useDispatch, useSelector } from 'react-redux'
import Stars from '../../Utilities/reusable/Stars'
import { useCart } from 'react-use-cart'
import cloneDeep from 'clone-deep'
import { EventStore, SearchFilter, SearchFilter2 } from '../../redux/actions/Navbar'
import ProductsPage from '../../../Data/data'



const SearchPage = ({ ProductsPage1, ProductsPage, Categoties, Cat }) => {
    const { addItem } = useCart()

    const appearCategoryyy = useSelector((state) => state.array1)
    const appearCategory = useSelector((state) => state.swd_category)
    const Itemsappears = useSelector((state) => state.array2)
    const dynamicData = useSelector((state) => state.dynamicData)
    const swd_dynamicData = useSelector((state) => state.swd_dynamicData)
    const sortTitles = useSelector((state) => state.sortTitles)
    const searchWholeData = useSelector((state) => state.fuck2)
    const dispatch = useDispatch()


    useEffect(() =>
        dispatch(SearchWholeData_DynamicData(ProductsPage1))
        , [])
    useEffect(() =>
        dispatch(swd_Categoryappear(Categoties))
        , [])
    useEffect(() =>
        dispatch(Itemsappear2(ProductsPage1))
        , [])


    console.log(appearCategory)

    const [new1, setNew1] = useState([])
    useEffect(() => {
        const ff = () => {
            for (let i in dynamicData) {
                setNew1(dynamicData[i])
            }
        }
        return ff
    }
        , [dynamicData])
    // console.log(Itemsappears)



    const myref = useRef()
    const myref2 = useRef()
    const myref3 = useRef()
    const myref4 = useRef()
    const myref5 = useRef()
    const myref6 = useRef()

    const rateRef1 = useRef()
    const rateRef2 = useRef()
    const rateRef3 = useRef()
    const rateRef4 = useRef()
    // const priceStart = useRef()
    // const priceEnd = useRef()
    // const ss = Itemsappears.filter((number) => number.rate === 2)

    const [priceRange, setPriceRange] = useState(1)
    const [priceStart, setPriceStart] = useState(1)
    const [priceEnd, setPriceEnd] = useState(7074)

    const [stars, setStars] = useState()



    const handlePriceStart = (event) => {
        const newPriceStart = parseInt(event.target.value)
        setPriceStart(newPriceStart)
        setPriceRange(newPriceStart)
    }
    const handlePriceEnd = (event) => {
        const newPriceEnd = parseInt(event.target.value)
        setPriceEnd(newPriceEnd)
    }




    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(false)
    const [showCurrentValue, setShowCurrentValue] = useState('Popularity')
    const [scroll, setScroll] = useState(0)
    const initialValue = 100
    const toggle = () => {
        setShow(!show)
    }
    const toggle2 = () => {
        setShow2(!show2)
    }



    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // const tempFunc = () => {
    //     const neww = (NewArray.filter(product => product.name.toLowerCase().indexOf('ad') !== -1))
    //     console.log(neww)
    // }
    // console.log(tempFunc())
    // console.log(NewArray)

    const values = []
    const values2 = []
    const vv = () => {
        for (let i in Categoties) {
            values2.push(values[i])
        }
    }
    console.log(values2)
    useEffect(() =>
        vv()
        , [])

    return (
        <div className="whole-page2">
            <div className="page2-insider">
                <div className="headerimg">
                    <img src={headerimg} alt='headerimg' />
                </div>
                <div className='whole-products'>
                    <Row className='row'>
                        <Col className='secondPage-col1' lg='3'>
                            <div className='querry-buttons'>
                                <button className={scroll >= 100 ? 'querry-button' : 'show-filter2'} onClick={() => toggle2()}>Show Filter</button>
                                <button className={scroll >= 100 ? 'querry-buttonn' : 'show-filter2'} onClick={() => (window.scrollTo({ top: 0, behavior: 'smooth' }))}>Go Up ↑</button>
                            </div>
                            <div className='filter'>
                                <div className={show2 ? 'filter-insider' : 'show-filter-action'}>
                                    <div className='Categotries'>
                                        <h6 className='px-3'> want a specific category?</h6>
                                        {
                                            ['Supermarket', 'Fashion', 'Health&Beauty', 'BabyProducts', 'Phone&Tablets']?.map((item, index) => {
                                                const pathMap = {
                                                    "Supermarket": "/groceries",
                                                    "Fashion": "/fashion",
                                                    "Health&Beauty": "/health-beauty",
                                                    "BabyProducts": "/baby-products",
                                                    "Phone&Tablets": "/phones-tablets"
                                                };
                                                return (
                                                    <Link className='linkCat' to={pathMap[item]} key={index}>
                                                        <div>{item}</div>
                                                    </Link>
                                                )
                                            })
                                            // : <h1>11</h1>

                                        }
                                    </div>
                                    <div className='brands'>
                                        <div className='brand'>BRANDS</div>
                                        <input className='searchInput' type='text' placeholder='Search' />
                                        <div className='checkboxs'>
                                            <div>
                                                <input type="checkbox" id="1" name="fname" ref={myref} onClick={() => dispatch(BrandFiltering2(myref, 'brand 1', swd_dynamicData))} />
                                                <label for="1">Abu Auf</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="2" name="fname" ref={myref2} onClick={() => dispatch(BrandFiltering2(myref2, 'brand 2', swd_dynamicData))} />
                                                <label for="2">Alaseal</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="3" name="fname" ref={myref3} onClick={() => dispatch(BrandFiltering2(myref3, 'brand 3', swd_dynamicData))} />
                                                <label for="3">Al Qahawi</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="4" name="fname" ref={myref4} onClick={() => dispatch(BrandFiltering2(myref4, 'brand 4', swd_dynamicData))} />
                                                <label for="4">Al Rahman</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="5" name="fname" ref={myref5} onClick={() => dispatch(BrandFiltering2(myref5, 'brand 5', swd_dynamicData))} />
                                                <label for="5">AlRehb</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='discount'>
                                        <div>DISCOUNT</div>
                                        <div className='line1'>
                                            <input type="checkbox" id="discount" name="fname" ref={myref6} onClick={() => dispatch(swd_discount(myref6, swd_dynamicData))} />
                                            <label for="discount">Show only discounted items</label>
                                        </div>
                                    </div>
                                    <div className='price'>
                                        <div className='head-price'>
                                            {/* <div>PRICE</div> */}
                                            <label for="price-range">Price (EGP):</label>
                                            <button>APPLY</button>
                                        </div>
                                        <input id="price-range" onChange={(event) => dispatch(handleRange(setPriceRange, setPriceStart, priceRange, event))} type='range' min="1" max="7074" value={priceRange} step="1" />
                                        <div>
                                            <input type='number' onChange={handlePriceStart} id="price-start" value={priceStart} min="1" max="7074" />
                                            -
                                            <input type='number' onChange={handlePriceEnd} id="price-end" value={priceEnd} min="1" max="7074" />
                                        </div>
                                    </div>
                                    <div className='product-rating'>
                                        <div className='first-line'>PRODUCT RATING</div>
                                        <div className='rate-list'>
                                            <div>
                                                <input type="radio" id="rate1" name="fname" ref={rateRef1} onClick={() => dispatch(swd_rateFilter(rateRef1, 4, swd_dynamicData))} />
                                                <label for="rate1">4 Stars & above</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="rate2" name="fname" ref={rateRef2} onClick={() => dispatch(swd_rateFilter(rateRef2, 3, swd_dynamicData))} />
                                                <label for="rate2">3 Stars & above</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="rate3" name="fname" ref={rateRef3} onClick={() => dispatch(swd_rateFilter(rateRef3, 2, swd_dynamicData))} />
                                                <label for="rate3">2 Stars & above</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="rate4" name="fname" ref={rateRef4} onClick={() => dispatch(swd_rateFilter(rateRef4, 1, swd_dynamicData))} />
                                                <label for="rate4">1 Stars & above</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='secondPage-col' lg='9'>
                            <div className='products'>
                                <div className='first-line'>
                                    <div>Supermarket (<span>{searchWholeData.length} products found</span>)</div>

                                    <div className='sort-dropdown' onClick={() => toggle()}  >
                                        <label className='dropdown2'>
                                            <h6> Sort by:<span>{sortTitles}</span></h6>
                                            <span className='fa-solid fa-chevron-down'></span>
                                        </label>
                                        {/* <div className={show ? 'dropdown-content' : 'dropdown-content-hide'}> */}
                                        <div className='sort-dropdown-content' >
                                            <div className='dropdown-content-div2'>
                                                <div>
                                                    <input type="radio" id="filter1" name="name" onClick={() => dispatch(Itemsappear2(ProductsPage1))} />
                                                    <label onClick={() => dispatch(Itemsappear2(ProductsPage1))} for="filter1">Popularity</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="filter2" name="name" onClick={() => dispatch(swd_lowToHigh(swd_dynamicData))} />
                                                    <label onClick={() => dispatch(swd_lowToHigh(swd_dynamicData))} for="filter2">Price: Low to High</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="filter3" name="name" onClick={() => dispatch(swd_highToLow(swd_dynamicData))} />
                                                    <label onClick={() => dispatch(swd_highToLow(swd_dynamicData))} for="filter3">Price: High to Low</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="filter4" name="name" />
                                                    <label onClick={() => dispatch(swd_productRating(swd_dynamicData))} for="filter4">Product Rating</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <Col lg='12'> */}
                                <div className='card-raws'>
                                    {/* <div className='single-card2'> */}
                                    {/* <div className='single-card2-insider'> */}
                                    {/* <div className='cardimg'> */}
                                    {/* <img src={cardimg3} alt='cardimg1' width={'220px'} /> */}
                                    {/* </div> */}
                                    {/* <div> */}
                                    {/* <div className='title'>Taha Offer Flexble Brush</div> */}
                                    {/* <div className='newprice'>EGP 29.99</div> */}
                                    {/* <div className='oldprice' >EGP 75.00</div> */}
                                    {/* <div className='items-left'>3 items left</div> */}
                                    {/* </div> */}
                                    {/* <div className='disapeared-button'> */}
                                    {/* <button>ADD TO CART</button> */}
                                    {/* </div> */}
                                    {/* </div> */}
                                    {/* </div> */}
                                    {
                                        searchWholeData.length >= 1 ? searchWholeData.map((item, key) => {
                                            return (
                                                <div key={key} className='single-card2'>
                                                    <Link className='link' to={`/product-details/${item.id}`}>
                                                        <img src={item.src} alt='cardimg1' width={'200px'} />
                                                        <div className='info-div'>
                                                            <div className='title'>{item.name}</div>
                                                            <div className='newprice'>EGP {item.price}</div>
                                                            <div className='oldprice' >EGP {item.oldprice}</div>
                                                            <Stars stars={item.rate} setStars={setStars} />
                                                            <div className="express2">Jumia <span>express</span></div>
                                                            {/* <div className='items-left'>3 items left</div> */}
                                                        </div>
                                                    </Link>
                                                    <button className='invisible-button' onClick={() => addItem(item)}>ADD TO CART</button>
                                                </div>

                                            )
                                        }) : (<h1>Sorry ,There is no items right now </h1>)
                                        // : <h1>aaa</h1>
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    )
}
export default SearchPage