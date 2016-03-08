import React from 'react';


class ListItem extends React.Component {


	render(){
              
		return (
            <li>{this.props.listitem}</li>
		)
	}
}


export default ListItem