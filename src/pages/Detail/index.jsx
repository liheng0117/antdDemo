import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getName} from '@/actions/detail'

export default @connect(state => {
	return {
		data:state.detail.data,
	}
},{
  getName
})

class Detail extends Component {
  
  render() {
    return (
      <div>
         
      </div>
    )
  }
}
