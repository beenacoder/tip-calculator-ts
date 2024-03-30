import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/dataBase"
import useOrder from "./hooks/useOrder"

function App() {

    const {addOrder} = useOrder();

    return (
        <>
            <header className=" bg-green-400 py-5">
                <h1 className=" text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
            </header>

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
                <div>
                <h2 className="text-4xl font-black">Consumo</h2>
                </div>
            </main>

        </>
    )
}

export default App
