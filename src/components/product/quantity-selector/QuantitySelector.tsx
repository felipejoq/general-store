'use client';

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {

    const [count, setCount] = useState(quantity);

    const onQuantityChanged = (value: number) => {
        if(count + value < 1) return;
        setCount(count + value);
    }

    return (
        <div className="my-5">
            <div className="flex items-center">
                <button
                    onClick={() => onQuantityChanged(-1)}
                    className="cursor-pointer"
                >
                    <IoRemoveCircleOutline size={30} />
                </button>
                <span className="w-20 mx-3 px-5 py-1 bg-gray-200 text-center rounded">
                    {count}
                </span>
                <button
                    onClick={() => onQuantityChanged(1)}
                    className="cursor-pointer"
                >
                    <IoAddCircleOutline size={30} />
                </button>
            </div>
        </div>
    )
}
