import React, { Component } from "react";
import "../scss/skills.scss";

export default class Skills extends Component {

  state = {
    skills: {
      'Web Development': {
        'icon': './images/webdev.svg', 'technologies': ['Java Script', 'HTML5', 'CSS'
          , 'Node JS ', 'React', 'TypeScript']
      },
      'Frameworks': {
        'icon': './images/database.svg', 'technologies': [
          'Next.js ', 'Gatsby ', 'Angular ', 'Express', 'Strapi ', 'Material ',
          'Bootstrap', 'Spring Boot (Basics)', 'Jest ', 'Cypress']
      },
      'Database': { 'icon': './images/framework.svg', 'technologies': ['MongoDB ', 'MySQL ', 'Cloudant', 'CouchDB'] },
      'Devops': { 'icon': './images/devops.svg', 'technologies': ['AWS', 'Jenkins'] },
      'IDE and other tools': { 'icon': './images/tools.svg', 'technologies': ['Visual Studio', 'Postman'] },
      'Others': {
        'icon': './images/others.svg', 'technologies': ['Vercel ', ' GitHub ', ' Docker', ' Microservices Architecture ',
          ' SQL ', ' NOSQL ', ' Agile Methodology ', ' CI/CD ', ' JIRA']
      }


    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="skills-section" id="skills" tabIndex={0}>
        <img className="skills-circle" src="./images/circle.svg" alt="circle"/>
        <h1>Skills</h1>
        <div className="skills-card-main">
          {
            Object.keys(this.state.skills).map(skill => {
              return (<div className="skills-card" tabIndex={0}>
                <img className="skills-icon" alt={this.state.skills[skill].icon} src={this.state.skills[skill].icon} />
                <div  className="technologies">
                  <p className="skill-name">{skill}</p>
                  <p className="skill-techs">{this.state.skills[skill].technologies.join(' | ')}</p>
                  
                </div>
              </div>)
            })
          }
        </div>
      </div>
    );
  }
}
