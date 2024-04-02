import axios from "axios";
import { useState } from "react";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";



const CheckoutForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentIsDone, setPaymentIsDone] = useState(false);

  const stripe = useStripe();

  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (elements == null) {
        return;
      }

      const { error: submitError } = await elements.submit();

      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }

      const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/v2/payment");
      const clientSecret = response.data.client_secret;

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements: elements,
        clientSecret: clientSecret,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
        redirect: "if_required",
      });

      console.log(paymentIntent);

      if (error) {
        setErrorMessage(error.message);
      }

      if (paymentIntent.status === "succeeded") {
        setPaymentIsDone(true);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return paymentIsDone ? (
    <p>Merci pour votre achat</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button style={{marginLeft:'190px',marginTop:'30px',color:'white',background:'#2eb0ba'}} type="submit" disabled={!stripe || !elements || isLoading}>
        Pay
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default CheckoutForm;
