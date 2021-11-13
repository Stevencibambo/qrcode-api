import React from 'react';
import qrcode from '../statics/images/qrcode4.png';


const Qrcode = () => {
    return(
        <div className="pt-5">
            <img src={ qrcode } alt="Qr Code" className="img-thumbnail w-100"/>
        </div>
    )
}
export default Qrcode;