import React from 'react';
import TableItem from './tableItem.jsx';
import TableClose from './TableClose.jsx';

class Tablelist extends React.Component {


	render(){
        
        let tableNames = this.props.tableNames.map(
            name => {
                return(
                    <TableItem tableitem={name}/>
            }
        )
        
        let tableAmount = this.props.tableAmount.map(
            amount => {
                return(
                    <TableClose tableamount={amount}/>
            }
        )
        
        
		return (
            <table>
               {tableNames} 
               {tableAmount}
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