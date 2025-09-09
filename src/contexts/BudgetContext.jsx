import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budgetMode, setBudgetMode] = useState(false);

  const onBudgetMode = () => setBudgetMode(true);
  const offBudgetMode = () => setBudgetMode(false);

  return (
    <FavoriteContext.Provider value={{ budgetMode, onBudgetMode, offBudgetMode }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useBudget = () => useContext(FavoriteContext);
