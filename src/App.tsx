import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/dataBase"
import useOrder from "./hooks/useOrder"

function App() {

    const { order, addOrder, removeOrder, tip, setTip, submitOrder } = useOrder();

    return (
        <>
            <header className=" bg-green-400 py-5">
                <h1 className=" text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
            </header>

            {/* -------------------- MENU COLUMN ---------------------- */}
            <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-4xl font-black">Menu</h2>
                    <div className="space-y-3 mt-10">
                        {menuItems.map(item => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                addOrder={addOrder}
                            />
                        ))}
                    </div>
                </div>

                {/* -------------------- ORDER COLUMN ---------------------- */}

                <div className="border-2 border-dashed border-slate-300 p-5 rounded-lg space-y-10">
                    {order.length ? (
                        <>
                            <OrderContents
                                order={order}
                                removeOrder={removeOrder}
                            />

                            <TipPercentageForm
                                setTip={setTip}
                                tip={tip}
                            />

                            <OrderTotals
                                order={order}
                                tip={tip}
                                submitOrder={submitOrder}
                            />
                        </>
                    )
                        :
                        (
                            <p className="text-center">No hay ningún pedido</p>
                        )}
                </div>
            </main>

        </>
    )
}

export default App
