import React, {Component} from 'react';
import { saveAs } from 'file-saver';

class DownloadForm extends Component{

    const downloadImage = (image_url, file_name) => {
      saveAs(image_url, file_name)
    }
    render(){
        return(
        <>
        <Button onClick={downloadImage()}>Download!</Button>
        </>);
    }
}
export default DownloadForm