import img1 from '../../../Data/images/Offerbox/R.jpeg'
import img2 from '../../../Data/images/Offerbox/OIP.jpeg'
import img3 from '../../../Data/images/Offerbox/R (1).jpeg'
import img4 from '../../../Data/images/Offerbox/R (2).jpeg'
import img5 from '../../../Data/images/Offerbox/cheerful-woman-near-the-wardrobe-shopaholic-isolated-background-photo.jpg'
import './Offerbox.css'
import { Link } from 'react-router-dom'


const OfferBox = () => {
    return (
        <div className="whole-Offerbox">
            <div className="Offerbox-insider">
                <div className="row1" >
                    <div className='img-div'>
                        <img className='img1' src={img1} alt='offer Img' height={'350px'} />
                        <div className='details '>
                            <div className='r1t1'>Crazy Deals</div>
                            <div className='r1t2'>Buy 1 Get 1 Free</div>
                            <div className='r1t3'>The Best Classic Dress Is On Salo At Cara</div>
                            <Link to={'men-suits'}> <button>Learn More</button></Link>
                        </div>
                    </div>
                    <div className='img-div'>
                        <img className='img2' src={img2} alt='offer Img' height={'350px'} />
                        <div className='details details2'>
                            <div className='r1t1'>Spring/Summer</div>
                            <div className='r1t2'>Upcomming Season</div>
                            <div className='r1t3'>The Best Classic Dress Is On Salom At Cara</div>
                            <Link to={'fashion'}> <button>Learn More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="row2" >
                    <div className='row2-inside'>
                        <img className='img3' src={img3} alt='offer Img' />
                        <div className='r2-details r2-details-border1'>
                            <div className='r2t1'>Seasonal Sale</div>
                            <div className='r2t2'>Winter Colletion -50% Off</div>
                        </div>
                    </div>
                    <div className='row2-inside'>
                        <img className='img4' src={img4} alt='offer Img' />
                        <div className='r2-details'>
                            <div className='r2t1'>New Footwera</div>
                            <div className='r2t2'>Spring/Summer 2022</div>
                        </div>
                    </div>
                    <div className='row2-inside'>
                        <img className='img5' src={img5} alt='offer Img' />
                        <div className='r2-details r2-details-border2 '>
                            <div className='r2t1'>T-Shirts</div>
                            <div className='r2t2'>New Trendy Prints</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default OfferBox;