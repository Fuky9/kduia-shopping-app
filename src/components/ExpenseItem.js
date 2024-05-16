import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaTimesCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
  const { dispatch, Location } = useContext(AppContext);

  const handleDeleteItem = () => {
    const item = { name: props.name };

    dispatch({ type: "DELETE_ITEM", payload: item });
  };

  const itemsPrice = () => {
    return props.quantity * props.unitprice;
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {Location}
        {props.quantity}
      </td>
      <td>
        {Location}
        {props.unitprice}
      </td>
      <td>{itemsPrice}</td>
      <td>
        <FaTimesCircle
          size="2.2em"
          color="red"
          onClick={handleDeleteItem}
        ></FaTimesCircle>
      </td>
    </tr>
  );
};

export default ExpenseItem;
