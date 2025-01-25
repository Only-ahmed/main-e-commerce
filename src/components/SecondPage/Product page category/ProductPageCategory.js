// import './../SecondPage.css'

import { useEffect, useRef, useState } from 'react'
// import cardimg3 from '../../../Data/images/flash sale/1 (1).jpg'
// import cardimg4 from '../../../Data/images/flash sale/1 (2).jpg'
// import cardimg5 from '../../../Data/images/flash sale/1 (3).jpg'
import headerimg from '../../../Data/images/Second Page/headerIMG/1152_x_252_eng.png'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Stars from '../../Utilities/reusable/Stars'
import { useDispatch, useSelector } from 'react-redux'
import { appearCat, BrandFiltering, Categoryappear, discount, handleRange, highToLow, Itemsappear, lowToHigh, productRating, rateFilter } from '../../redux/actions/ReduxActions'
import { ProductsPage } from '../../../Data/data'
import { useCart } from 'react-use-cart'
import { appearCat2, BrandFiltering2, discount2, Itemsappear2, rateFilter2 } from '../../redux/actions/PP-Category'
import { testCat } from '../../redux/actions/Navbar'


const ProductPageCategory = ({ productPageCat, Categoties }) => {
    // const id = useParams();
    const { addItem } = useCart()

    const [insideCat, setInsideCat] = useState()

    const appearCatt = () => {
        const NewArray = []
        for (let i in productPageCat) {
            // for (let f in productPageCat[i]) {
            // for (let g in productPageCat[i][f]) {
            NewArray.push(productPageCat[i])
            // appearCat(productPageCat[i])
            setInsideCat(NewArray)
            // }
            // }
        }
    }

    // useEffect(() =>
    // dispatch(BrandFiltering2(productPageCat))
    // , [])


    // const appearCategory = useSelector((state) => state.array1)
    // const Itemsappears = useSelector((state) => state.array2)
    const dynamicData = useSelector((state) => state.dynamicData2)
    const dynamicData2 = useSelector((state) => state.dynamicData)

    // const dynamicData2 = useSelector((state) => state.dynamicData)
    const PP_Category = useSelector((state) => state.fuck)
    const event = useSelector((state) => state.event)
    const clickedCat = useSelector((state) => state.array1)
    const sortTitles = useSelector((state) => state.sortTitles)
    const dispatch = useDispatch()

    useEffect(() =>
        dispatch(appearCat2(productPageCat))
        , [])
    useEffect(() =>
        dispatch(Itemsappear2(productPageCat))
        , [])
    useEffect(() =>
        dispatch(testCat())
        , [])
    // useEffect(() =>
    // searchInsideCats()
    // , [])


    // console.log(event)
    // const searchInsideCats = () => {
    //     for (let i = 0; i <= 50; i++) {
    //         if (clickedCat[i] === event[i]) {
    //             return dynamicData
    //         } else {
    //             return dynamicData2
    //         }
    //     }
    // }


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
    const [show2, setShow2] = useState(false)
    const [scroll, setScroll] = useState(0)
    const initialValue = 100



    // const handleRange = (event) => {
    //     const newPriceRange = parseInt(event.target.value)
    //     setPriceRange(newPriceRange)
    //     setPriceStart(newPriceRange)
    // }
    const handlePriceStart = (event) => {
        const newPriceStart = parseInt(event.target.value)
        setPriceStart(newPriceStart)
        setPriceRange(newPriceStart)
    }
    const handlePriceEnd = (event) => {
        const newPriceEnd = parseInt(event.target.value)
        setPriceEnd(newPriceEnd)
    }
    const toggle2 = () => {
        setShow2(!show2)
    }
    const scrollyButton = () => {
        if (scroll >= initialValue) {
            return 'show-filter'
        } else if (initialValue >= scroll) {
            return 'show-filter2'
        }
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
    useEffect(() => {
        scrollyButton()
    })

    console.log(PP_Category)

    return (
        <div className="whole-page2">
            <div className="page2-insider">
                <div className="headerimg">
                    <img src={headerimg} alt='headerimg' />
                </div>
                <div className='whole-products'>
                    <Row>
                        <Col className='secondPage-col' lg='3'>
                            <div className='querry-buttons'>
                                <button className={scroll >= 100 ? 'querry-button' : 'show-filter2'} onClick={() => toggle2()}>Show Filter</button>
                                <button className={scroll >= 100 ? 'querry-buttonn' : 'show-filter2'} onClick={() => (window.scrollTo({ top: 0, behavior: 'smooth' }))}>Go Up ↑</button>
                            </div>
                            <div className='filter'>
                                <div className={show2 ? 'filter-insider' : 'show-filter-action'}>
                                    <div className='brands'>
                                        <div className='brand'>BRANDS</div>
                                        <input className='searchInput' type='text' placeholder='Search' />
                                        <div className='checkboxs'>
                                            <div>
                                                <input type="checkbox" id="1" name="fname" ref={myref} onClick={() => dispatch(BrandFiltering2(myref, 'brand 1', dynamicData))} />
                                                <label for="1">Abu Auf</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="2" name="fname" ref={myref2} onClick={() => dispatch(BrandFiltering2(myref2, 'brand 2', dynamicData))} />
                                                <label for="2">Alaseal</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="3" name="fname" ref={myref3} onClick={() => dispatch(BrandFiltering2(myref3, 'brand 3', dynamicData))} />
                                                <label for="3">Al Qahawi</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="4" name="fname" ref={myref4} onClick={() => dispatch(BrandFiltering2(myref4, 'brand 4', dynamicData))} />
                                                <label for="4">Al Rahman</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="5" name="fname" ref={myref5} onClick={() => dispatch(BrandFiltering2(myref5, 'brand 5', dynamicData))} />
                                                <label for="5">AlRehb</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='discount'>
                                        <div>DISCOUNT</div>
                                        <div className='line1'>
                                            <input type="checkbox" id="discount" name="fname" ref={myref6} onClick={() => dispatch(discount2(myref6, dynamicData))} />
                                            <label for="discount">Show only discounted items</label>
                                        </div>
                                    </div>
                                    <div className='price'>
                                        <div className='head-price'>
                                            <div>PRICE</div>
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
                                                <input type="radio" id="rate1" name="fname" ref={rateRef1} onClick={() => dispatch(rateFilter2(rateRef1, 4, dynamicData))} />
                                                <label for="rate1">4 Stars & above</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="rate2" name="fname" ref={rateRef2} onClick={() => dispatch(rateFilter2(rateRef2, 3, dynamicData))} />
                                                <label for="rate2">3 Stars & above</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="rate3" name="fname" ref={rateRef3} onClick={() => dispatch(rateFilter2(rateRef3, 2, dynamicData))} />
                                                <label for="rate3">2 Stars & above</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="rate4" name="fname" ref={rateRef4} onClick={() => dispatch(rateFilter2(rateRef4, 1, dynamicData))} />
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
                                    <div>Supermarket (<span>{PP_Category?.length} products found</span>)</div>

                                    <div className='sort-dropdown'   >
                                        <label className='dropdown2'>
                                            <h6> Sort by:<span>{sortTitles}</span></h6>
                                            <span className='fa-solid fa-chevron-down'></span>
                                        </label>
                                        {/* <div className={show ? 'dropdown-content' : 'dropdown-content-hide'}> */}
                                        <div className='sort-dropdown-content' >
                                            <div className='dropdown-content-div2'>
                                                <div>
                                                    <input type="radio" id="filter1" name="name" onClick={() => dispatch(Itemsappear(ProductsPage))} />
                                                    <label onClick={() => dispatch(Itemsappear2(productPageCat))} for="filter1">Popularity</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="filter2" name="name" onClick={() => dispatch(lowToHigh(dynamicData))} />
                                                    <label onClick={() => dispatch(lowToHigh(PP_Category))} for="filter2">Price: Low to High</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="filter3" name="name" onClick={() => dispatch(highToLow(dynamicData))} />
                                                    <label onClick={() => dispatch(highToLow(PP_Category))} for="filter3">Price: High to Low</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="filter4" name="name" />
                                                    <label onClick={() => dispatch(productRating(PP_Category))} for="filter4">Product Rating</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-raws'>
                                    {/* <div className='single-card2'>
                                        <img src={cardimg3} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Taha Offer Flexble Brush</div>
                                            <div className='newprice'>EGP 29.99</div>
                                            <div className='oldprice' >EGP 75.00</div>
                                            <div className='items-left'>3 items left</div>
                                        </div>
                                        <div className='disapeared-button'>
                                            <button>ADD TO CART</button>
                                        </div>
                                    </div> */}
                                    {
                                        PP_Category.length >= 1 ? PP_Category.map((item, key) => {
                                            return (
                                                <div key={key} className='single-card2'>
                                                    <Link className='link' to={`/product-details/${item.id}`}>
                                                        <img src={item.src} alt='cardimg1' width={'200px'} />
                                                        <div>
                                                            <div className='title'>{item.name}</div>
                                                            <div className='newprice'>EGP {item.price}</div>
                                                            <div className='oldprice' >EGP {item.oldprice}</div>
                                                            <Stars stars={item.rate} />
                                                            <div className="express2">Jumia <span>express</span></div>

                                                            {/* <div className='items-left'>3 items left</div> */}
                                                        </div>
                                                    </Link>
                                                    <button className='invisible-button' onClick={() => addItem(item)}>ADD TO CART</button>
                                                </div>
                                            )
                                        }) : <h1>Sorry ,There is no items right now </h1>
                                    }
                                    {/* <div className='single-card2'>
                                        <img src={cardimg3} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Grouhy GLD43NA - 43</div>
                                            <div className='newprice'>EGP 7.999.00</div>
                                            <div className='oldprice' >EGP 13.000.00</div>
                                            <div className='items-left'>5 items left</div>
                                        </div>
                                    </div>
                                    <div className='single-card2'>
                                        <img src={cardimg4} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Grouhy Rony Gas Stove</div>
                                            <div className='newprice'>EGP 799.00</div>
                                            <div className='oldprice' >EGP 1200</div>
                                            <div className='items-left'>4 items left</div>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className='cards-raw'>
                                    <div className='single-card2'>
                                        <img src={cardimg3} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Taha Offer Flexble Brush</div>
                                            <div className='newprice'>EGP 29.99</div>
                                            <div className='oldprice' >EGP 75.00</div>
                                            <div className='items-left'>3 items left</div>
                                        </div>
                                    </div>
                                    <div className='single-card2'>
                                        <img src={cardimg4} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Grouhy 8900 - HD Satellt..</div>
                                            <div className='newprice'>EGP 375.00</div>
                                            <div className='oldprice' >EGP 600.00</div>
                                            <div className='items-left'>3 items left</div>
                                        </div>
                                    </div>
                                    <div className='single-card2'>
                                        <img src={cardimg3} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Grouhy GLD43NA - 43</div>
                                            <div className='newprice'>EGP 7.999.00</div>
                                            <div className='oldprice' >EGP 13.000.00</div>
                                            <div className='items-left'>5 items left</div>
                                        </div>
                                    </div>
                                    <div className='single-card2'>
                                        <img src={cardimg4} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Grouhy Rony Gas Stove</div>
                                            <div className='newprice'>EGP 799.00</div>
                                            <div className='oldprice' >EGP 1200</div>
                                            <div className='items-left'>4 items left</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cards-raw'>
                                    <div className='single-card2'>
                                        <img src={cardimg3} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Taha Offer Flexble Brush</div>
                                            <div className='newprice'>EGP 29.99</div>
                                            <div className='oldprice' >EGP 75.00</div>
                                            <div className='items-left'>3 items left</div>
                                        </div>
                                    </div>
                                    <div className='single-card2'>
                                        <img src={cardimg4} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Grouhy 8900 - HD Satellt..</div>
                                            <div className='newprice'>EGP 375.00</div>
                                            <div className='oldprice' >EGP 600.00</div>
                                            <div className='items-left'>3 items left</div>
                                        </div>
                                    </div>
                                    <div className='single-card2'>
                                        <img src={cardimg3} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Grouhy GLD43NA - 43</div>
                                            <div className='newprice'>EGP 7.999.00</div>
                                            <div className='oldprice' >EGP 13.000.00</div>
                                            <div className='items-left'>5 items left</div>
                                        </div>
                                    </div>
                                    <div className='single-card2'>
                                        <img src={cardimg4} alt='cardimg1' width={'220px'} />
                                        <div>
                                            <div className='title'>Grouhy Rony Gas Stove</div>
                                            <div className='newprice'>EGP 799.00</div>
                                            <div className='oldprice' >EGP 1200</div>
                                            <div className='items-left'>4 items left</div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    )
}
export default ProductPageCategory;