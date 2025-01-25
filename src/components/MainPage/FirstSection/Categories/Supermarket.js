import { Col, Row } from "react-bootstrap";
import './Categories.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SecondPage from "../../../SecondPage/SecondPage";
import { Categories } from "../../../../Data/data";

const Supermarket = () => {
    return (
        <div>
            <Row>
                <Col className="mm">
                    <Link to="groceries" >
                        <span className="fa-solid fa-apple-whole"></span>
                        Supermarket
                        <span className="right-arrow fa-solid fa-caret-right"></span>
                    </Link>
                </Col>
                <div className="hover-menu">
                    <div className="hover-menu-flex" >
                        <Col className="column" lg='5'>
                            <ul>
                                <div > HOUSEHOLD SUPPLIES </div>
                                {Categories.supermarket[0].HOUSEHOLD_SUPPLIES?.map((item) => {
                                    return (
                                        <li><Link to={item.to}> {item.title}</Link></li>
                                    )
                                })}
                            </ul>
                            <ul>
                                <div>LAUNDRY</div>
                                {Categories.supermarket[1].LAUNDRY?.map((item) => {
                                    return (
                                        <li><Link to={item.to}> {item.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col className="column" lg='5'>
                            <ul>
                                <div>HOUSEHOLD CLEANING</div>
                                {Categories.supermarket[2].HOUSEHOLD_CLEANING?.map((item) => {
                                    return (
                                        <li><Link to={item.to}> {item.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </Col>
                        {/* <Col lg='4'>
                            <ul>
                            <li>aaaaaaaaaaaa</li>
                            <li>aaaaaaaaaaaa</li>
                            <li>aaaaaaaaaaaa</li>
                            <li>aaaaaaaaaaaa</li>
                            <li>aaaaaaaaaaaa</li>
                                <li>aaaaaaaaaaaa</li>
                                </ul>
                                </Col> */}
                    </div>
                </div>
            </Row>
        </div>
    )


}
export default Supermarket;