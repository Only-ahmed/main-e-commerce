import './MainPage.css'
import BabyProducts from './FirstSection/Categories/BabyProducts';
import Fashion from './FirstSection/Categories/Fashion';
import HealthBeauty from './FirstSection/Categories/HealthBeauty';
import Supermarket from './FirstSection/Categories/Supermarket'
import PhoneTablets from './FirstSection/Categories/PhoneTablets'

import { Col, Row } from 'react-bootstrap';
import MidSlider from './FirstSection/MiddleSlider/MidSlider';
import UpperSide from './FirstSection/Right part/UpperSide';
import LowerSide from './FirstSection/Right part/LowerSide';
import Secsec from './SecondSection/Secsec';
import Flaschsale from './FlashsaleSection/Flashsale';
import NewArrivals from './newArrival/NewArrivals';
// import Footer from './Footer/Footer';
import OfferBox from './OfferBox/OfferBox';
import Secsec2 from './SecondSection2/Secsec2';


const MainPage = () => {
    return (
        <div className='main-sec'>
            <Row className='myrow'>
                <Col lg='2' className='flex-col'>
                    <div className='categories'>
                        <div>
                            <Supermarket />
                        </div>
                        <div>
                            <Fashion />
                        </div>
                        <div>
                            <HealthBeauty />
                        </div>
                        <div>
                            <BabyProducts />
                        </div>
                        <div>
                            <PhoneTablets />
                        </div>
                    </div>
                </Col>
                <Col className='mid' lg='7'>
                    <MidSlider />
                </Col>
                <Col className='right-side' lg='3'>
                    <UpperSide />
                    <LowerSide />
                </Col>
            </Row>
            <Secsec2 />
            <Secsec />
            <Flaschsale />
            <NewArrivals />
            <OfferBox />
        </div>
    )
}
export default MainPage;