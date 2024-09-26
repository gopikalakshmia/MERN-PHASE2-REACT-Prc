import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld';
import Greeting from './components/greeting';
import LoggedIn from './components/loggedin';
import StyleComponent from './components/stylecomponent';
import Button from './components/button';
import NumberList from './components/numberList';
import NumList from './components/numList';
import Count from './components/count';
import Toggle from './components/Toggle';
import UserInfo from './components/userInfo';
import UserInfoObj from './components/useInfoObj';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld/>
      <Greeting/>
      <LoggedIn/>
      <StyleComponent/>
      <Button/>
      <NumberList/>
      <NumList/>
      <Count/>
      <Toggle/> */}
      <UserInfoObj/>
    </div>
  );
}

export default App;
