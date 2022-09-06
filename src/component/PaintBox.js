import React, { Component } from 'react';
import { squareCreator } from '../support/geometria';
import Mount from './Mount';
import WaterColor from './WaterColor';
import '../style/Default.css'
// import { GiThink } from "react-icons/gi";
// import 'animate.css';

export default class PaintBox extends Component {
  constructor() {
    super()
    this.state = {
      blockQuant: "",
      grade: [],
      disabled: true,
    }
  }

  handleValue = ({ target }) => {
    const { value } = target;
    this.setState({ blockQuant: value },  () => this.validationBtn())
  }

  handleBtn = () => {
    const { blockQuant } = this.state;
    const x = blockQuant;
    this.setState({
      grade: squareCreator(x),
      blockQuant: "",
    },);
  }

  validationBtn = () => {
    const { blockQuant } = this.state;
    const isValid = blockQuant >= 1 && blockQuant < 16;
    this.setState({
      disabled: !isValid,
    });
  }
  
  render() {
    const { blockQuant, grade, disabled } = this.state;
    console.log('grade', grade )
    return (
      <section className="header w-90">
        <form className="form">
          <h3 className="text-4xl" >De 1 a 15 ...</h3>
          <h3 className="text-xl text-sky-900 hover:text-lime-900">Qual o tamanho de sua imaginação? &#127752;</h3>
          <div className="div-square-creator">
            <input
              name="blockQuant"
              type="text"
              id="handle-quant"
              value={blockQuant}
              onChange={this.handleValue}
              className="form-control number-input text-4xl text-sky-800 text-center"
            />
            <button
              type='button'
              name='square-mount'
              onClick={this.handleBtn}
              disabled={ disabled }
              className="text-3xl"
              id="passwordHelpInline"
            >&#129521;</button>
          </div>
        </form>
        <WaterColor />
        <Mount gradeForm={ grade } className="grade"/>
      </section>
    )
  }
}
