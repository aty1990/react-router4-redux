import React,{ Component } from 'react' 
import { NavBar,Icon,Tabs, Badge } from 'antd-mobile';
import { Switch,Route,Link } from "react-router-dom";

import OrderDetail from '../orderDetail';

import AnimatedRouter from 'aty-react-router-animated'; //导入我们的的AnimatedRouter组件

import dicon  from '../img/default.png';
import Scroll from 'react-bscroll'

import './style.scss'


const tabs = [
  	{ title: <Badge >全部</Badge> },
  	{ title: <Badge >待签约</Badge> },
  	{ title: <Badge dot>待验车</Badge> },
  	{ title: <Badge>待评价</Badge> }
];

class Order extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	    	list:[1,2,3,4,5,6,7,8,9]
	    };
  	}
  	back(){
		this.props.history.goBack();
	}
	componentWillMount() {
    	console.log(this.props.location.pathname.split('/').slice(1, 6).join('/'))
    }
    toDetail(){
    	this.props.history.push(this.props.match.path+"/orderDetail");
    }
  	render() {
  		const routerRoot = this.props.match.path;
  		const list = this.state.list;
    	return (<div className="container page-order">
	    	<NavBar
			className="dealer-header"
		      icon={<Icon type="left" />}
		      onLeftClick={this.back.bind(this)}
		    >我的购车</NavBar>
	        <div className="order-container">

	          	<Tabs tabs={tabs}
			      	initialPage={0}
			      	onChange={(tab, index) => { console.log('onChange', index, tab); }}
			      	onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
			    >
			      	<div>
			      		{
							list.map((item,index)=>{
								return (
									<div className="item-group" key={index}>
						      			<p className="flex order-title">
						      				<span className="flex grow text-left">上海</span>
						      				<span className="yellow-text">待验车</span>
						      			</p>
						      			<div className="flex order-content">
											<span className="flex"><img src={dicon} alt="" width="90" height="90"/></span>
											<div className="flex grow vertical">
												<p className="title">VELITE6时尚豪华版</p>
												<p className="order-items-desc">外观 <span className="item">深空灰</span></p>
												<p className="order-items-desc">内饰 <span className="item">魅力棕</span></p>
												<p className="order-items-desc">配饰 <span className="item">高级黑</span></p>
											</div>
						      			</div>
						      			<div className="order-btn-group flex text-right">
											<span className="order-item-btn">取消订单</span>
											<span className="order-item-btn">查看征信</span>
											<span className="order-item-btn" onClick={this.toDetail.bind(this)}>订单跟踪</span>
						      			</div>
						      		</div>	
								)
							})
			      		}
			      	</div>
				    <div>
			      		{
							list.map((item,index)=>{
								return (
									<div className="item-group" key={index}>
						      			<p className="flex order-title">
						      				<span className="flex grow text-left">上海</span>
						      				<span className="yellow-text">待验车</span>
						      			</p>
						      			<div className="flex order-content">
											<span className="flex"><img src={dicon} alt="" width="90" height="90"/></span>
											<div className="flex grow vertical">
												<p className="title">VELITE6时尚豪华版</p>
												<p className="order-items-desc">外观 <span className="item">深空灰</span></p>
												<p className="order-items-desc">内饰 <span className="item">魅力棕</span></p>
												<p className="order-items-desc">配饰 <span className="item">高级黑</span></p>
											</div>
						      			</div>
						      			<div className="order-btn-group flex text-right">
											<span className="order-item-btn">取消订单</span>
											<span className="order-item-btn">查看征信</span>
											<span className="order-item-btn" onClick={this.toDetail.bind(this)}>订单跟踪</span>
						      			</div>
						      		</div>	
								)
							})
			      		}
			      	</div>
			      	<div>
			      		{
							list.map((item,index)=>{
								return (
									<div className="item-group" key={index}>
						      			<p className="flex order-title">
						      				<span className="flex grow text-left">上海</span>
						      				<span className="yellow-text">待验车</span>
						      			</p>
						      			<div className="flex order-content">
											<span className="flex"><img src={dicon} alt="" width="90" height="90"/></span>
											<div className="flex grow vertical">
												<p className="title">VELITE6时尚豪华版</p>
												<p className="order-items-desc">外观 <span className="item">深空灰</span></p>
												<p className="order-items-desc">内饰 <span className="item">魅力棕</span></p>
												<p className="order-items-desc">配饰 <span className="item">高级黑</span></p>
											</div>
						      			</div>
						      			<div className="order-btn-group flex text-right">
											<span className="order-item-btn">取消订单</span>
											<span className="order-item-btn">查看征信</span>
											<span className="order-item-btn" onClick={this.toDetail.bind(this)}>订单跟踪</span>
						      			</div>
						      		</div>	
								)
							})
			      		}
			      	</div>
			      	<div>
			      		{
							list.map((item,index)=>{
								return (
									<div className="item-group" key={index}>
						      			<p className="flex order-title">
						      				<span className="flex grow text-left">上海</span>
						      				<span className="yellow-text">待验车</span>
						      			</p>
						      			<div className="flex order-content">
											<span className="flex"><img src={dicon} alt="" width="90" height="90"/></span>
											<div className="flex grow vertical">
												<p className="title">VELITE6时尚豪华版</p>
												<p className="order-items-desc">外观 <span className="item">深空灰</span></p>
												<p className="order-items-desc">内饰 <span className="item">魅力棕</span></p>
												<p className="order-items-desc">配饰 <span className="item">高级黑</span></p>
											</div>
						      			</div>
						      			<div className="order-btn-group flex text-right">
											<span className="order-item-btn">取消订单</span>
											<span className="order-item-btn">查看征信</span>
											<span className="order-item-btn" onClick={this.toDetail.bind(this)}>订单跟踪</span>
						      			</div>
						      		</div>	
								)
							})
			      		}
			      	</div>
			    </Tabs>
	        </div>
	        <AnimatedRouter timeout={300} transitionKey={this.props.location.pathname.split('/').slice(0,6).join('/')}>
				<Route path={routerRoot+"/orderDetail"}  component={OrderDetail}/>
	        </AnimatedRouter>
    	</div>);
  	}
}

export default Order