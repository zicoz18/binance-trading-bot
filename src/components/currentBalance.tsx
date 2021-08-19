import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getCurrentBalance } from "../store/actions";

const CurrentBalance = () => {

  const balanceStore = useSelector((state: RootStateOrAny) => state.balance)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentBalance())
  }, [dispatch])


  return (
    <div className="current-balance-container" >
      <div className="current-balance-element">
        Balance: {balanceStore?.balance ? `${balanceStore.balance}$` : '-'}
      </div>
    </div >
  );
}

export default CurrentBalance;