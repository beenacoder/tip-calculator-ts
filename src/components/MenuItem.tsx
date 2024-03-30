import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addOrder : (item: MenuItem) => void //pasamos por props una funcion
}

export default function MenuItem({item, addOrder} : MenuItemProps) {
  return (
    <button 
        className="border-2 border-green-400 hover:bg-green-400 w-full p-3 flex justify-between rounded-lg"
        onClick={() => addOrder(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
