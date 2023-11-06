import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "./Head";
import { BrowserRouter,Route } from 'react-router-dom';
import Bisection from './components/Bisection';
import FalsePosition from './components/FalsePosition';
import NewtonRaphson from './components/NewtonRaphson';
import OnePoint from './components/OnePoint';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Head/>
        <main>
          <Route path='/' component={Bisection} exact/>
          <Route path='/FalsePosition' component={() => <FalsePosition/>}/>
          <Route path='/OnePoint' component={() => <OnePoint/>}/>
          <Route path='/NewtonRapshon' component={() => <NewtonRaphson/>}/>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;


