import React from 'react';

const History = (props: any) => {
  return (
    <div className="history-container">
      <div className="history-element">
        Daily: -2 ${/* {props.dayly} */}
      </div>
      <div className="history-element">
        Weekly: +10 ${/* {props.weekly} */}
      </div>
      <div className="history-element">
        Monthly: +4 ${/* {props.monthly} */}
      </div>
    </div>
  );
}

export default History;