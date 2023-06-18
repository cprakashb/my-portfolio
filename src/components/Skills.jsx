import React, { Component } from "react";
import "../scss/skills.scss";

export default class Skills extends Component {

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
      <div className="skills-section" id="skills" tabIndex={0}>
        <h2 className="text-left pb-2">Skills</h2>
        <div className="skills-container pt-5">

        <div className=" skills-card-main d-flex flex-wrap flex-column flex-sm-row gap-3 gap-md-5 p-1 justify-content-start justify-content-xl-between align-items-start">
          {
            Object.keys(this.state.skills).map(skill => {
              return (<div className=" skills-card d-flex flex-column  gap-3 p-4 align-items-center justify-content-center" >
                <div>
                <img className="skills-icon" alt={this.state.skills[skill].icon} src={this.state.skills[skill].icon} />
                </div>
                <div  className="technologies">
                  <h6 className="skill-name text-center">{skill}</h6>
                  <p className="skill-techs text-center">{this.state.skills[skill].technologies.join(' | ')}</p>
                  
                </div>
              </div>)
            })
          }
        </div>
        </div>

      </div>
    );
  }
}
