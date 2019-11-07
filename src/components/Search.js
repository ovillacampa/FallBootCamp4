import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value;
		this.props.filterUpdate(val)

	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
            <form className="form-inline md-form form-sm mt-0">
                <i className="fa fa-search fa-3x" aria-hidden="true"></i>
                <input className="form-control form-control-sm ml-3 w-75"
					   type="text"
					   ref={(value) => {this.myValue=value}}
					   placeholder="Type to Filter"
                       aria-label="Search"
					   onChange={this.filterUpdate.bind(this)}/>
            </form>
		);
	}
}
export default Search;
