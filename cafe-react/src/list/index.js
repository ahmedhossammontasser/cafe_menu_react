import React, { Component } from 'react';
import logo from './../logo.svg';
import './list_index.css';
import { withRouter } from 'react-router-dom';
import { Button  } from 'reactstrap';



function Item(props) {


  return( <div className='css_image_div'>
        <img src={props.item.url} className="img_color" />
        <div className="item_img text_color">
	        <div className="disply_inline_block ">
	        	{props.item.option}<br/><b>{props.item.name}</b>
	        </div>
	        <div className="float_right">${props.item.price}</div>
	    </div>
      </div> )
}

function MenuList() {
  const menu_list = [ 
  		{ id:1 , url:logo , option:"Main Course" , price:5 , name:"Pizza"},
  		{ id:2 , url:logo , option:"Main Course" , price:10 , name:"Pizza"},
  		{ id:3 , url:logo , option:"Main Course" , price:15 , name:"Pizza"},  		  		
  		{ id:4 , url:logo , option:"Main Course" , price:20 , name:"Pizza"},
  		];

  return (
    <div className='menu_list_div'>
      {menu_list.map((item) => <Item key={item.id} item={item} />)}
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