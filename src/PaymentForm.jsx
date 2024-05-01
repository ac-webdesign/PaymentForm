
import React, {useState} from "react"
import "./PaymentForm.css"
function PaymentForm(){
    const [name, setName]= useState("");
    const [address,setAddress]=useState("");
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState("");
    const [shipping,setShipping]=useState("Delivery");
    const [showCardForm, setShowCardForm] = useState(false);
    const [showCompleteForm,setShowCompleteForm]=useState(false);
    function nameChange(event){
        setName(event.target.value);
    }

    const addressChange = (e)=>{
        setAddress(e.target.value);  
    }

    const commentChange = (e)=> {
        setComment(e.target.value)
    }

    function paymentChange(event){
        setPayment(event.target.value)
    }
    const shippingChange = (e) => {
        setShipping(e.target.value);
    }

    const handleProceed = () => {
        setShowCardForm(true);
    };
    const handleComplete = () => {
        setShowCompleteForm(true);
    };
    return(
        !showCardForm  && !showCompleteForm ? (
        <div className="paymentForm">
            <div className="paymentState">
                <p className="infoIcon" style={{opacity:1}}>🧑</p>
                <p className="paymentIcon">💵</p>
                <p>✅</p>
            </div>
            <div className="inputSection">
                <h1>Enter your info</h1>
                <input value={name} required type="text" onChange={nameChange} placeholder="Full Name"/>
                
                <input value={address} required type="text"  onChange={(e)=>addressChange(e)} placeholder="Shipping Address"/>
                <textarea value={comment} onChange={(e)=>commentChange(e)} placeholder="Shipping instructions"></textarea>
                <div>
                    <input type="radio" value="Pick up"
                                        checked={shipping==="Pick up"}
                                        onChange={shippingChange}/>Pick up
                    <input type="radio" value="Delivery"
                                        checked={shipping==="Delivery"}
                                        onChange={shippingChange}/>Delivery
                </div>
                <select onChange={paymentChange} value={payment}>
                    <option value="">Select your payment</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Cash">Cash</option>
                </select>
                
            </div>

            <div className="detailSection">
                <h1>Payment information</h1>

                <div className="detailInfo">
                    <p><b>Name: </b><span>{name}</span></p>
                    <p><b>Shipping address:</b> <span>{address}</span></p>
                    <p><b>Comments : </b><span>{comment}</span></p>
                    <p><b>Selected payment: </b><span>{payment}</span></p>
                    <p><b>Shipping method: </b><span>{shipping}</span></p>
                    <h3>Total Cost : 48&euro;</h3>
                </div>

                <button type="submit" onClick={handleProceed} className="cardDetailsButton">Confirm and Proceed to card details</button>

            </div>
        </div>) : showCardForm  && !showCompleteForm ? (
        
        <div className="cardForm">
            <h1 className="completePaymentH1">Complete your payment</h1>
            <div className="paymentState">
                <p className="infoIcon" style={{opacity:0.2}}>🧑</p>
                <p className="paymentIcon" style={{opacity:1}}>💵</p>
                <p>✅</p>
            </div>
            <div className="cardSection">
                
                <div className="cardImage"></div>
                
            </div>

            <div className="cardInput">
            <h3>Please enter your card details</h3>
                <input required type="text"  placeholder="Card Number"/>
                <input  required type="text" placeholder="Name on the card"/>
                <div>
                    <input required type="text" placeholder="MM/YY" style={{width:"210px"}}/>
                    <input required type="text" placeholder="CVC" style={{width:"100px", marginLeft:"10px"}}></input>
                </div>
                <div className="cardImage2" style={{width:"340px"}}></div>
            </div>
            <button type="submit" onClick={handleComplete} className="completePaymentButton">Complete</button>

        </div>) :

            <div className="completeForm">
                <div className="paymentState">
                <p className="infoIcon" >🧑</p>
                <p className="paymentIcon">💵</p>
                <p style={{opacity:1}}>✅</p>
            </div>
            <div className="completeMessage">
                <h2>👍</h2>
                <h1>Thank you for your purchase</h1>
                <button type="submit" className="completePaymentButton">Continue shopping</button>

            </div>2
        </div>

    );

}
export default PaymentForm