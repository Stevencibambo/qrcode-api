import {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Qrcode from './Qrcode';
import EncodeForm from './EncodeForm';
import DownloadForm from './DownloadForm';

class Encode extends Component{

    state = {
        status: "",
        message: "",
        data: "",
    }
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
            console.log(resp)
            this.setState({data: resp.data})
            console.log(this.state.data)
            })
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
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAFKAQAAAABTUiuoAAABVUlEQVR4nO3ZS66DMAxAUUssgCWxdZbUBSClxJ+YPl4lRo0H14O0hJNOLAeHSnsau0ChUCgUWoOKx9Jkey3nhA0xvUFLUb3owLysLRaNu9A6tCcxc7qLX3qyoTWpTvsALU8vFQitSvXDEntI2x/tr9BJ9LMhieFB7wL9Pf2IQzS7nuwR0EL0LL5mdXeMdPZv63FLLHQytV2y9YLUe6OR1PMZtCC1WPsjbuyhXxILnUj/tPiaTm8foeVou26azQ7S57DEDWgp2svQB9Gcek1aQW7QSjQO0rpp9onLI+7LmRs6jUbJqfJFkfHb0xA6mYo1H1mB2Z/IWAQtQjPilaKI9/6Sjz1oDRopzIP0eFPV7mUInUz1Ypycc+6fioXOp/HnSnaOFvYb0JrU2sc9lL0FgRalVoujacwBWojqR9Jz4fUAAC1FPe45zZ0TWoU+CSgUCoVC59M3oCOSlCaWdMUAAAAASUVORK5CYII=" className="img-thumbnail w-100" alt="Qr code"/>
                            </h1>
                            <DownloadForm data={this.state.data} onFormSubmit={this.handleFormSubmit} />
                         </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Encode;