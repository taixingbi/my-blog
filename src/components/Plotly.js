import React, { Component } from 'react';
import Plot from 'react-plotly.js';

export class Plotly extends React.Component {
    render() {
      const {
        data
      } = this.props;

      return(
        <Plot
          data={[
            {
              x: data.x,
              y: data.y,
              type: 'scatter',
            }, ]}

          layout={ {width: 600, height: 400, title: 'Sleep Hours per Week'} }
        />
      )
    }
  }
