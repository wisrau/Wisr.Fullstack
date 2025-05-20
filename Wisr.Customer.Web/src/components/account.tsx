import React from "react";

import "./account.css";

export const Account: React.FC<{ description: string; balance: number }> = ({
  description: name,
  balance,
}) => {
  return (
    <div className="account">
      <span className="icon">$</span>
      <span className="description">{name}</span>
      <span className="amount">${balance}</span>
    </div>
  );
};
