import React, { Component } from 'react';
import Accordion from 'react-collapsy';
import '../../../node_modules/react-collapsy/lib/index.css';
import '../../App.css';

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    renderList() {
        return this.state.jobs.map(job => {
            return (
                // className="panel"
                <Accordion headerClass='post-box' contentWrapperClass='post-box' title={job.title}>
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Accordion>
            )
        })
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