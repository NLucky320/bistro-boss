import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
      const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
 if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
        }
        
           // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
        }
        
    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    }
    
    return (
        <form onSubmit={handleSubmit}>
          <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
            <div className='flex justify-center pt-4'>
                   <button type="submit" className='btn btn-sm px-20 items-center bg-[#570DF8] text-center text-white' disabled={!stripe}>
        Pay
      </button>
   </div>
       </form>
    );
};

export default CheckoutForm;