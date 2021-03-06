import React,{ Component } from 'react'
import { NavBar, Icon,Button,List,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import car from '../img/car.png';
import { connect } from 'react-redux';
import { get } from "../util/request"
import { Link,Switch,Route } from "react-router-dom";
import Dealer from '../dealer';
import Help from '../help';
import "./style.scss";

import AnimatedRouter from 'aty-react-router-animated'; //导入我们的的AnimatedRouter组件

import Picker from 'react-picker-address';
import 'react-picker-address/dist/react-picker-address.css';

const Item = List.Item;
const Brief = Item.Brief;


class Test extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	visible: false,
	    	cityObj:[]
	    };
  	}
	omponentDidMount() {

    }	
    componentWillMount() {

  	// 	get("https://cms.sgmlink.com/ibuick/spage/build/mock/test.json").then(data => {
			// this.props.initUserInfo(data)
  	// 	})
   //  	get("https://cms.sgmlink.com/ibuick/spage/build/mock/data.json").then(data => {
			// this.setState({
			// 	cityObj : [data]
			// })
  	// 	})

		get("http://localhost:8989/mock/test.json").then(data => {
			this.props.initUserInfo(data)
  		})
    	get("http://localhost:8989/mock/data.json").then(data => {
			this.setState({
				cityObj : data
			})
  		})
    }
    back(){
    	this.props.history.goBack();
    }
    chooseDealer(){
    	this.props.history.push(this.props.match.path+"/dealer");
    }
    help(){
    	this.props.history.push(this.props.match.path+"/help");
    }
    submit(){
    	Toast.success('预约成功', 1, () => {
		    this.back();
		});
    }	
    showPicker = () => {
    	this.setState({
      		visible: true,
    	});
  	}
  	hidePicker = () => {
	    this.setState({
	      	visible: false
	    });
  	}
  	onChange = (value, selectedRows) => {
	    this.setState({
	      	visible: false
	    })
	    this.props.setCityName(selectedRows[2].title,selectedRows[2].value)
  	}
	render(){
		const { getFieldProps } = this.props.form;
		const { userName,phone,cityName,dealerName} = this.props.test;
		const routerRoot = this.props.match.path;
		console.log(routerRoot+"/")
		return (
			<div className="container page-test">
				<div className="header-nav">
					<span className="back-icon" onClick={this.back.bind(this)}><Icon type='left'/></span>
					<span className="header-title">预约试驾</span>
					<span className="menu-icon" onClick={this.help.bind(this)}><Icon type='ellipsis'/></span>
				</div>
				<div className="default-img"><img src={car} alt="" width="100%"/></div>
				<div>
					<List renderHeader={() => '预约试驾'} className="my-list">
			        	<Item extra={userName}>真实姓名</Item>
			        	<Item extra={phone}>联系电话</Item>
			        	<Item extra={cityName} arrow="horizontal" onClick={this.showPicker.bind(this)}>城市</Item>
			        	<Item extra={dealerName} arrow="horizontal" onClick={this.chooseDealer.bind(this)}>购车经销商</Item>
			      	</List>
			      	<div className="commit-btn-wrapper">
			      		<Button type={(!userName || !cityName || !phone || dealerName=="请选择")?"default":"primary"} disabled={!userName || !cityName || !phone || dealerName=="请选择"} onClick={this.submit.bind(this)}>确认提交</Button>
			      	</div>
				</div>
				<Picker 
		          	visible={this.state.visible} 
		          	title="选择购车城市"
		          	onClose={this.hidePicker} 
		          	dataSource={this.state.cityObj} 
		          	onChange={this.onChange}
		        />
		        <AnimatedRouter>
		            <Route path={routerRoot+"/help"} 	component={Help}/>
	         		<Route path={routerRoot+"/dealer"} 	component={Dealer}/>
	          	</AnimatedRouter>
 			</div>
		)
	}
}
const mapStateToProps = (testState = []) => {
	return {test:testState.test};
};
const mapDispatchToProps = (dispatch) => {
	return {
		initUserInfo:(userInfo)=>{
			dispatch({
				type:'INIT_USER_INFO',
				userInfo
			});
		},
		setCityName: (cityName) => {
			dispatch({
				type:'SET_CITY_NAME',
				cityName:cityName
			});
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(createForm()(Test));