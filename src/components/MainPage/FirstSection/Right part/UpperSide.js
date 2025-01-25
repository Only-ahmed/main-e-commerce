import img1 from '../../../../Data/images/right part/5.png'
import img2 from '../../../../Data/images/right part/1 (2).png'
import img3 from '../../../../Data/images/right part/4.png'
import './Rightpart.css'

const UpperSide = () => {
    return (
        <div className='upperpart'>
            <div className='upperpart-inside'>
                <div className='single-div'>
                    <img src={img1} alt='Sell on JUMIA' width={'40'} height={'40'} />
                    <div>
                        <div>Sell on JUMIA</div>
                        <div>And Grow Your Business</div>
                    </div>
                </div>
                <div className='single-div'>
                    <img src={img2} alt='installments' width={'40'} height={'40'} />
                    <div>
                        <div>installments</div>
                        <div>With your Bank</div>
                    </div>
                </div>
                <div className='single-div'>
                    <img src={img3} alt='Warranty' width={'40'} height={'40'} />
                    <div>
                        <div>Warranty</div>
                        <div>on your Purchases</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpperSide;