import React from 'react';


class Title extends React.Component {


	render(){
		return (
            <h1 style={styles.title}>{this.props.title}</h1>
		)
	}
}

var styles = {
   title : {
       color:'green'
   }
}

export default Title