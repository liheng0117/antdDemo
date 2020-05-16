const detailState = {
  name: 'detail',
  data: []
}

export default function detail(state=detailState,action){
  switch(action.type){
    case 'FETCH_DETAIL_NAME':
      return {...state,data:action.payload.data}
    default :
      return state
  }
}
