import React, { Component } from 'react';
import Logo from '../../logo-light2x.png';
import '../../App.css';
class JobsFooter extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <footer className="jobs-footer">
                <div style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                    <h3 style={{ color: '#fff' }}>Get In Touch</h3>
                    <a style={{ color: '#fff', textDecoration: 'none', fontWeight: '500'}} href="http://vaius.group/contact.html" target="_blank">info@vaius.group</a>
                </div>
                <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <a href="http://vaius.group/"><img style={{marginTop: 3, marginLeft: 5, height: 50, width: 'auto'}} alt="VAIUS LOGO" src={Logo}/></a>
                    <p style={{color: '#fff', paddingBottom: 3,}}>© VAIUS Group, 2018</p>
                </div>
                <div>
                    <div style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <a target="_blank" href="https://www.facebook.com/vaius.group/"><i style={{ fontSize: 40, color: 'white', padding: 5}} class="fa fa-facebook-official" aria-hidden="true"></i></a>
                        <a target="_blank" href="http://twitter.com/vaiusgroup"><i style={{ fontSize: 40, color: 'white', padding: 5}} class="fa fa-twitter-square" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/company/vaius-group/"><i style={{ fontSize: 40, color: 'white', padding: 5}} class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default JobsFooter;


