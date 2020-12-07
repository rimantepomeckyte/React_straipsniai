import React from "react";

class Article extends React.Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState =>{
            return {
                counter: prevState.counter+1
            }
        })
    }
    render(){
        return(
            <div>
                <h3>{this.props.data.title}</h3>
        <p>{this.props.data.description}</p>
        <p>Patikimai: {this.state.counter}</p>
        <a onClick={this.handleClick} href="#">Like</a>
            </div>
        )
    }
    }

export default Article;