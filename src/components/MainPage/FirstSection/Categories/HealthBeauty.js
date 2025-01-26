import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Categories } from "../../../../Data/data";

const HealthBeauty = () => {
    return (
        <div>
            <Row>
                <Col className="mm">
                    <Link to="health-beauty">
                        <span className="fa-solid fa-eye-dropper"></span>
                        HealthBeauty
                        <span className="right-arrow fa-solid fa-caret-right"></span>
                    </Link>
                </Col>
                <div className="hover-menu">
                    <div className="hover-menu-flex" >
                        <Col className="column" lg='4'>
                            <ul>
                                <div>PERSONAL CARE</div>
                                {Categories.HealthBeauty[0].PERSONAL_CARE?.map((item,key) => {
                                    return (
                                        <li key={key}><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                            <ul>
                                <div>SKIN CARE</div>
                                {Categories.HealthBeauty[0].SKIN_CARE?.map((item,key) => {
                                    return (
                                        <li key={key}><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col className="column" lg='4'>
                            <ul>
                                <div>HAIR CARE</div>
                                {Categories.HealthBeauty[0].HAIR_CARE?.map((item,key) => {
                                    return (
                                        <li key={key}><Link to={item.to}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                            <ul>
                                <div>HEALTH CARE</div>
                                {Categories.HealthBeauty[0].HEALTH_CARE?.map((item,key) => {
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
export default HealthBeauty;