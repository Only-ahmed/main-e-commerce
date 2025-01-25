import { useLocation, useParams } from 'react-router'
import img from '../../../Data/images/right part/1.png'
import './ProductDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ProductDetailsFunc } from '../../redux/actions/ReduxActions'
import { ProductsPage } from '../../../Data/data'
// import { action1 } from '../../redux/actions/ReduxActions'

const ProductDetails = () => {
    const id = useParams()

    const details = useSelector(state => state.array3)
    const DynamicDetails = useSelector(state => state.dynamicData)
    const swd_dynamicData = useSelector(state => state.swd_dynamicData)
    const dispatch = useDispatch()
    const location = useLocation()

    // const ProductPath = (param1, param2) => {
    //     if (location.pathname === 'groceries' || 'fashion' || 'health-beauty' || 'baby-products' || 'phones-tablets') {
    //         return param1
    //     } else if (location.pathname === 'search-page') {
    //         return param2
    //     }
    // }
    // console.log(swd_dynamicData)

    useEffect(() => {
        dispatch(ProductDetailsFunc(DynamicDetails, swd_dynamicData, id.id))
        // dispatch(ProductDetailsFunc(swd_dynamicData, id.id))
    }, [])
    // console.log(DynamicDetails)
    console.log(details)
    return (
        <div className="whole-details-page">
            {details.map((detail) => {
                return (
                    <div className="product-details">
                        <div className="left-part">
                            <div className='img-part'>
                                <img className='d-img' src={detail.src} alt='aa' />
                            </div>
                            <div className='shareproduct'>
                                <div> SHARE THIS PRODUCT</div>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                {/* <button onClick={() => test2((test1) => action1(test1))}>ccccccccc</button> */}
                                {/* <button onClick={() => test2((test2) => action1(test2))}>ccccccaccc</button> */}
                            </div>
                        </div>
                        <div className='details-part'>
                            <div className='d-title'>{detail.name}</div>
                            <div className='d-brand'>Brand: {detail.brand} |  Similar products from brand(?)</div>
                            <div className='d-price'>EGP {detail.price} <span>EGP {detail.oldprice}</span></div>
                            <div className='d-stock'>in stock</div>
                            <div className='d-delivery'>Free delivery till 6/24</div>
                            <div className='atc-div'>
                                <button className='addtocart'>ADD TO CART</button>
                            </div>
                            <div className='promotion-div'>
                                <div className='d-promotion'>PROMOTIONS</div>
                                <div className='d-promotion-1'> <i class="fa-solid fa-shield-halved"></i>Buy Now Pay Later , Enjoy 0% monthly installment Up to 12 Months</div>
                                <div className='d-promotion-2'> <i class="fa-solid fa-paper-plane"></i>Enjoy Free Shipping Nationwide</div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='delivery-part'>
                <div className='dr-title'>DELIVERY & RETURNS</div>
                <div className='location'>
                    <div className='choose'>Choose your location</div>
                    <select name="region" id="region">
                        <option value="volvo">Cairo</option>
                        <option value="saab">Alexandria</option>
                        <option value="opel">Giza</option>
                        <option value="audi">Luxor</option>
                        <option value="audi">Damietta</option>
                        <option value="audi">Ismailia</option>
                        <option value="audi">Kafr el-Sheikh</option>
                        <option value="audi">Port Said</option>
                        <option value="audi">Asyut</option>
                        <option value="audi">Aswan</option>
                    </select>
                </div>
                <div className='informations'>
                    <div className='inform'>
                        <i class="fa-regular fa-handshake"></i>
                        <div className='dr'>
                            <div>Pickup Station</div>
                            <div className='dr-desctiption-green'>Free delivery</div>
                            <div className='dr-desctiption'>Pickup by 17 July when you order within next 10hrs 54mins</div>
                        </div>
                    </div>
                    <div className='inform'>
                        <i class="fa-solid fa-truck-fast"></i>
                        <div className='dr'>
                            <div>Door Delivery</div>
                            <div className='dr-desctiption'>Delivery EGP 35.00 (free delivery if order above EGP 300.00)</div>
                            <div className='dr-desctiption'>Delivery by 17 July when you order within next 10hrs 54mins
                            </div>
                        </div>
                    </div>
                    <div className='inform'>
                        <i class="lasticon fa-solid fa-rotate-left"></i>
                        <div className='dr'>
                            <div>Return Policy</div>
                            <div className='dr-desctiption'>Free return within the legal return period from 14 to 30 days, and if they meet the terms & conditions, with the need to report any apparent defect within 48 hours. For more details about return policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;