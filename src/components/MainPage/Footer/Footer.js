import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="first-footer">
                <div className='first-footer-insider'>
                    <div className='upper'>
                        <div>NEW ?</div>
                        <div>Subscribe to our newsletter to get updates on our latest offers!</div>
                    </div>
                    <div className='mid'>
                        <div className='mid-insider'>
                            <div >
                                <input type='text' placeholder='Enter E-mail Address' />
                            </div>
                            <div className='buttons-div'>
                                <button>MALE</button>
                                <button>FEMALE</button>
                            </div>
                        </div>
                    </div>
                    <div className='lower'>
                        <div className='inputdiv'>
                            <input type='checkbox' id='agree' />
                            <label for="agree">I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.</label>
                        </div>
                        {/* <br></br> */}
                        <div className='line'>I accept the legal terms</div>
                    </div>
                </div>
            </div>
            <div className="second-footer">
                <div className='second-footer-insider'>
                    <div className='first-column'>
                        <div className='upperlist'>
                            <div>NEED HELP?</div>
                            <ul>
                                <li>Chat with us</li>
                                <li>Help Center</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className='lowerlist'>
                            <div>USEFUL LINKS:</div>
                            <ul>
                                <li>How to shop on the site?</li>
                                <li>How to pay on the site?</li>
                                <li>Delivery timelines</li>
                                <li>Dispute Resolution Policy</li>
                                <li>Return & Refund Policy</li>
                                <li>Payment Information Guidelines</li>
                            </ul>
                        </div>
                    </div>
                    <div className='second-column'>
                        <div>
                            <div>ABOUT THE SITE</div>
                            <ul>
                                <li>Jumia Logistics Services</li>
                                <li>Jumia Careers</li>
                                <li>Terms and Conditions</li>
                                <li>Stores Credit Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Cookies Policy</li>
                                <li>Free Shipping</li>
                                <li>Flash Sales</li>
                                <li>Join the Jumia DA Academy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='third-columm'>
                        <div>
                            <div>MAKE MONEY WITH US</div>
                            <ul>
                                <li>Sell on the Site</li>
                                <li>Vendor Hub</li>
                                <li>Become a Logistics Service Partner</li>
                                <li>Become a Sales ConSuiltant</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='name'>
                <div>Created By Ahmed Hassan</div>
            </div>
        </div>
    )
}
export default Footer;