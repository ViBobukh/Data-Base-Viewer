import React from "react";

import "./CartHolderPreview.css";
import CartHolderPreviewItem from "./CartHolderPreviewItem";

function CartHolderPreview({ id, customer, createFavourite, language }) {
  return (
    <CartHolderPreviewItem id={id}>
      <div className="cart_holder_preview-header">
        <img
          className="cart_holder_preview-avatar"
          src={`/public/${customer.image}.svg`}
          alt="avatar"
        />
        <p className="cart_holder_preview-name">{customer.name}</p>
        <input
          type="checkbox"
          className="cart_holder_preview-input"
          onChange={(event) => {
            return createFavourite(event.target.checked, customer.id);
          }}
          checked={customer.favourite}
        />
      </div>
      <p className="cart_holder_preview-age">{`${language.AGE} : ${customer.age}`}</p>
      <p className="cart_holder_preview-phone_number">{`${language.PHONE} : ${customer.phone}`}</p>
      <p className="cart_holder_preview-phrase">{customer.phrase}</p>
    </CartHolderPreviewItem>
  );
}

export default CartHolderPreview;
