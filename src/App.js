import './App.css';
import PhoneContainer from './components/PhoneContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TvContainer from './components/TvContainer';
import CommentsContainer from './components/CommentsContainer';

function App() {
  return (
    //connexion Redux à React
    //Le <Provider>composant rend le Redux store disponible 
    //pour tous les composants imbriqués qui doivent accéder au magasin Redux.
    //Dans le store il y a Reducer
    //Dans Reducer il y a State
    <Provider store={store}>
    <div className="section-one">
        <PhoneContainer/> 
        <TvContainer/>
        
        
       
    </div>
    <CommentsContainer/>

     </Provider> 
    //connexion Redux à React
  );
}

export default App;
