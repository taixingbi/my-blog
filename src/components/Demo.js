import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';

import Server from './Server';
import UserList from './UserList';


import './Demo.css';

import { data_gits } from './Data';
import { data_sleep } from './Data';

import { Table } from './Table';
import { Plotly } from './Plotly';




export default class Demo extends Component {
  render() {

    return (
      <div>
        <header>
          <img class="img-header" src="assets/img-domo.jpg" />
        </header>

        <section class="section1">
          <h2>  TABLE </h2>
          <br/>
          <br/>

          <div class="row">
            <div class="col-md-6 col-sm-6 text-center">
              <h3>  Most active GitHub users </h3>
              {/*  <Table data={data_gits} />  */}

              <Server />

              <p>
                <br/>
                Only top 10 GitHub users according to the count of followers are taken. This is because of limitations of GitHub search. Sorting algo in pseudocode:
              </p>
            </div>

            <div class="col-md-6 col-sm-6 ">
              <br/>
              <br/>
              <h3>  GraphQL </h3>
              <br/>
 
              <p> 
                <br/>
                  server
                  <ul>
                    <li>Use mongoose connect mongoDB</li>
                    <li>Through graphql, schema, do data mutation and display collections</li>
                  </ul>

                  client
                  <ul>
                    <li>use apollo connect server</li>
                    <li>use qraphql to query</li>                    
                  </ul>
                <br/> 
              </p>

              <div>
                <Button bsStyle="info" href="https://codepen.io/gregbarozzi/pen/XXMBLM">Know More</Button>
              </div>   
            </div>
          </div>

        </section>

        <section class="section2">
          <h2>  Plot Data  </h2>
          <div class="row">
            <div class="col-lg-6 col-sm-6 text-center">
              <Plotly data= {data_sleep} />
              <p>
                We can monitor heart rate and stored and plots a graph, 
                which is saved to an HTML file that can easily be shared with others and viewed in a browser
              </p>
            </div>
            <div class="col-lg-6 col-sm-6">
              <br/>
              <br/>
              <br/>
              <br/>
              <h3>Plotly</h3>
              <p class="major text-left">
                <br/>
                Use react-plotly.js to embed D3 charts in your React-powered web application. 
                This React component takes the chart type, data, 
                and styling as Plotly JSON in its data and layout props, 
                then draws the chart using Plotly.js. See below about how to get started with react-plotly.js.
                <br/> 
                <br/> 
              </p>   
              <div>
                <Button bsStyle="info" href="https://plot.ly/javascript/react/">Know More</Button>
              </div>    
            </div>  
          </div>
        </section>



        <section>

        </section>


        <footer>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <span class="copyright">Copyright &copy; Your Website 2018</span>
              </div>
              <div class="col-md-4">
              </div>
              <div class="col-md-4">
                    Privacy Policy Terms of Use
              </div>
            </div>
          </div>
        </footer>


        </div>
    )
  }
}
