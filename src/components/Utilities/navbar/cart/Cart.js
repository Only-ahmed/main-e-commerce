import { useCart } from "react-use-cart";
import './cart.css'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        // totalItems,
        cartTotal,
    } = useCart();
    // console.log(cartTotal)
    if (isEmpty) return <h1 className="empty">Your cart is empty</h1>;
    return (
        <>
            <div className="whole-cart-page">
                <div className="left-section">
                    <h4 className="cart-title">Cart ({totalUniqueItems})</h4>
                    {items.map((item) => (
                        <div className="whole-left-sec" key={item.id}>
                            <div className="upper-part">
                                <div className="left-side">
                                    <img width={'90px'} src={item.src} alt="Product img" />
                                    <div className="container1">
                                        <div className="itemTitle">{item.name}</div>
                                        <div>few units left</div>
                                        <div className="express express2">jumia <span>express</span></div>
                                    </div>
                                </div>
                                <div className="right-side1">
                                    <div className="itemPrice">EGP {item.price}</div>
                                    <div className="itemOldprice">EGP {item.oldprice}</div>
                                </div>
                            </div>
                            <div className="lower-part">
                                <div className="left-side">
                                    {/* <button className="remove" onClick={() => removeItem(item.id)}>&times;</button> */}
                                    <div className="remove" onClick={() => removeItem(item.id)}>Remove</div>
                                </div>
                                <div className="cart-right-side">
                                    {/* {item.quantity} x {item.name} &mdash; */}
                                    {/* <div>{Number(item.quantity) * Number(item.price.slice(4))} </div> */}
                                    {/* <div>{Number(item.quantity) * Number(item.price)} </div> */}
                                    <button className="plus-minus" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}> - </button>
                                    <div className="quantity">{item.quantity}</div>
                                    <button className="plus-minus" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}> + </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="right-section">
                    <div className="checkout-title">CART SUMMARY</div>
                    <div className="cart-subtotal">
                        <div className="sub">Subtotal</div>
                        <div className="num">EGP {cartTotal}</div>
                    </div>
                    <div className="missing">Missing EGP 130.00 to reach free delivery </div>
                    <div className="express">jumia <span>express</span></div>
                    <div className="checkoutbtn">
                        <button >CHECKOUT (EGP {cartTotal})</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cart;
