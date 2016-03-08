import React from 'react';


class Image extends React.Component {


	render(){
		return (
            <div style={styles.frame}>
                <img style={styles.image} src={this.props.image}/>
                <p>{this.props.caption}</p>
            </div>
		)
	}
}

var styles = {
   frame : {
       padding: "5px",
       border: "1px solid black",
       width: "100px",
   },
   
   image : {
       width: "100%",
   }
}

export default Image