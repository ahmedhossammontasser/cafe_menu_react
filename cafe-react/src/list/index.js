import React, { Component } from 'react';
import logo from './../logo.svg';
import './index.css';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';



function Item(props) {


  return( <div className='css_image_div'>
        <img src={props.item.url} className="img_color" />
        <div className="item_img text_color">
	        <div className="disply_inline_block ">
	        	{props.item.option}<br/><b>{props.item.name}</b>
	        </div>
	        <div className="float_right">{props.item.price}</div>
	    </div>
      </div> )
}

function MenuList() {
  const menu_list = [ 
  		{ url:logo , option:"Main Course" , price:5 , name:"Pizza"},
  		{ url:logo , option:"Main Course" , price:10 , name:"Pizza"},
  		{ url:logo , option:"Main Course" , price:15 , name:"Pizza"},  		  		
  		{ url:logo , option:"Main Course" , price:20 , name:"Pizza"},
  		];

  return (
    <div className='menu_list_div'>
      {menu_list.map((item) => <Item key={item} item={item} />)}
    </div>
  );
}


class ListComponent extends Component {
  constructor(props) {
    super(props)
    this.goHome = this.goHome.bind(this)
  }

  goHome() {
    this.props.history.push('/form')
  }

  render() {
  	return(

 	<div className="menu_list_body" >  
 		<div className="div_menu_list_body">
 			<h1 className="menu_text_h1">Menu</h1>
			<Button className="right " color="primary" onClick={this.goHome}>Add Menu Item</Button>
	 	</div>
		<MenuList />
 	</div>
  		
    )
  }
}

export default withRouter(ListComponent)