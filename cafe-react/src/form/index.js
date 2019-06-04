import React from "react";
import './form_index.css';
import { withRouter } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Firebase from './../firestore';

class MenuForm extends React.Component {

  constructor(props){
     super(props);
     this.saveItem = this.saveItem.bind(this)
     this.uploadImage = this.uploadImage.bind(this)
     this.uniqueId = this.uniqueId.bind(this)
     this.state = {
        type: "Side",
        name: "",
        price: "",
        photo: "",
      };
   }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };


  // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  uniqueId() {
    return 'xxxxx_xxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  saveItem() {
    var unique_id = this.uniqueId()
    
    if (this.state.photo.name) {
      var photo_url = 'images/'+unique_id+'/'+this.state.photo.name
    } else {
      var photo_url = ''
    }

    const firebase_db = Firebase.firestore();
    const menuAddFirebase = firebase_db.collection('menu').add({
      type: this.state.type,
      name: this.state.name,
      price: this.state.price,
      photo: photo_url
    });
    var self = this

    menuAddFirebase.then( result =>{
      if (photo_url != ''){
        var storageRef = Firebase.storage().ref();
        var imagesRef = storageRef.child('images/'+unique_id+'/'+this.state.photo.name);
        imagesRef.put(this.state.photo).then(function(snapshot) {
          self.props.history.push('/')
        });        
      }
      else{
          self.props.history.push('/')        
      }

    }).catch(error => {
      console.log('error')
    })
  }

  uploadImage(event) {
    this.setState({ photo: event.target.files[0] })
  }

  render() {
    return (
      <div className="add_menu_body" >
      <h2 className="h2_text_color">
        Add Menu Item
      </h2>

      <Form>        
        <FormGroup row>
          <Label for="type" sm={2}>Type</Label>
          <Col sm={10}>
            <Input type="select" name="type" id="type"  
                    value={this.state.type}
                    onChange={this.handleChange}
            >
              <option value="Side">Side</option>
              <option value="Main Course">Main Course</option>
            </Input>
          </Col>
        </FormGroup> 

        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input  type="text" name="name" id="name" 
                    value={this.state.name}
                    onChange={this.handleChange}

            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="price" sm={2}>Price</Label>
          <Col sm={10}>
            <Input type="text" name="price" id="price" 
                   value={this.state.price}
                   onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="photo" sm={2}>Photo</Label>
          <Col sm={10}>
            <Input type="file" name="photo" id="photo" onChange={this.uploadImage}/>
          </Col>
        </FormGroup>


        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="primary" onClick={this.saveItem} >Save Item</Button>

          </Col>
        </FormGroup>
      </Form>      
     </div>
    );
  }
}

export default withRouter(MenuForm)