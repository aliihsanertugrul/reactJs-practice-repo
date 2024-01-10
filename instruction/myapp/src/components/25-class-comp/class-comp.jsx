import { Component } from "react";

class ClassComp extends Component {
	constructor(props) {
		// props buradan componente gelir
		super(props);

		this.state = {
			message: "Hello Class Component",
			counter: 5,
		};
	}

    componentDidMount(){
        console.log("Burası ilk render da çalışır");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component re-render olduğunda çalışır")

        if(prevState.message !== this.state.message){
            console.log("Message state değiştiği zaman çalışır")
        }


    }

    componentWillUnmount(){
        console.log("Component hafızadan atılmadan hemen önce çalışır.")
    }

	render() {
		return (
			<div>
				<h2>{this.state.message} {this.state.counter}</h2>

				<button
					onClick={() => this.setState({ message: "Hello World" })}
				>
					Set Message
				</button>
			</div>
		);
	}
}

export default ClassComp;
