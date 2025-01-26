import './Flashsale.css'
import cardimg1 from '../../../Data/images/flash sale/1.jpg'
import cardimg2 from '../../../Data/images/flash sale/1(5).jpg'
import cardimg3 from '../../../Data/images/flash sale/1 (1).jpg'
import cardimg4 from '../../../Data/images/flash sale/1 (2).jpg'
import cardimg5 from '../../../Data/images/flash sale/1 (3).jpg'
import cardimg6 from '../../../Data/images/flash sale/1 (4).jpg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Stars from '../../Utilities/reusable/Stars'
import { Link } from 'react-router-dom'
import { Itemsappear } from '../../redux/actions/ReduxActions'
import { ProductsPage } from '../../../Data/data'
import { Card } from 'react-bootstrap'
import { current } from '@reduxjs/toolkit'

const Flaschsale = () => {

    const [timer, setTimer] = useState(1000000);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 0) {
                    clearInterval(intervalId);
                    // return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId)
    });
    const formattedTime = new Date(timer * 1000).toISOString().substr(11, 8)

    // const randomData = useSelector((state) => (state.array2))
    const dispatch = useDispatch()
    useEffect(() =>
        dispatch(Itemsappear(ProductsPage))
        , [])
    const partOfData = ProductsPage.Supermarket[0].Food_storage_Foil.slice(2, 8)
    const partOfData2 = ProductsPage.Fashion[0].womens_bags.slice(0, 6)
    // const [currentData, setCurrentData] = useState([
    //     {
    //         title: 'ahmed',
    //         age: 21
    //     }, {
    //         title: 'mohamed',
    //         age: 34
    //     },
    // ])
    // const [newData, setNewData] = useState([
    //     {
    //         title: 'said',
    //         age: 34
    //     },
    //     {
    //         title: 'ramy',
    //         age: 34
    //     },
    //     {
    //         title: '3abas',
    //         age: 34
    //     },
    //     {
    //         title: 'abbbbbbb',
    //         age: 3400
    //     },])

    // const updateData = () => {
    //     setCurrentData(newData)
    // }
    // const updateData2 = () => {
    //     setNewData(currentData)
    // }


    const [cards, setCards] = useState(partOfData);
    const updateCards = (prevCards) => {
        // setCards((prevCards) => {
        if (prevCards === partOfData) {
            setCards(partOfData2)
        } else {
            const current = setInterval(() => setCards(partOfData2), 10000)
            if (current) {
                setInterval(() => setCards(partOfData), 20000);
            }
        }
        // }
        // );
    };
    useEffect(() => {
        // if (timer === 0) {
        updateCards()
        // setInterval(updateCards(), 4000)
        // }
        // if (ggg) {
        // setInterval(() => {
        // updateData2()
        // return () => clearInterval(ggg);
        // }, 3000)
        // }
    }, []);


    return (
        <div className='whole-fs'>
            <div className="red-line">
                <div className='title-sale'>
                    <span className="dollar-sign fa-solid fa-dollar-sign"></span>
                    Flash Sales Don't Miss !!</div>
                <div className='time-left'>
                    Time Left <span>{formattedTime}</span>
                </div>
                <Link className='link-seeAll' to={'groceries'}><div className='seeAll'>SEE ALL<span className="fa-solid fa-chevron-right"></span></div></Link>
            </div>
            {/* <div>{partData.age}</div> */}
            {/* <button onClick={() => updateData()}>111</button> */}
            <div className='cards'>
                {
                    cards?.map((item, key) => {
                        return (
                            <div key={key} className='fs-single-card2'>
                                <Link className='link' to={`/product-details/${item.id}`}>
                                    <img src={item.src} alt='cardimg1' width={'165px'} />
                                    <div>
                                        <div className='title'>{item.name}</div>
                                        <div className='newprice'>EGP {item.price}</div>
                                        <div className='oldprice' >EGP {item.oldprice}</div>
                                        <Stars stars={item.rate} />
                                        {/* <div className="express2">Jumia <span>express</span></div> */}

                                        {/* <div className='items-left'>3 items left</div> */}
                                    </div>
                                </Link>
                                {/* <button className='invisible-button' onClick={() => addItem(item)}>ADD TO CART</button> */}
                            </div>
                        )
                    })
                }
                {/* <div className='single-card'>
                    <img src={cardimg1} alt='cardimg1' width={'185px'} />
                    <div>
                        <div className='title'>Taha Offer Flexble Brush</div>
                        <div className='newprice'>EGP 29.99</div>
                        <div className='oldprice' >EGP 75.00</div>
                        <div className='items-left'>3 items left</div>
                    </div>
                </div>
                <div className='single-card'>
                    <img src={cardimg2} alt='cardimg1' width={'185px'} />
                    <div>
                        <div className='title'>Grouhy 8900 - HD Satellt..</div>
                        <div className='newprice'>EGP 375.00</div>
                        <div className='oldprice' >EGP 600.00</div>
                        <div className='items-left'>3 items left</div>
                    </div>
                </div>
                <div className='single-card'>
                    <img src={cardimg3} alt='cardimg1' width={'185px'} />
                    <div>
                        <div className='title'>Grouhy GLD43NA - 43</div>
                        <div className='newprice'>EGP 7.999.00</div>
                        <div className='oldprice' >EGP 13.000.00</div>
                        <div className='items-left'>5 items left</div>
                    </div>
                </div>
                <div className='single-card'>
                    <img src={cardimg4} alt='cardimg1' width={'185px'} />
                    <div>
                        <div className='title'>Grouhy Rony Gas Stove</div>
                        <div className='newprice'>EGP 799.00</div>
                        <div className='oldprice' >EGP 1200</div>
                        <div className='items-left'>4 items left</div>
                    </div>
                </div>
                <div className='single-card'>
                    <img src={cardimg5} alt='cardimg1' width={'185px'} />
                    <div>
                        <div className='title'>Tornado TVH-25BG Kitch.. </div>
                        <div className='newprice'>EGP 1.015.00</div>
                        <div className='oldprice' >EGP 1.399</div>
                        <div className='items-left'>4 items left</div>
                    </div>
                </div>
                <div className='single-card'>
                    <img src={cardimg6} alt='cardimg1' width={'185px'} />
                    <div>
                        <div className='title'>Tornado Electric Water H..</div>
                        <div className='newprice'>EGP 3.330.00</div>
                        <div className='oldprice' >EGP 4.750</div>
                        <div className='items-left'>1 items left</div>
                    </div>
                </div>
            </div>
            <div> */}

            </div>
        </div>
    )
}
export default Flaschsale;