import React, { Component} from 'react'
import Cardslist from '../Components/Cardslist'
import { robots } from '../robots.js'
import Input from '../Components/Input.js'
import './Apps.css'
import Scroll from '../Components/Scroll.js'



class Apps extends Component {
    constructor() {
        super ()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        }) 
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1 className="tc">Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <Input searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <Cardslist robots={filteredRobots}/> 
                    </Scroll>
                </div>  
            )    
    }   
}



export default Apps