import React from "react";

import "./CartHolderPreviewVideo.css";
import CartHolderPreview from "./CartHolderPreview";
import CartHolderPreviewItem from "./CartHolderPreviewItem";

function CartHolderPreviewVideo({ customer, createFavourite, language, id }) {
  return (
    <div className="cart_holder_preview_video">
      <CartHolderPreview
        language={language}
        createFavourite={createFavourite}
        customer={customer}
      />
      <CartHolderPreviewItem id={id}>
        <video className="cart_holder_preview_video-video" controls>
          <source type={"video/mp4"} src={`/public/${customer.video}.mp4`} />
        </video>
      </CartHolderPreviewItem>
    </div>
  );
}

export default CartHolderPreviewVideo;
