import React from "react";

function Card(props) {
  return props.book.map((item) => {
    let thumbnail =
      item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
    if (thumbnail !== undefined && amount !== undefined) {
      return (
        <div className="Card">
          <img src={thumbnail} alt="" />
          <div className="bookInfo">
            <h3 className="title">{item.volumeInfo.title}</h3>
            <p className="amount">{amount}</p>
          </div>
          <a
            href={item.volumeInfo.previewLink}
            target="_blank"
            rel="noreferrer"
          >
            <button>More</button>
          </a>
        </div>
      );
    }
  });
}

export default Card;
