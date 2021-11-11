import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { BiRefresh } from "react-icons/bi";
import { SiEspressif } from "react-icons/si";
import "./counter.css";

const CounterFile = () => {
  const counterArray = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [totalCount, settotalCount] = useState(0);
  const filteredArray = () => counterArray?.filter((item) => item.value > 0);

  return (
    <div className="header">
      <div className="second-div">
        <span className="icon-ant">
          <ShoppingCartOutlined />
        </span>
        <span className="count">{filteredArray().length}</span>
        <span className="middle">items</span>
      </div>
      <div className="reset-btn">
        <button
          className="refresh-btn"
          onClick={() => {
            settotalCount(0);
            dispatch({ type: "REFRESH" });
          }}
        >
          <BiRefresh></BiRefresh>
        </button>
        <button
          className="reset-icon"
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          <SiEspressif></SiEspressif>
        </button>
        <button
          className="header-add-button"
          onClick={() => dispatch({ type: "ADD_COUNTER" })}
        >
          +
        </button>
      </div>
      {counterArray.map((item, index) => {
        return (
          <div className="end">
            <button className="couter-number">
              {/* {counter[0].value || "Zero"} */}
              {item.value === 0 ? "Zero" : item.value}
            </button>
            <button
              className="add"
              onClick={() => dispatch({ type: "INCREMENT", payload: index })}
            >
              +
            </button>
            <button
              className="subtract"
              onClick={() => dispatch({ type: "DECREMENT", payload: index })}
            >
              -
            </button>
            <button
              className="delete-icon"
              onClick={() => dispatch({ type: "DELETE", payload: index })}
            >
              <DeleteOutlined />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CounterFile;
