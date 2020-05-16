const defaultState = {
  name: 'home',
  age: 20
}

export default function home(state=defaultState,action){
  switch(action.type){
    case 'FETCH_HOME_NAME':
      return {...state,name:action.payload}
    case 'FETCH_HOME_AGE':
      return {...state,age:action.payload}
    default :
      return state
  }
}

