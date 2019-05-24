import React,{ Component } from 'react' 
import { NavBar,Icon } from 'antd-mobile';
import { Switch,Route,Link } from "react-router-dom";

import Order from '../order';
import AnimatedRouter from 'aty-react-router-animated'; //导入我们的的AnimatedRouter组件

class About extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	    };
  	}
  	back(){
		this.props.history.goBack();
	}
	componentWillMount() {
    	console.log(this.props.location.pathname.split('/').slice(1, 5).join("/"))
    }
	toUser(){
		this.props.history.push(this.props.match.path+"/user");
	}
  	render() {
  		const routerRoot = this.props.match.path;
  		console.log(this.props);
    	return (<div className="container page-help">
	    	<NavBar
			className="dealer-header"
		      icon={<Icon type="left" />}
		      onLeftClick={this.back.bind(this)}
		    >关于我们</NavBar>
	        <div>
	          	<Link to={this.props.match.path+"/order"}>order</Link>
	        </div>
	        <AnimatedRouter timeout={300} transitionKey={this.props.location.pathname.split('/').slice(0,5).join('/')}>
				<Route path={routerRoot+"/order"}  component={Order}/>
	        </AnimatedRouter>
    	</div>);
  	}
}

export default About