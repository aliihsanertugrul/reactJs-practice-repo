import React, { useEffect, useState } from "react";
import "./clock3.scss";
import moment from "moment";

const Clock3 = ({ color, backgroundColor }) => {
	const [dateTime, setDateTime] = useState(moment());
	//const dateTime = moment();

	const dateStr = dateTime.format("LL");
	const dayStr = dateTime.format("dddd");
	const hour = dateTime.format("HH");
	const minute = dateTime.format("mm");
	const second = dateTime.format("ss");

	let message = "";

	if (hour >= 6 && hour < 11) {
		message = "Morning";
	} else if (hour >= 11 && hour < 14) {
		message = "Noon";
	} else if (hour >= 14 && hour < 17) {
		message = "Afternoon";
	} else if (hour >= 17 && hour < 21) {
		message = "Evening";
	} else {
		message = "Night";
	}

	const clockStyle = {
		backgroundColor,
		color,
	};

	// Burada yazılan setInterval her render da tekrar oluşarak component i logaritmik bir şekilde artan render döngüsüne sokar.
	/* const timer = setInterval( ()=>{
		setDateTime(moment());
	}, 1000)
 	*/
	// Bu render döngüsü bir yan etkidir ve kurtulmak için useEffect kullanılır.

	useEffect(() => {
		const timer = setInterval(() => {
			setDateTime(moment());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="clock-container" style={clockStyle}>
			<div className="time">
				{hour}
				<span style={{ opacity: second % 2 ? 0 : 1 }}>:</span>
				{minute}
			</div>
			<div>
				<div className="date">{dateStr}</div>
				<div className="day">
					{dayStr} {message}
				</div>
			</div>
		</div>
	);
};

export default Clock3;
