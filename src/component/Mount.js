import React, { Component } from 'react';
import T from '../style/tailwind'
import '../style/Mount.css'
import WaterColor from './WaterColor';

export default class Mount extends Component {
  handleColor = ({ target }) => {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    target.style.backgroundColor = selectedColor;
  }

  render() {
    const { gradeForm } = this.props;
    // console.log("gradeForm", renderImage(gradeForm));
    return (
      <section className="quad">
        {gradeForm.map((element) => {
          return (
            <main className='colum'>
            {element.map((box) => {
              return (
                box === 1
                ? <div key={ Math.random() } onClick={ this.handleColor } className="box"/>
                : <div key={ Math.random() } className="empty-box"/>
              )
            })}
            </main>
          )
        })}
      </section>
    )
  }
}
