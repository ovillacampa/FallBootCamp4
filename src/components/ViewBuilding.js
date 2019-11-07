import React from 'react';


export default ({data, selectedBuilding}) => {

//console.log (typeof data[selectedBuilding].coordinates.latitude)

	if ('coordinates' in data[selectedBuilding]) {
		return (
			<div className="card" style={{width: 500}}>
				<div className="card-body">

					{/*<li> {data[selectedBuilding].id}</li>*/}
					<h5 className="card-title"> Code: {data[selectedBuilding].code}</h5>
					<h6 className="card-subtitle mb-2 text-muted"> Name: {data[selectedBuilding].name}</h6>
					<ul style={{listStyleType: "none"}}>
					<li>Address: {data[selectedBuilding].address}</li>
						<li>Coordinates:</li>
						<li> Latitude: {data[selectedBuilding].coordinates.latitude}</li>
						<li> Longitude: {data[selectedBuilding].coordinates.longitude}</li>
				</ul>
				</div>
			</div>
		);
	}
	return (
		<div className="card" style={{width: 400}}>
			<div className="card-body">
				{/*<li> {data[selectedBuilding].id}</li>*/}
				<h5 className="card-title"> Code: {data[selectedBuilding].code}</h5>
				<h6 className="card-subtitle mb-2 text-muted"> Name: {data[selectedBuilding].name}</h6>
				<ul style={{listStyleType: "none"}}>
				<li>Address: {data[selectedBuilding].address}</li>
				<li>Coordinates:</li>
				<li> Latitude: Not Available</li>
				<li> Longitude: Not Available</li>
				</ul>
			</div>
		</div>
	);
}
