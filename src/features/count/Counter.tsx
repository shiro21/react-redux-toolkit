import styles from "./Counter.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { CounterProps } from "../../api/interface";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { ChangeEvent, useState } from "react";

export const Counter = () => {
    
    const count = useSelector((state: CounterProps) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState<number>(0);

    const addValue = Number(incrementAmount);

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section className={styles.counter_wrap}>
            <div className={styles.count_wrap}>{count}</div>

            <div className={styles.count_button_wrap}>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input type="number" value={incrementAmount} onChange={(e: ChangeEvent<HTMLInputElement>) => setIncrementAmount(Number(e.target.value))} />

            <div className={styles.count_button_wrap}>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>ADD Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    );
}