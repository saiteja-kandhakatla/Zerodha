import React, { useContext, useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckIcon from "@mui/icons-material/Check";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <ul className="list">
        {watchlist.map((stock) => (
          <WatchListItem key={stock.name} stock={stock} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span>{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          <span>{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <Tooltip title="Buy" arrow slots={{ transition: Grow }}>
        <button className="buy" onClick={() => openBuyWindow(uid)}>
          <ShoppingCartIcon />
        </button>
      </Tooltip>

      <Tooltip title="Sell" arrow slots={{ transition: Grow }}>
        <button className="sell">
          <CheckIcon />
        </button>
      </Tooltip>

      <Tooltip title="Analytics" arrow slots={{ transition: Grow }}>
        <button>
          <BarChartIcon />
        </button>
      </Tooltip>

      <Tooltip title="More" arrow slots={{ transition: Grow }}>
        <button>
          <MoreHorizIcon />
        </button>
      </Tooltip>
    </span>
  );
};
