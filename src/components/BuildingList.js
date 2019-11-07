import React from 'react';

class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate, deleteBuilding } = this.props;

		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >=0
			})

			.map(directory => {
			return (

				<tr  key={directory.id} >

					{/*<td>{directory.id}</td>*/}
					<td>{directory.code} </td>
					<td onClick={() => {selectedUpdate(directory.id)}}> {directory.name}  </td>
					<button
						onClick={() => {deleteBuilding(directory.id)}}
						styleName="font-size:36px;color:red">
						<i className="fa fa-remove"> </i>
						</button>

				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
