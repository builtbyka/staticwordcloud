import React from 'react';
import Carrots from './test.jsx';
import Test2 from './Test2.jsx';
import Title from './Title.jsx';
import Image from './Image.jsx';
import Studentlist from './Studentlist.jsx';
import Tablelist from './Table.jsx';
import TextInput from './TextInput.jsx';
import {TagCloud, DefaultRenderer} from "react-tagcloud";



class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            names : ["John", "KA", "Elina"],
            tags:[{value:'foo',count:10},{value:'bar',count:10}]
        };
    }
    
    addStudent(studentName) {
        let namesCopy = this.state.names.slice(0);
        namesCopy.push(studentName);
        this.setState({names:namesCopy});
    }

	render(){
		return (
			<div>
                  <TextInput/>
                  <Title title="Hi there"/>
                  <Title title="Bye there"/>
                  <p>hello John & KA</p>
                  <Carrots/>
                  <Test2/>
                  <Studentlist studentNames={this.state.names}/>
                  <Tablelist tableNames={this.state.names}/>
                                 <TagCloud minSize={10} 
                        maxSize={50}
                        tags={this.state.tags}  />
            </div>
            
		)
	}
}

export default App