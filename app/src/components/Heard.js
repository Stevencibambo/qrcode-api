import React, {Component} from "react";
import logo from '../statics/images/logo_4.png';

class Header extends Component{
    render(){
        return(
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a className="navbar-brand masterheader--a" href="/">
                        <h1 className="mastheader--h1">
                            <img src={ logo } alt="Tzed tech" className="mastheader--img"/>
                        </h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end masterheader__navbar--div" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">Home</a>
                            <a className="nav-item nav-link" href="/encode">Encode</a>
                            <a className="nav-item nav-link" href="/decode">Decode</a>
                            <a className="nav-item nav-link" href="/api">API</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;