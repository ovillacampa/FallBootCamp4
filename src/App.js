import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';


import UFLogo from './UFLogo.JPG'; // relative path to image


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    console.log('Selected',id)
   this.setState({selectedBuilding: this.props.data.findIndex(x => x.id === id)})

  }

  deleteBuilding = (id) => {
console.log(id)
//    console.log(this.props.data)
//  let data = this.state.data.filter(data =>{

    this.props.data.splice(this.props.data.findIndex(x => x.id === id), 1);
    this.setState(this.props.data);

  }

  addBuilding = (building) => {
  building.id = (new Date().getTime()/1000); //Unique ID

    //console.log(building)
    //this.props.data = [...this.props.data, building]
    //this.setState(this.props.data);
  //let data1 = [...this.props.data, building]
   // this.setState({
   //   data: data1
   // })
    //console.log(data1)
this.props.data.push(building)
console.log(this.props.data);
  }


  render() {

    return (
      <div className="bg">
        <div className="header">
          <img src={UFLogo} alt="logo"  style={{width:75, height:75}} />
            <h1>Building Locator</h1>
          <p/>
        </div>

        <Search
        filterText={this.state.filterText}
        filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <div>
                    <i>Click on a name to view more information</i>
                  </div>
                  <tr>
                    <th>Code    Building</th>

                  </tr>


                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    deleteBuilding={this.deleteBuilding}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                  selectedBuilding={this.state.selectedBuilding}
                  data={this.props.data}
              />
              <div className="test">
              <AddBuilding addBuilding={this.addBuilding}/>
              </div>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
