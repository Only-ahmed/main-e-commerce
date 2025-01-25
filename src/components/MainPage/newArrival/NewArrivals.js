import './NewArrivals.css'

import cardimg3 from '../../../Data/images/flash sale/1 (1).jpg'
import cardimg4 from '../../../Data/images/flash sale/1 (2).jpg'
import cardimg5 from '../../../Data/images/flash sale/1 (3).jpg'
import { Carousel } from 'react-bootstrap'

const NewArrivals = () => {
    return (
        <div className='arrivals'>
            <div className="newArrival">
                <div className='title-sale'>
                    New Arrivals
                </div>
                {/* <div>Summer Collection New Morden Design</div> */}
            </div>
            <div className='cards2'>
                <div className='cards-raw'>
                    <div className='single-card'>
                        <img src={cardimg3} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Taha Offer Flexble Brush</div>
                            <div className='newprice'>EGP 29.99</div>
                            <div className='oldprice' >EGP 75.00</div>
                            <div className='items-left'>3 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg4} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Grouhy 8900 - HD Satellt..</div>
                            <div className='newprice'>EGP 375.00</div>
                            <div className='oldprice' >EGP 600.00</div>
                            <div className='items-left'>3 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg3} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Grouhy GLD43NA - 43</div>
                            <div className='newprice'>EGP 7.999.00</div>
                            <div className='oldprice' >EGP 13.000.00</div>
                            <div className='items-left'>5 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg4} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Grouhy Rony Gas Stove</div>
                            <div className='newprice'>EGP 799.00</div>
                            <div className='oldprice' >EGP 1200</div>
                            <div className='items-left'>4 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg5} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Tornado TVH-25BG Kitch.. </div>
                            <div className='newprice'>EGP 1.015.00</div>
                            <div className='oldprice' >EGP 1.399</div>
                            <div className='items-left'>4 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg5} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Tornado Electric Water H..</div>
                            <div className='newprice'>EGP 3.330.00</div>
                            <div className='oldprice' >EGP 4.750</div>
                            <div className='items-left'>1 items left</div>
                        </div>
                    </div>
                </div>
                <div className='cards-raw'>
                    <div className='single-card'>
                        <img src={cardimg3} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Taha Offer Flexble Brush</div>
                            <div className='newprice'>EGP 29.99</div>
                            <div className='oldprice' >EGP 75.00</div>
                            <div className='items-left'>3 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg4} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Grouhy 8900 - HD Satellt..</div>
                            <div className='newprice'>EGP 375.00</div>
                            <div className='oldprice' >EGP 600.00</div>
                            <div className='items-left'>3 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg3} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Grouhy GLD43NA - 43</div>
                            <div className='newprice'>EGP 7.999.00</div>
                            <div className='oldprice' >EGP 13.000.00</div>
                            <div className='items-left'>5 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg4} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Grouhy Rony Gas Stove</div>
                            <div className='newprice'>EGP 799.00</div>
                            <div className='oldprice' >EGP 1200</div>
                            <div className='items-left'>4 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg5} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Tornado TVH-25BG Kitch.. </div>
                            <div className='newprice'>EGP 1.015.00</div>
                            <div className='oldprice' >EGP 1.399</div>
                            <div className='items-left'>4 items left</div>
                        </div>
                    </div>
                    <div className='single-card'>
                        <img src={cardimg5} alt='cardimg1' width={'165px'} />
                        <div>
                            <div className='title'>Tornado Electric Water H..</div>
                            <div className='newprice'>EGP 3.330.00</div>
                            <div className='oldprice' >EGP 4.750</div>
                            <div className='items-left'>1 items left</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewArrivals;