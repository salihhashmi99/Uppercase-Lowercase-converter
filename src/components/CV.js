import React from 'react'
import '../App.css'

export default function CV() {
  return (
    <>
     <div class="col-md-7">
        <div class="card">
            <div class="row">
                <div class="col-md-4">
                    <image id="profile_dp" src="E:\University Vibes\salih.jpg" alt="Salih"
                    width="250px" height="250px" class="card-img"></image>
                </div>
                <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title" align="center"><b>M. Salih Tanveer</b></h2>
                            <ul class="list-group">
                                <li class="list-group-item bg-warning text-white"><b>Email:</b>salih.hashmi.1999@gmail.com</li>
                                <li class="list-group-item bg-warning text-white"><b>Phone No: </b>+92 313 - 5798392</li>
                                <li class="list-group-item bg-warning text-white"><b>Address: </b>H # C -50, St # 30, P.A.E.C Housing Society, G.T Road Rawat</li>
                              </ul>
                            </div>
                            <div class="card-footer bg-white">
                                <ul class="nav nav-pills card-footer-pills">
                                    <li class="nav-item">
                                        <a href="www.facebook.com" class="nav-link">
                                            <image src="C:\Users\Salih\Downloads\Car Modifications\Data\facebook.png"
                                    width="50px" height="50px"></image>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="www.instagram.com" class="nav-link">
                                            <image src="C:\Users\Salih\Downloads\Car Modifications\Data\instagram.jpg"
                                            width="50px" height="50px"></image>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="www.twitter.com" class="nav-link">
                                            <image src="C:\Users\Salih\Downloads\twitter.jpg"
                                      width="50px" height="50px"></image>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <div class="section">
            <h4 align="center">Education</h4>
        </div>
        <table id="Qualification" align="center">
            <tr>
                <th>Degree</th>
                <th>Years</th>
                <th>Institute</th>
                <th>Subjects</th>
                <th>Board</th>
                <th>Obtained</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>Matriculation</td>
                <td>2016</td>
                <td>Army Public School & college Rawat</td>
                <td>Biology</td>
                <td>FBISE - Federal Board of Intermediate and Secondary Education</td>
                <td>881</td>
                <td>1050</td>
            </tr>
            <tr>
                <td>Intermediate</td>
                <td>2018</td>
                <td>Army Public School & college Rawat</td>
                <td>Pre-Engineering</td>
                <td>FBISE - Federal Board of Intermediate and Secondary Education</td>
                <td>750</td>
                <td>1100</td>
            </tr>
            <tr>
                <td>Graduation</td>
                <td>2023</td>
                <td>National University of Modern Language</td>
                <td>Software Engineering</td>
                <td>NUML</td>
                <td>-</td>
                <td>4 CGPA</td>
            </tr>
        </table>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 Cerifications
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>2019: Graphic Designing</strong><br/>
                    <strong>2019: Freelauncing</strong><br/>
                    <strong>2021: Creative Writing</strong><br/>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Objectives and Experiences
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>Objectives</strong><br/>
                  To enhance my knowledge and capabilities by working in a dynamic organization that prides
                  itself in giving substantial responsibility to new talent.<br/>
                  <strong>Experiences</strong><br/>
                  This is my first experience in thefield of Software Development and I didn???t 
                  work in any other organization before this. I want to learn the skills from 
                  here and I will perform well.<br/>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Skills 
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>I have admireable skills that are given below:</strong>
                  <ul>
                    <li>Requirement Specification and Analysis</li>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div><br/>
                    <li>UI/UX Design (Figma & Adobe XD)</li>
                    <div class="progress bg-danger">
                        <div class="progress-bar " role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div><br/>
                    <li>Admirable Communication Skills</li>
                    <div class="progress">
                        <div class="progress-bar bg-secondary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div><br/>
                    <li>Proefficient in MS Office</li>
                    <div class="progress">
                        <div class="progress-bar bg-dark" role="progressbar" style="width: 75%" aria-valuenow="75"></div>
                      </div><br/>
                    <li>Mark-up Languages (HTML, CSS, JS and PHP)</li>
                    <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div><br/>
                    <li>UML Software Designing</li>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div><br/>
                    <li>C++ , Java, Python</li>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div><br/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
