import { useState } from "react";

export default function CheckForm() {
   
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // console.log(...values);

        setInputs(values => ({ ...values, [name]: value }))

        // -> Taking an Old values and add to a new (It is a spread Operator)

        // setInputs({[name] : value});

        // console.log(...values);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>

            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>

            <input type="submit" />

        </form>
    )
}
