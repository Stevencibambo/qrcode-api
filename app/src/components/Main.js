import React, { Component } from 'react';
import Qrcode from './Qrcode';

class Main extends Component{

 render()
 {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Qrcode />
                </div>
                <div className="col-6 text-center p-5">
                    <h1>Secure your data</h1>
                    <p>
                     Tzed tech Qr Code, offer a possibility to encode your data to within a single image.
                    </p>
                    <ul className="col text-left">
                        <li>Personal identity</li>
                        <li>Page web link </li>
                        <li>Access code/ Promotion code</li>
                    </ul>
                </div>
            </div>
        </div>
    )
 }
}
export default Main;