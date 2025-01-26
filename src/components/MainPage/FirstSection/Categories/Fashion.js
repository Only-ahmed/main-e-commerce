import { Col, Row } from "react-bootstrap";
import './Categories.css'
import { Link } from "react-router-dom";
import { Categories } from "../../../../Data/data";


const Fashion = () => {
    return (
        <div>
            <Row>
                <Col className="mm">
                    <Link to="fashion">
                        <span className="fa-solid fa-shirt"></span>
                        Fashion
                        <span className="right-arrow fa-solid fa-caret-right"></span>
                    </Link>
                </Col>
                <div className="hover-menu">
                    <div className="hover-menu-flex" >
                        <Col className="column" lg='4'>
                            <ul>
                                <div>WOMEN'S FASHION</div>
                                {Categories.Fashion[0].WOMENS_FASHION?.map((item ,key) => {
                                    return (
                                        <li key={key}><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col className="column" lg='4'>
                            <ul>
                                <div>MEN'S FASHION</div>
                                {Categories.Fashion[0].MENS_FASHION?.map((item ,key) => {
                                    return (
                                        <li key={key}><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col className="column" lg='4'>
                            <ul>
                                <div><Link to='fashion/air-fresheners'>BABY FASHION</Link></div>
                                {Categories.Fashion[0].BABY_FASHION?.map((item ,key) => {
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
export default Fashion;