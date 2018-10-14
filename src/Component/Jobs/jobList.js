import React, { Component } from 'react';
import Accordion from 'react-collapsy';
import '../../../node_modules/react-collapsy/lib/index.css';
import mockData from './mockJobData.js';
import '../../App.css';

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandSection: null,
            jobs: mockData
        }
    }

    handleClick(index){
        const { expandSection } = this.state
        if (index === expandSection){
            this.setState({expandSection: null});
        } else {
            this.setState({expandSection: index})
        }
    }

    renderList = () => {
        return this.state.jobs.map((job, i) => {
            const activeSection = this.state.expandSection;
            return (
                <div key={i} onClick={() => this.handleClick(i)} className={"panel"}>
                    <div className="row">
                        <h2 className="panel-title-text">{job.title}</h2>
                        <i className="chevron-down" class={activeSection === i ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i>
                    </div>
                    <br/>
                    {this.expandedView(i)}
                </div>
            )
        })
    }

    renderChecklist = (i) => {
        if (!this.state.jobs[i].responsibilities) return;
        return this.state.jobs[i].responsibilities.map(item => {
            return (
                <p style={{ paddingLeft: 45}} className="job-text">{item}</p>
            )
        })
    }

    expandedView = (index) => {
        const activeSection = this.state.expandSection;
        if (activeSection === index){
            return (
                <div className="expanded-container">
                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                        <h2 style={{fontWeight: '700', paddingLeft: 30, paddingRight: 10,}} className="job-text">Job Location: </h2>
                        <h2 className="job-text">{this.state.jobs[index].location}</h2>
                    </div>
                    {/* Job Description Section */}
                    <div style={{paddingLeft: 30, paddingTop: 30}}>
                        <h2 className="job-text">Job Description: </h2>
                        <p className="job-text">{this.state.jobs[index].description}</p>
                    </div>
                    {/* Requirement Section */}
                    <div style={{paddingLeft: 30, paddingRight: 30}}>
                        <h2 className="job-text">Requirements: </h2>
                        <p className="job-text">{this.state.jobs[index].requirements}</p>
                    </div>
                    <div>
                        {this.renderChecklist(index)}
                    </div>
                    <h4 className="job-text" style={{fontWeight: '600', paddingRight: 30}}>Please email resume/CV to jayden@vaius.group. We will get back to you within 24 hours to follow up.</h4>
                </div>
            )
        } else return;
    }

    render() {
        return (
            <div className="container">
                <div className="post-box">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}


export default JobList;