import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getName,getAge} from '@/actions/home'
import './style.less'

export default @connect(state => {
	return {
		name: state.home.name,
		age: state.home.age,
	}
},{
	getName,
	getAge,
})

class Home extends Component {
	render() {
		return (
			<div className="home" >
			 
			</div>
		)
	}
}