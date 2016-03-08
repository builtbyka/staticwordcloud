import React from 'react';
import Carrots from './test.jsx';
import Test2 from './Test2.jsx';
import Title from './Title.jsx';
import Image from './Image.jsx';

class App extends React.Component {


	render(){
		return (
			<div>
                  <Title title="Hi there"/>
                  <Title title="Bye there"/>
                  <p>hello John</p>
                  <Carrots/>
                  <Test2/>
                  <Image image="https://upload.wikimedia.org/wikipedia/commons/5/51/Mandarin.duck.arp.jpg" caption="This is a duck"/>
			      <Image image="https://static-secure.guim.co.uk/sys-images/Guardian/About/General/2011/8/1/1312206629446/hen-007.jpg" caption="This is a hen"/>
                  <Image image="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg" caption="This is a cow"/>
            </div>
            
		)
	}
}

export default App