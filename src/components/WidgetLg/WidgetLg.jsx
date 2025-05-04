import React from "react";
import "./WidgetLg.css";
import { transactions } from "../../data";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"WidgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="WidgetLg">
      <h3 className="WidgetLgTitle">Latest TransActions</h3>
      <table className="WidgetLgTable">
        <thead>
          <tr className="WidgetLgTr">
            <th className="WidgetLgTh">Customer</th>
            <th className="WidgetLgTh">Date</th>
            <th className="WidgetLgTh">Amout</th>
            <th className="WidgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="WidgetLgTr">
              <td className="WidgetLgUser">
                <img src={transaction.img} className="WidgetLgImg" />
                <span className="WidgetLgName">{transaction.customer}</span>
              </td>
              <td className="WidgetLgDate">{transaction.date}</td>

              <td className="WidgetLgAmount">${transaction.amount}</td>

              <td className="WidgetLgStatus">
                <Button type={transaction.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
