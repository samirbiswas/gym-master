import React from 'react';
import { useForm } from 'react-hook-form';
import './Checkout.css'
const Checkout = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data);

    return (
     <div className="full-page">
            <div class="row">
          <div class="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            
              <div class="row">
                <div class="col-50">
                  
                <label class="containers">
                <input type="radio" checked="checked" name="radio"/>
                <span class="checkmark"></span>
                Cradit Cart
                    </label>
                 
      
                  <div class="row">
                    <div class="col-50">
                    <label for="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                  <label for="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                  
                    </div>
                    

                  </div>
                </div>
      
                <div class="col-50">
                
                  <label for="fname">Accepted Cards</label>
                  <div class="icon-container">
                 
                  </div>
                  
                  <div class="row">
                    <div class="col-50">
                      <label for="expyear">Exp DATE</label>
                      <input type="text" id="expyear" name="expyear" placeholder="MM / YYYY"/>
                    </div>
                    <div class="col-50">
                      <label for="cvv">CVV CODE</label>
                      <input type="text" id="cvv" name="cvv" placeholder="3 digit pin"/>
                    </div>
                  </div>
                </div>
                
              </div>
              
              


              <div className='cart-name-area'>
                  <div className='description-area'>
                    <h4>Paypal</h4>
                    <small>Lorem ipsum dolor sit, amet consectetur adipisic perferendis.</small>
                  </div>
             
                    <div className='image-area'>
                        <img src="" alt=""/>
                        <h5>IMAGE</h5>
                    </div>
              </div>
              <input type="submit" value="Continue to checkout" class="btn"/>
              </form>
          </div>
        </div>
     </div>
       
      
      
    );
};

export default Checkout;