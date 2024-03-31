import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    submitOrder: () => void

}



export default function OrderTotals({order, tip, submitOrder}: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);
    return (
        <>
            <div className="space-y-3">
                <h2 className=" font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar:{' - '}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina:{' - '}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a pagar:{' - '}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>

                <button 
                    className="w-full bg-purple-900 p-3 uppercae text-white font-bold mt-10 hover:bg-purple-950 disabled:opacity-10"
                    disabled = {totalAmount === 0}
                    onClick={submitOrder}
                >
                    
                    Guardar pedido
                </button>
            </div>
        </>
    )
}
