import React, { Component } from 'react';
import './index.css';
import AnimalItem from '../animalItem';

class AnimalTable extends Component {
  render() {
    console.log(this.props.animals);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {this.props.animals[0] &&
            this.props.animals.map(
              animal => <AnimalItem animal={animal} key={animal.name} />
            )
          }
        </tbody>
      </table>
    );
  }
}

export default AnimalTable;
