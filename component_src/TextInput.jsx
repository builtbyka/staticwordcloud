import React from 'react';


class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.addStudent = this.addStudent.bind(this);
    }
    
    addStudent(){
       this.props.addStudent(this.refs.student);
    }

	render(){
              
		return (
            <div>
                <input type="text" ref="student" />
                <button onClick={this.addStudent} >Add Student</button>
            </div>
		)
	}
}


export default TextInput