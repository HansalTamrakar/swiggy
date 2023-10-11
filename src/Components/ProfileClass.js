// import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
class Profile extends React.Component {
    constructor(props) {
        super(props)
        //create State
        this.state = {
            count: 0,
            count2: 0,
            count3: 0,
        };

    }
    componentDidMount() {//After First Render
        this.timer = setInterval(() => {
            console.log("namsate Bharat")
        }, 1000)
        console.log("hansl")
    }
    componentDidUpdate() {//After Each Render
        console.log("Hello Jee")
    }
    componentWillUnmount() {//After you go to another page Always do 
        clearInterval(this.timer)
        console.log("Component will Unmount")
    }
    render() {
        const { count } = this.state;
        return (<div><h1>Profile Class Compo</h1>
            <h2>{this.props.name}</h2>
            <h2>{count}</h2>
            <button onClick={() => {
                this.setState({
                    count: 1,
                    count2: 3,
                })
            }}>Start</button></div>
        )
    }
}
export default Profile;