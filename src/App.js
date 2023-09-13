
import './App.css';
import { Divider } from 'antd';
import Menu1 from './Menu1.js';
import Menu2 from './Menu2.js';
import Menu3 from './Menu3.js';
import Button1 from './submitbutton';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
    
        <p>
          我的订单
        </p>
       
      </header>
      <body className="App-contentstyle">
        <p><Menu1 /><Button1/></p>
        <Divider/>
        <p><Menu2 /><Button1/></p>
        <Divider/>
        <p><Menu3 /><Button1/></p>
        <Divider/>
      </body>
      

      
    

    </div>
  );

}

export default App;
