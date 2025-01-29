import './SecondPage.css'
import headerimg from '../../Data/images/Second Page/headerIMG/1152_x_252_eng.png'
import { Col, Row } from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { appearCat, BrandFiltering, Categoryappear, discount, handleRange, highToLow, Itemsappear, lowToHigh, price, productRating, rateFilter, } from '../redux/actions/ReduxActions'
import { useDispatch, useSelector } from 'react-redux'
import Stars from '../Utilities/reusable/Stars'
import { useCart } from 'react-use-cart'
import cloneDeep from 'clone-deep'
import { EventStore, SearchFilter, SearchFilter2 } from '../redux/actions/Navbar'




const SecondPage = ({ ProductsPage, Categoties, Cat }) => {
    const { addItem } = useCart()
    // const NewArray = []
    // for (let i in Categories.supermarket) {
    // for (let f in Categories.supermarket[i]) {
    // for (let g in Categories.supermarket[i][f]) {
    // NewArray.push(Categories.supermarket[i][f][g])
    // }
    // }
    // }


    const appearCategory = useSelector((state) => state.array1)
    const Itemsappears = useSelector((state) => state.array2)
    const dynamicData = useSelector((state) => state.dynamicData)
    const filter = useSelector((state) => state.searchFilter2)
    const filtertwo = useSelector((state) => state.searchFilter)
    const event = useSelector((state) => state.event)
    const sortTitles = useSelector((state) => state.sortTitles)
    const dispatch = useDispatch()

    // console.log(Itemsappears)

    useEffect(() =>
        dispatch(appearCat(ProductsPage))
        , [])
    useEffect(() =>
        dispatch(Categoryappear(Categoties))
        , [])
    useEffect(() =>
        dispatch(Itemsappear(ProductsPage))
        , [])
    // useEffect(() =>
    //     dispatch(EventStore(dynamicData))
    //     , [])
    // console.log(Itemsappears)
    // console.log(event)
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
    // console.log(dynamicData)
    // console.log(new1)


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
    // const RandomizedData = () => {
    // setRandomData(Itemsappears * Math.random())
    // }
    // const shuffleArray = (array) => {
    // for (let i = array.length - 1; i > 0; i--) {
    // for (let i = 0; i <= Itemsappears.length; i++) {
    // const j = Math.floor(Math.random() * (i + 1));
    // [array[i], array[j]] = [array[j], array[i]];
    // }
    // }

    // useEffect(() =>
    // dispatch(BrandFiltering(myref))
    // , [])
    // const [cat2, setCat2] = useState(true)
    // const [cat3, setCat3] = useState(false)
    // const [checked, setChecked] = useState(false);
    // function handleChange(e) {
    //     setChecked(e.target.checked);
    // }

    // console.log(Itemsappears)

    // const shuffleArray = (array) => {
    //     array.sort(() => Math.random() - 0.5);
    // }
    // const [sss, setSss] = useState()
    // useEffect(() =>
    //     setSss(shuffleArray(Itemsappears))
    //     , [])
    // console.log(sss)
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

    // iife مفيدة 
    // (function () {
    //     if (initialValue >= scroll) {
    //         return 'show-filter'
    //     } else {
    //         return 'show-filter2';
    //     }
    // })();
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                                        {
                                            appearCategory?.map((item, index) => {
                                                return (
                                                    <Link className='linkCat' to={item.to} key={index}>
                                                        <div>{item.title}</div>
                                                    </Link>
                                                )
                                            })}
                                    </div>
                                    <div className='brands'>
                                        <div className='brand'>BRANDS</div>
                                        <input className='searchInput' type='text' placeholder='Search' />
                                        <div className='checkboxs'>
                                            <div>
                                                <input type="checkbox" id="1" name="fname" ref={myref} onChange={() => dispatch(BrandFiltering(myref, 'brand 1', dynamicData))} />
                                                <label for="1">Abu Auf</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="2" name="fname" ref={myref2} onClick={() => dispatch(BrandFiltering(myref2, 'brand 2', dynamicData))} />
                                                <label for="2">Alaseal</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="3" name="fname" ref={myref3} onClick={() => dispatch(BrandFiltering(myref3, 'brand 3', dynamicData))} />
                                                <label for="3">Al Qahawi</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="4" name="fname" ref={myref4} onClick={() => dispatch(BrandFiltering(myref4, 'brand 4', dynamicData))} />
                                                <label for="4">Al Rahman</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="5" name="fname" ref={myref5} onClick={() => dispatch(BrandFiltering(myref5, 'brand 5', dynamicData))} />
                                                <label for="5">AlRehb</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='discount'>
                                        <div>DISCOUNT</div>
                                        <div className='line1'>
                                            <input type="checkbox" id="discount" name="fname" ref={myref6} onClick={() => dispatch(discount(myref6, dynamicData))} />
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
                                                <input type="radio" id="rate1" name="fname" ref={rateRef1} onClick={() => dispatch(rateFilter(rateRef1, 4, dynamicData))} />
                                                <label for="rate1">4 Stars & above</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="rate2" name="fname" ref={rateRef2} onClick={() => dispatch(rateFilter(rateRef2, 3, dynamicData))} />
                                                <label for="rate2">3 Stars & above</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="rate3" name="fname" ref={rateRef3} onClick={() => dispatch(rateFilter(rateRef3, 2, dynamicData))} />
                                                <label for="rate3">2 Stars & above</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="rate4" name="fname" ref={rateRef4} onClick={() => dispatch(rateFilter(rateRef4, 1, dynamicData))} />
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
                                    <div>Supermarket (<span>{Itemsappears.length} products found</span>)</div>

                                    <div className='sort-dropdown' onClick={() => toggle()}  >
                                        <label className='dropdown2'>
                                            <h6> Sort by:<span>{sortTitles}</span></h6>
                                            <span className='fa fa-solid fa-chevron-down'></span>
                                        </label>
                                        {/* <div className={show ? 'dropdown-content' : 'dropdown-content-hide'}> */}
                                        <div className='sort-dropdown-content' >
                                            <div className='dropdown-content-div2'>
                                                <div>
                                                    <input type="radio" id="filter1" name="name" onClick={() => dispatch(Itemsappear(ProductsPage))} />
                                                    <label onClick={() => dispatch(Itemsappear(ProductsPage))} for="filter1">Popularity</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="filter2" name="name" onClick={() => dispatch(lowToHigh(dynamicData))} />
                                                    <label onClick={() => dispatch(lowToHigh(dynamicData))} for="filter2">Price: Low to High</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="filter3" name="name" onClick={() => dispatch(highToLow(dynamicData))} />
                                                    <label onClick={() => dispatch(highToLow(dynamicData))} for="filter3">Price: High to Low</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="filter4" name="name" />
                                                    <label onClick={() => dispatch(productRating(dynamicData))} for="filter4">Product Rating</label>
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
                                        Itemsappears.length >= 1 ? Itemsappears?.map((item, key) => {
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
export default SecondPage