import React from 'react';

const Trade = (props: any) => {

  const pretifyDate = (dateAsISOString: string) => {
    const date = new Date(dateAsISOString);
    return date.toLocaleString();
  }
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
            {pretifyDate(props.item.date)}
          </div>
        </div>

        <div className="center-text">
          <div className="bold-text" >
            Balance After Trade
          </div>
          <div className="balance">
            {props?.item?.balance?.amountInUsdt || '-'}
          </div>
        </div>
      </div>
    </>
  );
}

export default Trade;