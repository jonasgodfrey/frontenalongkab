import React, { Component } from 'react'

export default class Apitest2 extends Component {
    constructor(props){
        super(props);
        this.state ={
            items: [],
            isLoaded: false,

        }
    }
    componentDidMount(){
        fetch('https://jsonplacehodler.typicode.com/users')
                .then(res => res.json())
                .then(json =>{
                    this.setState({
                        isLoaded: true,
                        items:json,
                    })
                });

    }
    render() {
        var { isLoaded, items } = this.state;
        if(!isLoaded){
          return <div>Loading...</div>;
        }

        else{
        return (
        <div>
            <ul>
            {items.map(item =>(
                <li key={item.id}>
                   Name:  {item.name} | {item.email}
                </li>
            ))};
            </ul>
        </div>
        );
        
        }
    }
}
