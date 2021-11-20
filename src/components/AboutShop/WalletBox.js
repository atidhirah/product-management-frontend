import React from "react";

const WalletBox = (currency, money) => {
  return (
    <div className="wallet-box">
      <div className="wallet-currency">{currency}</div>
      <div className="wallet-money">{money}</div>
    </div>
  );
};

export default WalletBox;
