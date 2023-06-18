import React, { Component } from "react";
import "../scss/work-history.scss";

export default class WorkHistory extends Component {

  state = {
    skills: {
      'Web Development': {
        'icon': './images/webdev_white.svg', 'technologies': ['Java Script', 'HTML5', 'CSS'
          , 'Node JS ', 'React', 'TypeScript']
      },
      'Frameworks': {
        'icon': './images/framework_white.svg', 'technologies': [
          'Next.js ', 'Gatsby ', 'Angular ', 'Express', 'Strapi ', 'Material ',
          'Bootstrap', 'Spring Boot (Basics)', 'Jest ', 'Storybook']
      },
      'Database': { 'icon': './images/database_white.svg', 'technologies': ['MongoDB ', 'MySQL ', 'Cloudant', 'CouchDB'] },
      'Devops': { 'icon': './images/process.svg', 'technologies': ['AWS', 'Jenkins'] },
      'IDE and other tools': { 'icon': './images/tools_white.svg', 'technologies': ['Visual Studio', 'Postman'] },
      'Others': {
        'icon': './images/others_white.svg', 'technologies': ['Vercel ', ' GitHub ', ' Docker', ' Microservices Architecture ',
          ' SQL ', ' NOSQL ', ' Agile Methodology ', ' CI/CD ', ' JIRA']
      }


    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="work-exp-section mt-4" id="work-exp" tabIndex={0}>
        <h2 className="text-left pb-2">Work Experience</h2>
        <div className="work-exp-container pt-5">
          <div class="stepper d-flex flex-column mt-2 ml-2">
            <div class="d-flex mb-1 gap-3">
              <div class="d-flex flex-column pr-4 align-items-center">
                <div class="rounded-circle py-2 px-3 stepper-number text-white mb-1">1</div>
                <div class="line h-100"></div>
              </div>
              <div>
                  <h5 class="text-dark">Software Engineer - II</h5>
                  <h5 class="text-dark">Cisco Systems</h5>
                <p class="lead text-muted pb-3">Jan 2021 - August 2022</p>
              </div>
            </div>

            <div class="d-flex mb-1 gap-3">
              <div class="d-flex flex-column pr-4 align-items-center">
                <div class="rounded-circle py-2 px-3 stepper-number text-white mb-1">2</div>
                <div class="line h-100 d-none"></div>
              </div>
              <div>
              <h5 class="text-dark">Application Developer</h5>
                <h5 class="text-dark">IBM India Pvt Ltd.</h5>
                <p class="lead text-muted pb-3">Nov 2018 - Dec 2020</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
