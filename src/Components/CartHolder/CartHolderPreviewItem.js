import React from "react";

function CartHolderPreviewItem({ children, id }) {
  let delay = 0.2;

  return (
    <div
      className="cart_holder_preview-customer"
      style={{ animationDelay: id * delay + "s" }}
    >
      {children}
    </div>
  );
}

export default CartHolderPreviewItem;
