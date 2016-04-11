import React from 'react';
import Title from './Title.jsx';
import Image from './Image.jsx';
import Studentlist from './Studentlist.jsx';
import TextInput from './TextInput.jsx';
import {TagCloud, DefaultRenderer} from "react-tagcloud";


class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {

            names : [
                {name:"Gloria",count:1},
                {name:"KA",count:3},
                {name:"Gary", count:2},
                {name:"Tony", count:1}
                ]
        };
        
        this.addStudent = this.addStudent.bind(this);
    }
    
    addStudent(studentName) {
        let namesCopy = this.state.names.slice(0),
            found = false;
        
        namesCopy.forEach(
            name => {
                if(studentName === name.name){
                    name.count += 1;
                    found = true;
                }
            }
        )
        
        if(found === false){
             namesCopy.push({name:studentName, count: 1});
        }
        
        this.setState({names:namesCopy});
      
        
        
    }

	render(){
        
        let namesCopy = this.state.names.slice(0);
        
        namesCopy.forEach(n => {
            n.value = n.name;
        })
        
		return (
			<div>
                  <TextInput addStudent={this.addStudent}/>
                  <Studentlist studentNames={this.state.names}/>
                   <TagCloud minSize={10} 
                        maxSize={50}
                        tags={namesCopy}  />
            </div>
            
		)
	}
}

export default App