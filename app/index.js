import { createStore } from 'redux';

//reducers
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC' :
            return state + action.payload;
        case 'DEC' :
            return state - action.payload;
        default :
            return state;
    }
};

//create store
const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("store changed!", store.getState());
});

//actions
store.dispatch({type : 'INC', payload : 1});
store.dispatch({type : 'INC', payload : 3});
store.dispatch({type : 'INC', payload : 5});
store.dispatch({type : 'INC', payload : 7});
store.dispatch({type : 'DEC', payload : 7});