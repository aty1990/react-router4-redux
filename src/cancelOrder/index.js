import React,{ Component } from 'react' 
import { NavBar,Icon } from 'antd-mobile';
import { Switch,Route,Link } from "react-router-dom";

class CancelOrder extends Component {
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
    backOrderList(e){
    	e.preventDefault();
    	e.stopPropagation();
    	this.props.history.go(-2);
    }
  	render() {
  		const routerRoot = this.props.match.path;
    	return (<div className="container page-cancel-order">
	    	<NavBar
			className="dealer-header"
		      icon={<Icon type="left" />}
		      onLeftClick={this.back.bind(this)}
		    >取消订单</NavBar>
	        <div>
	          	取消成功
	          	<div onClick={this.backOrderList.bind(this)}>返回订单列表</div>
	        </div>
    	</div>);
  	}
}

export default CancelOrder