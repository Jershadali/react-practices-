
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Input from './components/input';
import './Input.css';
  function App() {
        return (
      <div className='App-header'>
        <Header>
          wellcome to my tech world
        </Header>
      <Input className='input'>
      enter email adreess
      </Input> 
      <Footer className="footer">
          this is footer
        </Footer>
      </div>
    );
    
    }
  

export default App;
