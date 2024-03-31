import {useState} from "react";
import type { MenuItem, OrderItem } from "../types";


export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);


    const addOrder = (item: MenuItem) => {

        const orderExist = order.find(orderItem => orderItem.id === item.id);

        if(orderExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} 
                : orderItem
            )
                setOrder(updateOrder);
        } else {
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem]);
        }
    }

    const removeOrder = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id));
    }
    return {
        order,
        tip,
        setTip,
        addOrder, 
        removeOrder,
    }
}