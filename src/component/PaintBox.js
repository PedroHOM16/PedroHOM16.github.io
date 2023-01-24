import React, { Component } from 'react';
import { squareCreator } from '../support/geometria';
import Mount from './Mount';
import WaterColor from './WaterColor';
import '../style/Default.css'
// import '../index.css'
// import PortContext from '../context/PortContext';
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
    const isValid = blockQuant >= 1 && blockQuant < 21;
    this.setState({
      disabled: !isValid,
    });
  }
  
  render() {
    const { blockQuant, grade, disabled } = this.state;
    const langLocalStorage = localStorage.getItem('language');
    // const nameLocalStorage = localStorage.getItem('clientName');
    
    return (
      <section className="flex flex-column w-full h-full flex-wrap">
        <div className='m-8'>
          <form className="flex flex-col">
            <h3 className="text-4xl text-sky-900" >{langLocalStorage === 'Port' ? 'De 1 a 20 ...' : 'From 1 to 20 ...'}</h3>
            <h3 className="text-lg text-sky-900 hover:text-lime-900">&#127752;{langLocalStorage === 'Port' ? 'Qual o tamanho de sua imaginação?' : 'How big is your imagination?'}</h3>
            <div className="flex flex-rox justify-center">
              <input
                name="blockQuant"
                type="text"
                id="handle-quant"
                value={blockQuant}
                onChange={this.handleValue}
                className="form-control hover:border-2 hover:border-sky-800 number-input text-4xl text-sky-800 text-center"
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
        </div>
        <Mount gradeForm={ grade } className="grade"/>
      </section>
    )
  }
}
