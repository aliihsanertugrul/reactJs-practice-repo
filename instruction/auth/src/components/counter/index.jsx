import { Button, ButtonGroup } from "react-bootstrap";
import { TfiMinus, TfiPlus, TfiReload } from "react-icons/tfi";
import { useStore } from "../../store";
import {
	counterDown,
	counterReset,
	counterUp,
} from "../../store/counter/actions";

const Counter = () => {
	const { counterState, dispatchCounter } = useStore();
	const { counter } = counterState;

	return (
		<ButtonGroup>
			<Button
				variant="warning"
				onClick={() => dispatchCounter(counterDown())}
			>
				<TfiMinus />
			</Button>
			<Button variant="secondary" disabled>
				{counter}
			</Button>
			<Button
				variant="warning"
				onClick={() => dispatchCounter(counterUp())}
			>
				<TfiPlus />
			</Button>
			<Button
				variant="info"
				onClick={() => dispatchCounter(counterReset(0))}
			>
				<TfiReload />
			</Button>
		</ButtonGroup>
	);
};

export default Counter;
