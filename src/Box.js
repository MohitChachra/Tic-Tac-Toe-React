import React from 'react';
import './Box.css';
class Box extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(){
        const[row,col] = this.props.id.split('-');
        this.props.updateBoard(row,col);
    }
    render(){
        return(
        <div onClick={this.handleClick} className='box'>{this.props.value}</div>
        )
    }
}
export default Box