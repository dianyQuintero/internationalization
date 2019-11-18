import React from 'react';
import {FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage} from 'react-intl';

export default class Job extends React.Component {

	getMillion = ()=>{
		if (this.props.offer.salary === 1){
			return <FormattedMessage id="Million"/>
		}
		else{
			return <FormattedMessage id="Millions"/>
		}
	}


  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.company}</td>
      			<td>{this.props.offer.salary} <FormattedPlural value = {this.props.offer.salary} one={this.getMillion()} other={this.getMillion()}/>   </td>
      			<td>{this.props.offer.city}</td>
      			<td>
					<FormattedDate
						value={new Date(this.props.offer.date)}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
				</td>
				<td> <FormattedNumber value={this.props.offer.views}/></td>
  			</tr>
  		);
	}
}