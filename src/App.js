import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Greet } from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import Eventbind from './components/Eventbind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
      {/* <NameList />
      <UserGreeting />
      <ParentComponent /> <br/>
      <Eventbind />
      <FunctionClick />
      <ClassClick />
      <Greet name="Jignesh" heroName="IRON MAN" >
        <p>This is test example</p>
      </Greet>
      <Greet name="Vidhi" heroName="Wonder woman" >
        <button>Submit</button>
      </Greet>

      <Welcome name="class1" />
      <Welcome name="class2" />
      <Welcome name="class3" />
      <Message />
      <Counter /> */}
    </div>
  );
}

export default App;
