import React from "react";
import shortid from "shortid";
import { connect } from "react-redux";

import "./CartHolder.css";

import { createFavourite } from "../../Action/actions";
import CartHolderPreviewVideo from "./CartHolderPreviewVideo";
import CartHolderPreview from "./CartHolderPreview";

function CartHolder({ allCustomer, createFavourite, language }) {
  return (
    <div key={shortid.generate()} className="cart_holder">
      {allCustomer.map((customer, index) => {
        if (customer.video) {
          return (
            <CartHolderPreviewVideo
              key={customer.id}
              id={index}
              language={language}
              createFavourite={createFavourite}
              customer={customer}
            />
          );
        } else {
          return (
            <CartHolderPreview
              key={customer.id}
              id={index}
              language={language}
              createFavourite={createFavourite}
              customer={customer}
            />
          );
        }
      })}
      ;
    </div>
  );
}

const mapDispatchToProps = {
  createFavourite,
};

export default connect(null, mapDispatchToProps)(CartHolder);
