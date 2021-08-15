const CurrentBalance = (props: any) => {
  return (
    <div className="current-balance-container" >
      <div className="current-balance-element">
        Current Balance:
      </div>
      <div className="current-balance-element bold-text">
        42 $
        {/* {props.amountInUsdt} */}
      </div>
    </div >
  );
}

export default CurrentBalance;