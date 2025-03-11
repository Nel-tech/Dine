import CategoriesManagement from "./Components/Categories/Categories-mangement"
import DashBoardOverview from "./Components/Dashboard/DashBoardOverview"
import FoodManagement from "./Components/Food/Food-Mangement"
import OrderManagement from "./Components/Orders/Orders-mangement"
import PaymentManagement from "./Components/Payments/Payments-mangement"

function DashBoard() {
  return (
    <div>
        <CategoriesManagement/>
        <DashBoardOverview/>
        <FoodManagement/>
        <OrderManagement/>
        <PaymentManagement/>
        </div>
  )
}

export default DashBoard