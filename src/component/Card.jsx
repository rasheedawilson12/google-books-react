import React from "react";

function Card(props) {
  return props.book.map((item) => {
    let thumbnail =
      item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

    return (
      <div className="Card">
        <img src={thumbnail} alt="" />
        <h3 className="title">{item.volumeInfo.title}</h3>
        <p className="amount">{amount}</p>
      </div>
    );
  });
}

export default Card;
