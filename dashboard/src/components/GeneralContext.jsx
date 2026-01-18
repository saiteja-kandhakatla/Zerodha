import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState(null);

  const openBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID(null);
  };

  return (
    <GeneralContext.Provider value={{ openBuyWindow, closeBuyWindow }}>
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
