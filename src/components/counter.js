import React from "react";

/*

class Counter extends React.component{
    componentDidMount() {
        console.log("componentDidMount Runs");
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.number !== this.props.number) {
            console.log("componentDidUpdate Runs");
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount Runs");
    }

    render() {
        return <h1>{this.props.number} times</h1>;
    }
}

*/


function counter({number}) {
    useEffect(() => {
        console.log("Component is updated");
        return () => {
            console.log("This is unmounted");
        }
    }, [number]);

    return <h1>{number} times</h1>;
}


export default Counter;