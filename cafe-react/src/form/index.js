import React from "react";
import './form_index.css';
import { withRouter } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class MenuForm extends React.Component {

  constructor(props){
     super(props);
     this.goHome = this.goHome.bind(this)
     this.state = {
        type: "",
        name: "",
        price: "",
        photo: "",
      };
   }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  goHome() {
    console.log(this.state)
    this.props.history.push('/')
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
            <Input type="select" name="Type" id="type" placeholder="with a placeholder" >
              <option>Side</option>
              <option>Main Course</option>
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