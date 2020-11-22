import React , {Component} from 'react';
import './App.css';
// import Message from './node_modules/components/Message';
// import MessageInput from './node_modules/components/MessageInput';
// import User from './node_modules/components/User';
import Chat from './node_modules/container/Chat'
// import MessageList from './node_modules/container/MessageList';

class App extends Component {
  
  render(){
    return (
      <div>
   
        <Chat/>
        
      </div>
    );
  }
  
}

export default App;
