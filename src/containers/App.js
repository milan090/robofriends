import React, { Fragment, Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});

    }

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            
            <Fragment>
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        {
                            (robots.length===0) ? <h1>Loading...</h1> : <CardList robots={filteredRobots}/>
                        }
                    </Scroll>
                </div>
            </Fragment>
        )
    }
};

export default App;