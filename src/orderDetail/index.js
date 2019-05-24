import React,{ Component } from 'react' 
import { NavBar,Icon } from 'antd-mobile';
import { Switch,Route,Link } from "react-router-dom";

import AnimatedRouter from 'aty-react-router-animated'; //导入我们的的AnimatedRouter组件

import CancelOrder from '../cancelOrder';

class OrderDetail extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	    };
  	}
  	back(){
		this.props.history.goBack();
	}
	componentWillMount() {
    	console.log(this.props.location.pathname.split('/').slice(1, 3).join('/'))
    }
  	render() {
  		const routerRoot = this.props.match.path;
    	return (<div className="container page-help">
	    	<NavBar
			className="dealer-header"
		      icon={<Icon type="left" />}
		      onLeftClick={this.back.bind(this)}
		    >订单详情</NavBar>
	        <div>
	          	订单详情
	          	<Link to={this.props.match.path+"/cancelOrder"}>取消订单</Link>
	        </div>

	        <AnimatedRouter timeout={300}>
				<Route path={routerRoot+"/cancelOrder"}  component={CancelOrder}/>
	        </AnimatedRouter>

    	</div>);
  	}
}

export default OrderDetail