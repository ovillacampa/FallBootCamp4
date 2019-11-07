import React, { Component} from 'react';

class AddBuilding extends Component {
state ={
    id: null,
    code: null,
    name: null,
    address: null,
    coordinates: {
        longitude: null,
        latitude: null
    }

}
handleChange = (e) =>{
    this.setState({
        [e.target.id]: e.target.value
    })

}
    handleLongChange = (e) =>{
        this.setState({
           coordinates: {
               longitude: Number(e.target.value),
               latitude: this.state.coordinates.latitude
           }
        })

    }

    handleLatChange = (e) =>{
        this.setState({
            coordinates: {
                latitude: Number(e.target.value),
                longitude: this.state.coordinates.longitude
            }
        })

    }

handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBuilding(this.state)
    document.getElementById('code').value='';
    document.getElementById('name').value='';
    document.getElementById('address').value='';
    document.getElementById('longitude').value='';
    document.getElementById('latitude').value='';
}
    render() {
    return(
        <div>
            <form className="responsive" onSubmit={this.handleSubmit}>
                <p/><p/>
                <h5> Add New Building Here </h5>
                <label htmlFor="code">Code: </label>
                    <span>
                <input type="text" id="code" onChange={this.handleChange} required />
                    </span>

                <label htmlFor="name">Name: </label>
                <input type="text" id="name" onChange={this.handleChange} required />
                <label htmlFor="address">Address: </label>
                <input type="text" id="address" onChange={this.handleChange} required />
                <label htmlFor="longitude">Longitude: </label>
                <input type="number" id="longitude" onChange={this.handleLongChange} />
                <label htmlFor="latitude">Latitude: </label>
                <input type="number" id="latitude" onChange={this.handleLatChange} />
                <button>Add</button>
            </form>
        </div>
    )


    }
    }

    export default AddBuilding