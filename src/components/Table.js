import React, { Component } from 'react';
import './Table.css';

class TableRow extends React.Component {
    render() {
      const {
        data
      } = this.props;
      const row = data.map((data) =>
      <tr>
        <td key={data.id}>{data.id}</td>
        <td key={data.name}>{data.name}</td>
        <td key={data.git}>{data.git}</td>
      </tr>
      );
      return (
        <span>{row}</span>
      );
    }
  }
  
  export class Table extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <table>
          <TableRow data={this.props.data} />
        </table>
      );
    }
  }