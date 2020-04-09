import {createStore, bindActionCreators} from 'redux';
import {inc, dec, rnd} from './actions';
import reducer from './reducer';
const initialState = 0;


const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
}

const store = createStore(reducer);
store.subscribe(update);

const { dispatch } = store;
const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
  incDispatch: inc,
  decDispatch: dec,
  rndDispatch: rnd
}, dispatch); 

document
  .getElementById('inc')
  .addEventListener('click', incDispatch);

document
  .getElementById('dec')
  .addEventListener('click', decDispatch);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    
    rndDispatch(payload);
  });

