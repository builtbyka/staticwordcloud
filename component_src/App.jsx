import React from 'react';
import Carrots from './test.jsx';
import Test2 from './Test2.jsx';
import Title from './Title.jsx';
import Image from './Image.jsx';
import Studentlist from './Studentlist.jsx';

import TextInput from './TextInput.jsx';

class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            names : [
                {name:"John",count:1},
                {name:"KA",count:3},
                {name:"Elina", count:2}
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
		return (
			<div>
                  <TextInput addStudent={this.addStudent}/>
                  <Title title="Hi there"/>
                  <Title title="Bye there"/>
                  <p>hello John and KA</p>
                  <Carrots/>
                  <Test2/>
                  <Studentlist studentNames={this.state.names}/>
                  
            </div>
            
		)
	}
}

export default App