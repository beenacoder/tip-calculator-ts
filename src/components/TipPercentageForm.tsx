import type { Dispatch, SetStateAction } from "react"

type TipPercentageProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number,
}

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

export default function TipPercentageForm({setTip, tip}: TipPercentageProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form>
                {tipOptions.map(tipOpt => (
                    <div key = {tipOpt.id} className="flex gap-2">
                        <label htmlFor={tipOpt.id}>{tipOpt.label}</label>
                        <input
                            type="radio" 
                            id={tipOpt.id}
                            name="tip"
                            value={tipOpt.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOpt.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
