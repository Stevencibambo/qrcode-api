import React, {Component} from 'react';

class EncodeForm extends Component {
    state = {
        content: this.props.content || '',
        logo: this.props.logo || '',
        useLogo: this.props.useLogo || 0,
    }
    handleContent = (evt) => {
        this.setState({content: evt.target.value})
    }
    getBase64(file, cb){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (){
            cb(reader.result);
         };
        reader.onerror = function (error){
            console.log('Error :', error);
        }
    }
    handleLogo = (evt) => {
        evt.preventDefault();
        var file = evt.target.files[0];
        if(!file) return;
        this.getBase64(file, (cb) => {
            this.setState({logo: cb});
        });
    }
    handleUseLogo = (evt) => {
        if(evt.target.checked){
           this.setState({useLogo: 1});
        }else{
            this.setState({useLogo: 0})
        }
    }
    handleFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.onFormSubmit({...this.state});
    }
    render(){
        return(
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="form-control" placeholder="Enter data to encode" row="10" value={this.state.content} onChange={this.handleContent}>
                            {this.state.content}
                        </textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="logo">Logo (40x40)</label>
                        <input type="file" id="logo" onChange={this.handleLogo} className="form-control"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="useLogo" name="useLogo" onChange={this.handleUseLogo}/>
                        <label htmlFor="useLogo" className="form-check-label">Use logo</label>
                    </div>
                    <div className="form-group d-flex justify-content-between mt-4">
                        <button type="submit" className="btn btn-md btn-primary">Generate</button>
                        <button type="button" className="btn btn-md btn-secondary" onClick={this.props.onCancelClick}>Cancel</button>
                    </div>
                </form>
        )
    }
}
export default EncodeForm;