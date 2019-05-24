import React,{ Component } from 'react' 
import { NavBar,Icon,Popover,Button } from 'antd-mobile';
import { Switch,Route,Link } from "react-router-dom";

import Help from '../help';
import Order from '../order';

import AnimatedRouter from 'aty-react-router-animated'; //导入我们的的AnimatedRouter组件


import dicon  from '../img/default.png';
import inter  from '../img/inter.png';
import color  from '../img/color.png';

import './style.scss'

const Item = Popover.Item;

class CarConfig extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	    	visible: false,
	    	showPopFlag:false,
        	selected: ''
	    };
  	}
  	back(){
		this.props.history.goBack();
	}
	componentWillMount() {
    	console.log(this.props.location.pathname.split('/').slice(1, 6).join('/'))
    }
    onSelect = (opt) => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
        if(opt.props.value==1){
            this.props.history.push(this.props.match.path+"/help");
        }
        if(opt.props.value==2){
            this.props.history.push("/carlist/options/about");
        }
    }
    handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
    }
    next(){
    	this.props.history.push(this.props.match.path+"/order");
    }
    reset(){
    	this.props.history.go(-2);
    }
    changeConfig(){
    	this.setState({
          	showPopFlag:true
        });
    }
    closePopover(){
    	this.setState({
          	showPopFlag:false
        });
    }
  	render() {
  		const routerRoot = this.props.match.path;
    	return (<div className="container page-car-config">
	    	<NavBar
				className="dealer-header"
		      	icon={<Icon type="left" />}
		      	onLeftClick={this.back.bind(this)}
		      	rightContent={
			      	<Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={[
                          (<Item key="1" value="1">帮助文档</Item>),
                          (<Item key="2" value="2" >关于我们</Item>),
                        ]}
                        align={{
                          overflow: { adjustY: 0, adjustX: 0 },
                          offset: [-10, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                      >
                        <div style={{
                          height: '100%',
                          padding: '0 15px',
                          marginRight: '-15px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        >
                          <Icon type="ellipsis" />
                        </div>
                  	</Popover>
			    }
		    >购车意向</NavBar>
	        <div className="car-config-content-wrapper">
	          	<div className="flex config-title">
					<span className="flex grow text-left">整车配置</span>
					<span className="flex reset-config" onClick={this.reset.bind(this)}>重新选择</span>
	          	</div>
	          	<div className="config-list-wrapper">
	          		<ul>
	          			<li className="flex">
	          				<span className="flex"><img src={dicon} alt="" width="50" height="50"/></span>
	          				<span className="flex grow text-left">
	          					<span className="text-title">VELITE 226</span>
	          					<span className="sub">(配置)</span>
	          				</span>	
	          			</li>
	          			<li className="flex">
	          				<span className="flex"><img src={color} alt="" width="50" height="50"/></span>
	          				<span className="flex grow text-left">
	          					<span  className="text-title">星空灰</span>
	          					<span  className="sub">(外观)</span>
	          				</span>	
	          				<span className="flex change-btn" onClick={this.changeConfig.bind(this)}>更改</span>
	          			</li>
	          			<li className="flex">
	          				<span className="flex"><img src={inter} alt="" width="50" height="50"/></span>
	          				<span className="flex grow text-left">
	          					<span  className="text-title">纯粹艺术</span>
	          					<span  className="sub">(内饰)</span>
	          				</span>	
	          				<span className="flex change-btn" onClick={this.changeConfig.bind(this)}>更改</span>
	          			</li>
	          		</ul>
	          	</div>
	          	<div className="flex config-title">
					<span className="flex grow text-left">
						<span>购车方案</span><span className="gray-text">(具体政策请咨询当地经销商为准)</span>
					</span>
	          	</div>
	          	<div className="active-wrapper flex">
					<span className="flex"><img src={inter} alt="" width="40" height="40"/></span>
					<span className="flex grow text-left vertical content">
						<p className="title">10%首付 月供2999元</p>
						<p className="sub-title">融租方案</p>
					</span>
	          	</div>

	          	<div className="active-wrapper flex">
					<span className="flex"><img src={inter} alt="" width="40" height="40"/></span>
					<span className="flex grow text-left vertical content">
						<p className="title">24期0息</p>
						<p className="sub-title">金融方案</p>
					</span>
	          	</div>

	          	<div className="active-wrapper flex">
					<span className="flex"><img src={inter} alt="" width="40" height="40"/></span>
					<span className="flex grow text-left vertical content">
						<p className="title">6000元置换补贴</p>
						<p className="sub-title">可与融租或金融方案同享</p>
					</span>
	          	</div>

	          	<div className="gray-text desc">*实际购车价格以经销商购车合同金额为准</div>


	          	<div className="fixed-btn-to-bottom flex">
	          		<Button className="flex grow" type="primary" onClick={this.next.bind(this)}>提交意向</Button>
	          	</div>

	          	<div className={["popover-from-bottom",this.state.showPopFlag?"show-popover":""].join(' ')} >
	          		<div className="mask-div"></div>
	          		<div className="bottom-area flex" onClick={this.closePopover.bind(this)}>
							123123123123
	          		</div>
	          	</div>


	        </div>
	        <AnimatedRouter timeout={300} transitionKey={this.props.location.pathname.split('/').slice(0,5).join('/')}>
				<Route path={routerRoot+"/help"}  component={Help}/>
				<Route path={routerRoot+"/order"}  component={Order}/>
	        </AnimatedRouter>
    	</div>);
  	}
}

export default CarConfig