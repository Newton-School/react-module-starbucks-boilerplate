import React, { useState } from "react";
import { BASE_DRINKS } from "./BaseDrinks";

function OrderForm({ onSubmit }) {
    const [drinkId, setDrinkId] = useState(BASE_DRINKS[0].id);

    const handleSubmit = (event) => {

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Drink:
                    <select value={drinkId} >
                        <option >
                        </option>
                    </select>
                </label>
            </div>
            <div >
                <label>
                    <select

                    >
                        <option value="">--Select--</option>
                        <option >

                        </option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Name:
                    <input type="text" />
                </label>
            </div>
            <div>
                <button type="submit">Place Order</button>
            </div>
        </form>
    );
}

export default OrderForm;