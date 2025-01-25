import Carousel from 'react-bootstrap/Carousel';
import './slider.css'
// import slider1 from '../../../../Data/images/midslider/HPSlider712x384EN.png'
import slider1 from '../../../../Data/images/midslider/712x384EN.png'
// import slider2 from '../../../../Data/images/midslider/HPSlider712x384EN (1).png'
import slider2 from '../../../../Data/images/midslider/712x384EN.jpg'
// import slider3 from '../../../../Data/images/midslider/HPSlider712x384EN (2).png'
import slider3 from '../../../../Data/images/midslider/712x384EN (1).png'
// import slider4 from '../../../../Data/images/midslider/HPSlider712x384EN (3).png'
import slider4 from '../../../../Data/images/midslider/712x384EN (1).jpg'
// import slider5 from '../../../../Data/images/midslider/HPSlider712x384EN (4).png'
import slider5 from '../../../../Data/images/midslider/712x384EN (2).jpg'
import slider6 from '../../../../Data/images/midslider/712x384EN (4).jpg'
import { Link } from 'react-router-dom';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const MidSlider = () => {
    return (
        <Carousel className='slider' slide={false}>
            <Carousel.Item>
                <Link to={'fashion'}>
                    <img src={slider1} alt='slider1' width={'730px'} height={'410px'} />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to={'phones-tablets'}>
                    <img src={slider2} alt='slider2' width={'730px'} height={'410px'} />
                    {/* <img src={slider2} alt='slider2' width={'712px'} height={'400px'} /> */}
                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to={'fashion'}>
                    <img src={slider3} alt='slider3' width={'730px'} height={'410px'} />
                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to={'health-beauty'}>
                    <img src={slider4} alt='slider4' width={'730px'} height={'410px'} />
                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
                </Link>
            </Carousel.Item>
            <Carousel.Item>
            <Link to={'search-page'}>
                <img src={slider5} alt='slider5' width={'730px'} height={'410px'} />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
                </Link>
            </Carousel.Item>
            <Carousel.Item>
            <Link to={'search-page'}>
                <img src={slider6} alt='slider5' width={'730px'} height={'410px'} />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
                </Link>
            </Carousel.Item>
        </Carousel>
    );
}

export default MidSlider;