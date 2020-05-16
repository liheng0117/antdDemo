export function getName (options){
  return {
    type: 'FETCH_HOME_NAME',
    payload: '张三'
  }
}

export function getAge (options){
  return {
    type: 'FETCH_HOME_AGE',
    payload: options
  }
}
