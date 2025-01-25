import './secsec2.css'
// import img from '../../../Data/images/lowerSection/HPSlider712x384EN (2).png'
import img from '../../../Data/images/lowerSection/Flash-sale.gif'
// import img2 from '../../../Data/images/lowerSection/HPSlider712x384EN (1).png'
import img2 from '../../../Data/images/lowerSection/300x300ENWeekend.png'
// import img3 from '../../../Data/images/lowerSection/HPSlider712x384EN (3).png'
import img3 from '../../../Data/images/lowerSection/1AllEN.png'
// import img4 from '../../../Data/images/lowerSection/HPSlider712x384EN (4).png'
import img4 from '../../../Data/images/lowerSection/ShopEN.png'
// import img5 from '../../../Data/images/lowerSection/HPSlider712x384EN.png'
import img5 from '../../../Data/images/lowerSection/BUYEN.gif'
import img6 from '../../../Data/images/lowerSection/Force-EN.png'
import { Link } from 'react-router-dom'


const Secsec2 = () => {
    return (
        <div className='white-bc'>
            <div className='imgsection2'>
                <div className='singleCard'>
                    <Link to={'groceries'}>
                        <img src={img} alt='img' width={'184px'} height={'184px'} />
                    </Link>
                </div>
                <div className='singleCard'>
                    <Link to={'groceries'}>
                        <img src={img2} alt='img' width={'184px'} height={'184px'} />
                    </Link>
                </div>
                <div className='singleCard'>
                    <Link to={'groceries'}>
                        <img src={img3} alt='img' width={'184px'} height={'184px'} />
                    </Link>
                </div>
                <div className='singleCard'>
                    <Link to={'groceries'}>
                        <img src={img4} alt='img' width={'184px'} height={'184px'} />
                    </Link>
                </div>
                <div className='singleCard'>
                    <img className='disabledimg1' src={img5} alt='img' width={'184px'} height={'184px'} />
                </div>
                <div className='singleCard'>
                    <Link to={'register'}>
                        <img className='disabledimg2' src={img6} alt='img' width={'184px'} height={'184px'} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Secsec2;