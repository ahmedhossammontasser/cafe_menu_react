import React from "react";
import './form_index.css';
import { withRouter } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Firebase from './../firestore';

class MenuForm extends React.Component {

  constructor(props){
     super(props);
     this.goHome = this.goHome.bind(this)
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

  goHome() {
    const firebase_db = Firebase.firestore();
    const menuAddFirebase = firebase_db.collection('menu').add({
      type: this.state.type,
      name: this.state.name,
      price: this.state.price,
      photo: this.state.photo
    });

    menuAddFirebase.then( result =>{      
      this.props.history.push('/')
    }).catch(error => {
      console.log('error')
    })
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
            <Input type="file" name="photo" id="photo" />
          </Col>
        </FormGroup>


        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="primary" onClick={this.goHome} >Save Item</Button>

          </Col>
        </FormGroup>
      </Form>      
     </div>
    );
  }
}

export default withRouter(MenuForm)