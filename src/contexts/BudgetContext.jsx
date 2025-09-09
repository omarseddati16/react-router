import { createContext, useContext, useState } from "react";

const budgetContext = createContext()

const BudgetProvider = ({ children }) => {
  const [budgetMode, setBudgetMode] = useState(false)

  const onBudgetMode = () => setBudgetMode(true);

  const offBudgetMode = () => setBudgetMode(false);

  return (
    <budgetContext.Provider value={{ budgetMode, onBudgetMode, offBudgetMode }}>
      {children}
    </budgetContext.Provider>
  );
};

export const useBudget = () => {
  return useContext(budgetContext);
};