import React from 'react';
import TableItem from './tableItem.jsx';

class Tablelist extends React.Component {


	render(){
        
        let tableNames = this.props.tableNames.map(
            name => {
                return(
                    <TableItem tableitem={name}/>
                )
            }
        )
        
        
		return (
            <table>
               {tableNames} 
            </table>
		)
	}
}

var styles = {
   title : {
       color:'green'
   }
}

export default Tablelist