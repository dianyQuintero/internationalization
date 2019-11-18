import React from 'react';
import Job from "./job";
import {FormattedMessage} from 'react-intl';

export default class JobsList extends React.Component {

  state = { 
  	"offers": [
    	{
    	  "id": "0001",
        "name": "Manager",
    	  "company": "Schneider Electric", 
    	  "salary": 4.5,
    	  "city": "Bogotá, Colombia",
        "date": "2019-03-26",
        "views": "10000"
      }, 
      {
        "id": "0002",
        "name": "Software Engineer",
        "company": "Google Inc.", 
        "salary": 20,
        "city": "Palo Alto, CA, USA",
        "date": "2019-03-27",
        "views": "123000"
      },
      {
        "id": "0003",
        "name": "Nurse",
        "company": "Clínica La Aurora", 
        "salary": 1,
        "city": "Cali, Colombia",
        "date": "2019-03-28",
        "views": "52000"
      }
    ]
  };

  getColor = ()=>{
			return <FormattedMessage id="Encabezado"/>
	}

  render() {
    return (
      <div>
        <table className="table">
          <thead className={this.getColor()}>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id="Position"/></th>
              <th scope="col"><FormattedMessage id="Company"/></th>
              <th scope="col"><FormattedMessage id="Salary"/></th>
              <th scope="col"><FormattedMessage id="City"/></th>
              <th scope="col"><FormattedMessage id="PublicationDate"/> </th>
              <th scope="col"><FormattedMessage id="Views"/></th>
            </tr>
          </thead>
          <tbody>
              {this.state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}