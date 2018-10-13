import React, { Component } from 'react';
import Accordion from 'react-collapsy';
import '../../../node_modules/react-collapsy/lib/index.css';
import '../../App.css';

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandSection: null,
            jobs: [
                {
                    title: 'Python Developer',
                    location: 'Budapest, HU',
                    description: 'This is a test job descirption'
                }, {
                    title: 'Javascript Developer',
                }, {
                    title: 'PHP Developer'
                }
            ]
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
                        <h2>{job.title}</h2>
                        <i className="chevron-down" class={activeSection === i ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i>
                    </div>
                    <br/>
                    {this.expandedView(i)}
                </div>
            )
        })
    }

    expandedView = (index) => {
        const activeSection = this.state.expandSection;
        if (activeSection === index){
            return (
                <div className="expanded-container">
                    <h1>{`Testing the collapse thing for ${this.state.jobs[index].title}`}</h1>
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