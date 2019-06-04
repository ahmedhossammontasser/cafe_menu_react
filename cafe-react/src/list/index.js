import React, { Component } from 'react';
import logo from './../logo.svg';
import './list_index.css';
import { withRouter } from 'react-router-dom';
import { Button  } from 'reactstrap';
import Firebase from './../firestore';


function Item(props) {


  return( <div className='css_image_div'>
        <img src={props.item.url} className="img_color" alt="props.item.url"/>
        <div className="item_img text_color">
	        <div className="disply_inline_block ">
	        	{props.item.type}<br/><b>{props.item.name}</b>
	        </div>
	        <div className="float_right">${props.item.price}</div>
	    </div>
      </div> )
}

// function MenuList() {
class MenuList extends Component {

  constructor(props) {
    super(props)
  	this.menu_list = [];
    console.log('process.env.REACT_APP_DEV_API_URL');
    console.log(process.env.REACT_APP_DEV_API_URL);  	

	const firebase_db = Firebase.firestore();
	var menuRef = firebase_db.collection('menu');
	// var getDoc = menuRef.get()
	menuRef.get().then(snapshot => {
		    if (snapshot.empty) {
		      console.log('No matching documents.');
		      return;
		    }  
		    snapshot.forEach(doc => {
		      if (doc.data().name) {
		      	  var data = doc.data()
			      this.menu_list.push(  { id:doc.id , url: logo , type:data.type , price:data.price , name:data.name }  )
		      }
		    });
			this.setState( this.menu_list)		    

	  })
	  .catch(err => {
	    console.log('Error getting document', err);
	  });

  }


  render() {
	  return (
	    <div className='menu_list_div'>
	      {this.menu_list.map((item) => <Item key={item.id} item={item} />)}
	    </div>
	  );
	}
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