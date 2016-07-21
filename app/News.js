import React, { Component } from 'react'
import _ from "lodash"
import { sum } from './sum'

export default class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items:['苹果','葡萄']
    }
  }
  delItem(){
    this.state.items = _.dropRight(this.state.items);
    this.forceUpdate();
  }
  render(){
    return (
      <div>
        <h1>Count</h1>
        <h1 className="red">num</h1>
        <span>{sum(2,3)}</span>
        <ul>
          {this.state.items.map((item)=>{
            return (<li key={item}>{item}</li>)
          })}
        </ul>
        <button onClick={this.delItem.bind(this)}>Delete</button>
      </div>
    )
  }
}
