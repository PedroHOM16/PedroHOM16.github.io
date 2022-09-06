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
      <section>
        <div className="flex mt-4 ml-5">
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
        </div>
        <button
          className="text-4xl text-lime-300 hover:text-red-800 ml-1"
          onClick={ this.handleColorChange }
        >maisCores&#187;</button>
      </section>
    )
  }
}