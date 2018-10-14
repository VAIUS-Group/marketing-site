import React, { Component } from 'react';

class JobsFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'Placeholder text'
        }
    }
    render(){
        return (
            <footer className="jobs-footer">
                <p>Testing the Footer deal thing</p>
            </footer>
        )
    }
}
export default JobsFooter;