import React from 'react';

function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Payment Method:
          <select>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
