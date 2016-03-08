import React from 'react';
import ListItem from './listItem.jsx';

class Studentlist extends React.Component {


	render(){
        
        let studentNames = this.props.studentNames.map(
            name => {
                return(
                    <ListItem listitem={name}/>
                )
            }
        )
        
        
		return (
            <ul>
               {studentNames} 
            </ul>
		)
	}
}

var styles = {
   title : {
       color:'green'
   }
}

export default Studentlist