import { saveAs } from 'file-saver';

const Download = ({image}) => {
    const downloadImage = () => {
      saveAs(image, 'qrcode.png')
    }
    return(
        <>
        <button className="btn btn-primary" onClick={ downloadImage }>Download</button>
        </>);
 }
export default Download

