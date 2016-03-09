import React from 'react';


class TableItem extends React.Component {


	render(){
              
		return (
            <tr><td>{this.props.tableitem}</td>
		)
	}
}


export default TableItem