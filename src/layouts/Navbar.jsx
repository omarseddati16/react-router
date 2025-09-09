import { useBudget } from "../contexts/BudgetContext";

function Navbar() {
  const { budgetMode, onBudgetMode, offBudgetMode } = useBudget();

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={budgetMode ? offBudgetMode : onBudgetMode}
      >
        {budgetMode ? "Disattiva Modalità Budget" : " Attiva Modalità Budget"}
      </button>
    </div>
  )
}

export default Navbar
