import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { ImMinus, ImPlus } from "react-icons/im";
import { MdLockReset } from "react-icons/md";

const Counter = () => {

    const [counter, setCounter] = useState(0);

	const handleClick = (mode) => {
        if(mode === "minus"){
            // setCounter(counter-1);
            // Aynı anda hem setter, hem de getter kullanılması tavsiye edilmez
            // React bu noktada state in değişimini garanti etmiyor.
            // Tavsiye edilen:

            setCounter(prev => prev - 1);


        }
        else if(mode === "plus"){
            //setCounter(counter+1);

            setCounter(prev => prev + 1);
        }
        else{
            setCounter(0);
        }
        console.log(counter)
    };

	return (
		<div className="text-center m-5">
			<ButtonGroup aria-label="Basic example">
				<Button variant="info" onClick={() => handleClick("minus")}>
					<ImMinus />
				</Button>
				<Button variant="secondary" disabled>
					{counter}
				</Button>
				<Button variant="warning" onClick={() => handleClick("plus")}>
					<ImPlus />
				</Button>
				<Button variant="danger" onClick={() => handleClick("reset")}>
					<MdLockReset />
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default Counter;
