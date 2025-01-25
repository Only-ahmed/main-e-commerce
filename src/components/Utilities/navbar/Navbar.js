import { Col, Row } from 'react-bootstrap';
import './navbar.css'
import Logo from '../../../Data/images/OIP.jpeg'
import { useEffect, useRef, useState } from 'react';
import AboveNavbar from './AboveNavbar'
import { Link, useHref, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useDispatch, useSelector } from 'react-redux';
import { EventStore, onClick, SearchFilter, SearchFilter2 } from '../../redux/actions/Navbar';
import { appearCat } from '../../redux/actions/ReduxActions';
import { ProductsPage } from '../../../Data/data'

const Navbar = () => {
    const [show, setShow] = useState(false)
    // const [hide, setHide] = useState('dropdown-content-hide')
    const toggle = () => {
        setShow(!show)
        // setHide(hide)
    }
    const { totalItems } = useCart();

    const currentScroll = 111
    // const scrolly = window.scrollY
    // const result = ` ${scrolly === currentScroll ? 'fixed' : 'inside-nav'}`

    // const [scrolly, setScrolly] = useState();
    const [scrollY, setScrollY] = useState(0);
    const nnc = () => {
        if (scrollY >= currentScroll) {
            return 'fixed'
        }
        else if (scrollY <= currentScroll) {
            return 'inside-nav'
        }
    }
    const searchdata = useSelector((state) => state.array2)
    const searchdata2 = useSelector((state) => state.searchFilter)
    const searchdata3 = useSelector((state) => state.searchFilter2)
    const dynamicData = useSelector((state) => state.dynamicData)
    const dynamicData2 = useSelector((state) => state.dynamicData2)
    const swd_dynamicData = useSelector((state) => state.swd_dynamicData)
    const clickedCat = useSelector((state) => state.array1)

    const fuck = useSelector((state) => state.fuck)
    const event = useSelector((state) => state.event)
    const dispatch = useDispatch()
    const SearchRef = useRef()
    // console.log(dynamicData)
    // useEffect(() => {
    // dispatch(SearchFilter(searchdata))
    // }, [searchdata]);
    // console.log(searchdata2)
    // console.log(searchdata3)
    // const [handledData, setHandledData] = useState()
    // for (let i in searchdata) {
    // for (let n in searchdata[i]) {
    // for (let b in searchdata[i][n].name) {
    // if (SearchRef.current.value === searchdata[i][n]) {
    // setHandledData(searchdata[i][n])
    // }
    // }
    // }
    // }

    // const searchInsideCats = () => {
    //     for (let i = 0; i <= 50; i++) {
    //         if (clickedCat[i] === event[i]) {
    //             return console.log(dynamicData)
    //         } else {
    //             return console.log(dynamicData2)
    //         }
    //     }
    // }
    // useEffect(() =>
    //     searchInsideCats()
    //     ,)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [query, setQuery] = useState();
    // console.log('ScrollY:', scrollY);
    // console.log(searchdata);

   
    const location = useLocation();
    const navigate = useNavigate()
    const toggleSearch = (param1, param2) => {
        if (location.pathname === '/search-page') {
            // navigate('/search-page')
            return param2
        } else if (location.pathname === 'groceries' || 'fashion' || 'health-beauty' || 'baby-products' || 'phones-tablets') {
            return param1
        }
    }
    const togglePages = () => {
        if (location.pathname === '/') {
            return 'search-page'
        }
    }

    return (
        <div className='whole-nav'>
            <AboveNavbar />
            <Row className={nnc()}>
                <div className='inside-nav'>
                    <div className='insider'>
                        <Col lg='2'>
                            <div>
                                <a href={'/'}> <img src={Logo} alt='logo of the site' width={'135px'} /></a>
                            </div>
                        </Col>
                        <Col className='important' lg='7'>
                            <div className='search-section' >
                                <div className='input-section'>
                                    <span className='fa-solid fa-magnifying-glass'></span>
                                    <input ref={SearchRef} placeholder='Search products, brands and categories' type='text'
                                        // onChange={(e) => dispatch(SearchFilter2(searchdata2, e.target.value))} />
                                        onChange={(e) => dispatch(() => SearchFilter2(toggleSearch(dynamicData, swd_dynamicData), dynamicData2, setQuery(e.target.value)), location.pathname, navigate)} />
                                </div>
                                <Link to={togglePages()}>
                                    <button onClick={() => dispatch(SearchFilter2(toggleSearch(dynamicData, swd_dynamicData), dynamicData2, query, location.pathname, navigate))}>SEARCH</button>
                                </Link>
                            </div>
                        </Col>
                        <Col lg='4' className='col-buttons-setion d-flex'>
                            <div className='buttons-setion'>
                                <div className='nav-button1' onClick={() => toggle()}  >
                                    <label className='dropdown'>
                                        <span className='fa-regular fa-user'></span>
                                        <span className='none'> Account</span>
                                        <span className='none fa-solid fa-chevron-down'></span>
                                    </label>
                                    <div className={show ? 'dropdown-content' : 'dropdown-content-hide'}>
                                        <div className='button-div'>
                                            <a href='/login'><button >SIGN IN</button></a>
                                        </div>
                                        <div className='dropdown-content-div'>
                                            <a href='/login'>
                                                <span className='fa-regular fa-user'></span>
                                                My Account
                                            </a>
                                            <a href='/'>
                                                <span className='fa-solid fa-box'></span>
                                                Orders
                                            </a>
                                            <a href='/'>
                                                <span className='fa-solid fa-heart'></span>
                                                Saved Items
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='nav-button2'>
                                    <label>
                                        <span className='fa-solid fa-question'></span>
                                        <span> Help</span>
                                        <span className='fa-solid fa-chevron-down'></span>
                                    </label>
                                </div>
                                <div className='nav-button3'>
                                    <label>
                                        <a href={'/cart'}>
                                            <span className='cart-shopping fa-solid fa-cart-shopping'></span>
                                            <span className='cart-span'>Cart<span>{totalItems}</span></span>
                                        </a>
                                    </label>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </Row>
        </div >
    )
}
export default Navbar;