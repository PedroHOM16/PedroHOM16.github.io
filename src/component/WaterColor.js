import React, { Component } from 'react';
import '../style/WaterColor.css'
import { BsShuffle } from "react-icons/bs";

export default class WaterColor extends Component {
  constructor() {
    super();
    this.state = {
      bxColor1: "",
      bxColor2: "",
      bxColor3: "",
      bxColor4: "",
      bxColor5: "",
    }
  }

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random //
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    this.setState({
      bxColor1: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
      bxColor2: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
      bxColor3: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
      bxColor4: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
      bxColor5: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
    })
  }
  
  handleColor = ({ target }) => {
    const caixas = target.parentNode.querySelectorAll(".box");
    console.log(caixas[0], target);
    for (let i = 0; i < caixas.length; i += 1) {
      caixas[i] === target
      ? caixas[i].className = 'box w selected'
      : caixas[i].className = 'box w'
    };
  }
  
  handleColorChange = () => {
    this.setState({
      bxColor1: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
      bxColor2: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
      bxColor3: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
      bxColor4: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
      bxColor5: `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`,
    })
  }
  
  render() {
    const { bxColor1, bxColor2, bxColor3, bxColor4, bxColor5 } = this.state;
    console.log( "cor", bxColor1);
    return (
      <section className='my-auto'>
        <div className="flex items-center ml-8 mt-5 bg-yellow-700 hover:border-sky-200 h-12 w-36 p-2 border-2 border-gray-100">
          <div
            className="box w"
            onClick={ this.handleColor }
            style={{backgroundColor: `rgb(${bxColor1})`}}
          />
           <div
            className="box w"
            onClick={ this.handleColor }
            style={{backgroundColor: `rgb(${bxColor2})`}}
            />
           <div
            className="box w"
            onClick={ this.handleColor }
            style={{backgroundColor: `rgb(${bxColor3})`}}
          />
           <div
            className="box w"
            onClick={ this.handleColor }
            style={{backgroundColor: `rgb(${bxColor4})`}}
          />
           <div
            className="box w"
            onClick={ this.handleColor }
            style={{backgroundColor: `rgb(${bxColor5})`}}
          />      
          <button
            className="text-2xl ml-2 "
            onClick={ this.handleColorChange }
          >&#127922;</button>
        </div>
        
      </section>
      // // 127922
    )
  }
}