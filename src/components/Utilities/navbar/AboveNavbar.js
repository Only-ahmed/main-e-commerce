import { Col, Row } from "react-bootstrap"
import flashsale from '../../../Data/images/1170_x_60EN.png'
import logo from '../../../Data/images/login/myjumia-top-logo.png'

const AboveNavbar = () => {
    return (
        <div className='outside-nav'>
            <Row >
                <Col>
                    <img src={flashsale} alt="flashsale" />
                </Col>
            </Row>
            <Row className="secondraw">
                <Col className="sell" lg='6'>
                    <img src={logo} alt="sell" />
                    <span>Sell on Jumia</span>
                </Col>
                <Col lg='6' className="d-flex justify-content-end">
                    عربي / English
                </Col>
            </Row>
        </div>

    )
}

export default AboveNavbar;