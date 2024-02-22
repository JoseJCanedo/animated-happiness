import React, {Component} from "react";
import ReactDom from "react-dom";
import AppContainer from "./containers/AppContainer"

export class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            object: "Ball",
            count: 0
        }
    }

    render(){
//        const object ="Ball"
        const {object, count} = this.state
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <AppContainer
                name="Jose"
                color="Green"
                object={object}
                count={count}
                increment={increment}
            />
        )
    }
}

ReactDom.render(<App />, document.querySelector("#app"));

// props -> passed down from parent
// state -> owned by the component
// prop and state changes in component trigger updates to the DOM
//
    // lifecycle methods ->

//    componentDidMount(){
//      example functions
//    }
//        componentDidMount = runs once when the component loads into DOM
//                API calls, setState
//        componentDidUpdate = runs at every props or state change
//                prevProps and prevState and compare to current
//        componentWillUnmount = runs once when the component is going to be removed from DOM
//                cleanUp of subscriptions (Listeners)
//        shouldComponentUpdate = runs at every props or state change
//                defaults to true
//                if return false component will not update