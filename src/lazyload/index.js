import React,{ Component } from 'react'
import { NavBar, Icon,Popover } from 'antd-mobile';
import { connect } from 'react-redux';
import { LazyLoadImage, LazyLoadBackgroundImage } from '@tjoskar/react-lazyload-img'
import load from '../img/load2.svg';

import ImagePreview from 'react-imagepreview'


import './style.scss'
class Lazyload extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	    	iconArr:[
	    		"http://zhansingsong.github.io/lazyimg/22.4582fc71.jpg",
	    		"http://zhansingsong.github.io/lazyimg/bg5.235d796c.png",
	    		"http://zhansingsong.github.io/lazyimg/bg3.ef4f1660.jpg",
	    		"http://zhansingsong.github.io/lazyimg/bg3.ef4f1660.jpg",
	    		"http://zhansingsong.github.io/lazyimg/bg3.ef4f1660.jpg",
	    		"http://zhansingsong.github.io/lazyimg/bg3.ef4f1660.jpg",
	    		"http://zhansingsong.github.io/lazyimg/bg3.ef4f1660.jpg"
	    	]
	    };
	}
	componentDidMount(){
		
	}	
	componentWillMount() { 
    }
    back(){
    	this.props.history.goBack();
    }
	render(){
		const { iconArr } = this.state; 
		return (
			<div className="container page-lazyload">
				<NavBar
				className="lazyload-header"
			      icon={<Icon type="left" />}
			      onLeftClick={this.back.bind(this)}
			    >图片懒加载</NavBar>
			    <div className="lazyload-scroll-wrapper">
			    	{
						iconArr.map((item,index)=>{
							return (
								<div key={index} className="icon-box" onClick={(e) => ImagePreview.show(item, e.target)}>
								      <LazyLoadImage className="lazy" width="100%" defaultImage={load} image={item} />
							    </div>
							)
						})
			    	}
			    </div>
			</div>
		)
	}
}
const mapStateToProps = ( state) => {
	return {};
};
const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Lazyload);
