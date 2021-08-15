import React from 'react';

const Trade = (props: any) => {
  return (
    <>
      <div className="trade" >
        {/* <div>
          {props.item.symbol}
        </div> */}
        <div className="bold-text center-text big-text">
          {props.item.side}
        </div>
        <div className="trade-info">
          <div className="trade-info-element">
            Price: {props.item.price}
          </div>
          <div className="trade-info-element">
            Amount: {props.item.quantity}
          </div>
          <div className="trade-info-element">
            {props.item.date}
          </div>
        </div>

        <div className="center-text">
          <div className="bold-text" >
            Balance After Trade
          </div>
          <div className="balance">
            38 $
            {/* props.item.amountInUsdt */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Trade;