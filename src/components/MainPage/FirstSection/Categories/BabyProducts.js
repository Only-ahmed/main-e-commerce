import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Categories } from "../../../../Data/data";

const BabyProducts = () => {
    return (
        <div className="whole">
            <Row>
                <Col className="mm">
                    <Link to="baby-products">
                        <span className="fa-solid fa-baby-carriage"></span>
                        BabyProducts
                        <span className="right-arrow fa-solid fa-caret-right"></span>
                    </Link>
                </Col>
                <div className="hover-menu">
                    <div className="hover-menu-flex" >
                        <Col className="column" lg='4'>
                            <ul>
                                <div>DIAPERING</div>
                                {Categories.BabyProducts[0].DIAPERS?.map((item) => {
                                    return (
                                        <li><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                            <ul>
                                <div>BABY FEEDING</div>
                                {Categories.BabyProducts[0].BABY_FEEDING?.map((item) => {
                                    return (
                                        <li><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col className="column" lg='4'>
                            <ul>
                                <div>BATHING & SKIN CARE</div>
                                {Categories.BabyProducts[0].BATHING_AND_SKIN_CARE?.map((item) => {
                                    return (
                                        <li><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                            <ul>
                                <div>BABY SAFETY</div>
                                {Categories.BabyProducts[0].BABY_SAFETY?.map((item) => {
                                    return (
                                        <li><Link to={item.to}>{item.title}</Link></li>
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
export default BabyProducts;