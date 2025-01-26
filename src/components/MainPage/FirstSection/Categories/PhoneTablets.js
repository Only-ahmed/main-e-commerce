import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Categories } from "../../../../Data/data";

const PhoneTablets = () => {
    return (
        <div>
            <Row>
                <Col className="mm">
                    <Link to="phones-tablets">
                        <span className="fa-solid fa-mobile-screen"></span>
                        Phone & Tablet
                        <span className="right-arrow fa-solid fa-caret-right"></span>
                    </Link>
                </Col>
                <div className="hover-menu">
                    <div className="hover-menu-flex" >
                        <Col className="column" lg='4'>
                            <ul>
                                <div>MOBILE PHONES</div>
                                {Categories.PhoneTablets[0].MOBILE_PHONES?.map((item ,key) => {
                                    return (
                                        <li key={key}><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                            <ul>
                                <div>TABLETS</div>
                                {Categories.PhoneTablets[0].TABLETS?.map((item ,key) => {
                                    return (
                                        <li key={key}><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col className="column" lg='4'>
                            <ul>
                                <div>MOBILE PHONES ACCESSORIES</div>
                                {Categories.PhoneTablets[0].MOBILE_PHONES_ACCESSORIES?.map((item ,key) => {
                                    return (
                                        <li key={key}><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </Col>
                    </div>
                </div>
            </Row>
        </div>
    )
}
export default PhoneTablets;