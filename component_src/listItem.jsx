import React from 'react';


class ListItem extends React.Component {


	render(){
              
		return (
            <li>{this.props.listitem.name} ({this.props.listitem.count})</li>
		)
	}
}


export default ListItem