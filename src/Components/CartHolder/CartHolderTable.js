import React from "react";
import shortid from "shortid";
import { connect } from "react-redux";

import { createFavourite } from "../../Action/actions";
import "./CartHolderTable.css";

function CartHolderTable({ allCustomer, createFavourite }) {
  let delay = 0.1;
  return (
    <div className="cart_holder_table">
      {allCustomer.map((customer, index) => {
        return (
          <div
            key={shortid.generate()}
            className="cart_holder_table-customer"
            style={{ animationDelay: index * delay + "s" }}
          >
            <img
              className="cart_holder_preview-avatar"
              src={`/public/${customer.image}.svg`}
              alt="avatar"
            />
            <p className="cart_holder_table-name">{customer.name}</p>
            <p className="cart_holder_table-age">{customer.age}</p>
            <p className="cart_holder_table-phone_number">{customer.phone}</p>
            <input
              type="checkbox"
              onChange={(event) => {
                return createFavourite(event.target.checked, customer.id);
              }}
              checked={customer.favourite}
            />
          </div>
        );
      })}
    </div>
  );
}

const mapDispatchToProps = {
  createFavourite,
};

export default connect(null, mapDispatchToProps)(CartHolderTable);
