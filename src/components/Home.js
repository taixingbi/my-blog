import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import { Grid, Col, Image } from 'react-bootstrap';
//import { Jumbotron, Row, Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

import './Contact.css'


export default class Contact extends Component {
    render() {
      return (
        <div>
          <section class="section1">
            <Grid>
              <Col xs={12} sm={9} smOffset={1}>
                <Image src="assets/profile.jpg" className="about-profile-pic" rounded />
                <h3>Taixing</h3>
                <p>
                  I graduated from UAH(university of Alabama in Huntsville) with master degree in 2015 and have worked as software engineer for three years.  
                  <br/>
                  <br/>

                  Techinical Skill: Full Stack, Test, HTML, CSS, Javascript/ES6, React, NodeJS, jquery, Django, Python, REST, JSON/XML, Git, Pandas, AWS, WordPress  Docker, PostgreSQL, MongoDB, Linux/Unix.
                </p>
              </Col>
            </Grid>          
          </section>

          <section class="section2" id="portfolio">
            <div class="container">

              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2 class="section-heading text-uppercase">Portfolio</h2>
                  <br/>
                  <br/>
                  <br/>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4 col-sm-6 portfolio-item">
                  <h4>Personal Web</h4>
                  <br/>
                  <a class="portfolio-link" href="http://3.17.52.157:3000/">
                    <div class="portfolio-hover"></div>
                    <img class="img-portfolio" src="assets/portfolio1.jpg" alt=""/>
                  </a>
                  <div class="portfolio-caption">
                    <ul>
                      <li>react + react-boostrap </li>
                      <li>AWS EC2(Beanstalk)</li>
                      <li>MongoDB</li>
                    </ul>

                  </div>
                </div>

                <div class="col-md-4 col-sm-6 portfolio-item">
                  <h4>Tech Company Web</h4>
                  <br/>
                  <a class="portfolio-link" href="http://18.218.141.159:8000/">
                    <div class="portfolio-hover"></div>
                    <img class="img-portfolio" src="assets/portfolio2.jpg" alt=""/>
                  </a>
                  <div class="portfolio-caption">
                    <ul>
                      <li>django + boostrap + plotly</li>
                      <li>AWS EC2(Beanstalk)</li>
                      <li>PostgreSQL</li>
                    </ul>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 portfolio-item">
                  <h4>Fashion Web</h4>
                  <br/>
                  <a class="portfolio-link" href="http://18.218.59.9/">
                    <div class="portfolio-hover"></div>
                    <img class="img-portfolio" src="assets/portfolio3.jpg" alt=""/>
                  </a>
                  <div class="portfolio-caption">
                    <ul>
                      <li>wordpress + php</li>
                      <li>AWS wordpress server</li>
                      <li>MySQL</li>
                    </ul>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 portfolio-item">
                  <h4>Real Estate Web</h4>
                  <br/>
                  <a class="portfolio-link" href="https://www.nestseekers.com/Marketing/">
                    <div class="portfolio-hover"></div>
                    <img class="img-portfolio" src="assets/img-timeline4.jpg" alt=""/>
                  </a>
                  <div class="portfolio-caption">
                    <ul>
                      <li>Django</li>
                      <li>AWS Docker</li>
                      <li>PostgreSQL</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section class= "section3" id="about">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2 class="section-heading text-uppercase">About</h2>
                  <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <ul class="timeline">
                    <li>
                    <a class="portfolio-link" href="https://en.wikipedia.org/wiki/University_of_Alabama_in_Huntsville">
                      <div class="portfolio-hover"></div>
                      <img class="timeline-image" src="assets/img-timeline1.jpg" alt=""/>
                    </a> 
                      <div class="timeline-panel">
                        <div class="timeline-heading">
                          <h4>2013-2015</h4>
                          <h4 class="subheading">University of Alabama in Huntsville</h4>
                        </div>
                        <div class="timeline-body">
                          <p class="text-muted"> Master degree with Electrical and Computer Engineer</p>
                        </div>
                      </div>
                    </li>

                    <li class="timeline-inverted">
                    <a href="https://en.wikipedia.org/wiki/Nvidia">
                      <div class="project-hover"></div>
                      <img class="timeline-image" src="assets/img-timeline2.jpg" alt=""/>
                    </a>                       
                      <div class="timeline-panel">
                        <div class="timeline-heading">
                          <h4>2016</h4>
                          <h4 class="subheading">Nvidia</h4>
                        </div>
                        <div class="timeline-body">
                          <p class="text-muted">
                          Test Engineer 
                          <br/>
                          Bash, Python, C++, HTML, CSS, OpenCV, SQL
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <img class="timeline-image" src="assets/img-timeline3.jpg" alt=""/>
                      <div class="timeline-panel">
                        <div class="timeline-heading">
                          <h4>December 2017</h4>
                          <h4 class="subheading">CGMAX</h4>
                        </div>
                        <div class="timeline-body">
                          <p class="text-muted">
                          Software Engineer
                          <br/>
                          Python, Django, AWS, MongoDB, Pandas, Mahince Learning, NLP
                          </p>
                        </div>
                      </div>
                    </li>

                    <li class="timeline-inverted">
                      <a href="https://en.wikipedia.org/wiki/Nest_Seekers_International">
                        <div class="project-hover"></div>
                        <img class="timeline-image" src="assets/img-timeline4.jpg" alt=""/>
                      </a> 
                      <div class="timeline-panel">
                        <div class="timeline-heading">
                          <h4>2018</h4>
                          <h4 class="subheading">NestSeekers</h4>
                        </div>
                        <div class="timeline-body">
                          <p class="text-muted">
                          Software Engineer/Full Stack
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>


          <section class="bg-light" id="team">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2 class="section-heading text-uppercase">Projects</h2>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-4">
                  <div class="team-member">
                    <div class="timeline-image">
                      <a href="https://github.com/taixingbi/web-crawling">
                        <div class="project-hover"></div>
                        <img class="img-round" src="assets/project1.jpg" alt=""/>
                      </a>
                    </div>

                    <h4>Web Scraping</h4>
                    <p class="text-muted">
                    Beautifulsoup, Requests, Scrapy
                    </p>

                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="team-member">
                    <div class="timeline-image">
                      <a href="https://github.com/taixingbi/recommender-system">
                        <div class="project-hover"></div>
                        <img class="img-round" src="assets/project2.jpg" alt=""/>
                      </a>
                    </div>

                    <h4>Recommender System</h4>
                    <p class="text-muted">
                    collaborative filtering, neural network filter, A/B test
                    </p>

                  </div>
                </div>

               <div class="col-sm-4">
                  <div class="team-member">
                    <div class="timeline-image">
                      <a href="https://github.com/taixingbi/Learning-Cross-Domain-Word-Embeddings">
                        <div class="project-hover"></div>
                        <img class="img-round" src="assets/project3.jpg" alt=""/>
                      </a>
                    </div>

                    <h4>Cross Domain Word Embeddings</h4>
                    <p class="text-muted">
                    NLP, Word Embeddings, Gensim
                    </p>

                  </div>
                </div>

               <div class="col-sm-4">
                  <div class="team-member">
                    <div class="timeline-image">
                      <a href="https://github.com/taixingbi/named_entity_recognition">
                        <div class="project-hover"></div>
                        <img class="img-round" src="assets/project4.jpg" alt=""/>
                      </a>
                    </div>

                    <h4>NER</h4>
                    <p class="text-muted">
                    NLP, RNN, CRF
                    </p>

                  </div>
                </div>

               <div class="col-sm-4">
                  <div class="team-member">
                    <div class="timeline-image">
                      <a href="https://github.com/taixingbi/sentiment-analysis">
                        <div class="project-hover"></div>
                        <img class="img-round" src="assets/project5.jpg" alt=""/>
                      </a>
                    </div>

                    <h4>Sentiment Analysis</h4>
                    <p class="text-muted">
                    NLP, cnn, rnn, keras
                    </p>

                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="team-member">
                    <div class="timeline-image">
                      <a href="https://github.com/taixingbi/sentiment-analysis">
                        <div class="project-hover"></div>
                        <img class="img-round" src="assets/project6.jpg" alt=""/>
                      </a>
                    </div>

                    <h4>Machine Learning</h4>
                    <p class="text-muted">
                      XGboost, Random Forest, Sklearn
                    </p>

                  </div>
                </div>
              </div>


      
            </div>
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

