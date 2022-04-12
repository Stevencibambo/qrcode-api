import {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Qrcode from './Qrcode';
import EncodeForm from './EncodeForm';

class Encode extends Component{

    handleFormSubmit = (form) => {
        var resp = this.generateQrcode(form);
        console.log(resp);
    }
    generateQrcode = (data) => {
        fetch("http://localhost:8000/api/v1/encode/", {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            var resp = response.json()
            console.log(resp)})
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
                         </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Encode;