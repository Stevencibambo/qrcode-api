import {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Qrcode from './Qrcode';
import EncodeForm from './EncodeForm';
import Download from './Download';
import { saveAs } from 'file-saver';

class Encode extends Component{
    state = {
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAAHCAQAAAABUY/ToAAACdElEQVR4nO3ZS46DMAyA4UgcgCNx9R6JA0TKgONXIHRGXXb+LNpC/bGyHMeU9uF6FSQSiUQikcgvkkXX0sq2L03vrefXftzeWi39l6wNibxLuWiObqG1pEcikTMpSXb+91rltkYdq3r2LU0TFIl8I3vdeq1HaP+QZ+z6gUT+LmPbk3tyaR9I5DspXyYl57Runc8o65/2T+S/lrq0G3/4iMYKibzKtM5OStItEu+IsvgUh0SOctjidFNszS+jxbpUMCTSs6+WiIoAvezZZ8c6JHIqI+cioOrOeFlI5ETG3veybS9acuX2LxI5lUNqpR3PB012oqsukMgsfRdsOo4sRaOsiZIUlPWwfyL/tyybzR/jUvNQalm8t7U/kMiLlNTqAa2W9KuPBqS0TSsYEunZ5+/S4jDXbKjU7+2eh0jkTeq7EW/E8wZYrbRZfUMiJzLlV7PJUu6p+njJXpVsSOSkk7Idb+ia/Bk+M9BgJPIu98U7b3uGlrFiW6E1W0jkRMaOp2VsaKLi4S1PD5DIQVqm9STTrbBad2UV7L4LIpEqPSASL4pX09HAYnmIRD5IDfWD22UcObRTSORE6igpvY9djFub/lDBkEgfCJx1yo9w0qFvfrbzcQESOZH5HBczSeu8+6VWMCRyKntAT7d+2waTvaDZzGA6nUQih1V0gDQ5zPV/kcipLLqiddJqFfMBy82KRE6lXDQvVGlJY1UWK3JI5JO0pjsC8tluHYpXQyLfyDQGuMwptTl/zD4k0rLP5wN5MFm1nuWGHYkcpHxF12Tx6VinFewy4UYiJ934ogOkmFOmedJ6rWBIZPtwIZFIJBKJRH6J/AH3cj+7TydwJAAAAABJRU5ErkJggg==",
    }
    handleFormSubmit = (form) => {
        this.generateQrcode(form);
    }
    generateQrcode = (data) => {
        fetch("http://localhost:8000/api/v1/encode/", {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(data)
        })
        .then( response => response.json() )
        .then( json => this.setState({data: 'data:image/png;base64,' + json}) )
        .catch( error => console.error('error:', error) );
    }
    handleCancelClick = () => {
        return <Redirect path="/" />
    }
    render(){
        return(
        <div className="container d-flex justify-content-center my-4">
            <div className="row">
                <div className="col-6">
                    <Qrcode />
                </div>
                <div className="col-6 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-9 mt-5 p-5" style={{boxShadow: '0 0 10px #ccc'}}>
                            <EncodeForm onFormSubmit={this.handleFormSubmit} onCancelClick={ this.handleCancelClick}/>

                            <hr />
                            <h1 className="text-center">
                                <img src={this.state.data} className="img-thumbnail w-100" alt="Qr code"/>
                            </h1>
                            <Download image={this.state.data}>Download</Download>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Encode;