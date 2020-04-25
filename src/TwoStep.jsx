import React, { Component } from 'react'
import {Form, Button, Container, FormGroup, Label, Input} from 'reactstrap';
import './phonerow.css';
export default class TwoStep extends Component {
    constructor(props){
        super(props);
        this.state = {
        RegistrationCode: "",
        handshake: "",
        phone: "",
        status: "",
        };
        this.handleCode = this.handleCode.bind(this);
        this.handleSMS = this.handleSMS.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhone = this.handlePhone.bind(this); 
    }
  
    componentDidMount(){
        let RegistrationCode = Math.floor(9877587600+Math.random()*9000);
        this.setState({
            RegistrationCode
        });
    }
    handleSubmit = evt => {

    }
    handleSMS = async(evt) =>{
        this.setState({
            status: "sending text message"
        });
        let message = {
            number: this.state.phone,
            message: 'Your code is '+ this.state.RegistrationCode,
            subject:'test'
        }
        evt.preventDefault();
        await fetch(
          "https://ajpu0i9be8.execute-api.us-east-1.amazonaws.com/dev",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
          }
        );
        this.setState({
            status: "text sent."
        })
    }
    handleCode = async (evt) =>{
        this.setState({
            status:""
        });
        if(evt.target.value.toString() === this.state.RegistrationCode.toString()){
            this.setState({
             handshake:"OK"   
            });
        }
    }
    handlePhone = async (evt) => {
        let value = evt.target.value;
        this.setState({
            phone: "+1"+value
        });
    }
    render() {
        return (
          <div>
            <Container className="col-12 border phonerow">
              <div className="row">
                <div className="col-12">
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <div className="row">
                      <div className="col-12">
                        <Label htmlFor="phone">
                          <h3>CellPhone</h3>
                        </Label>
                      </div>
                      <div className="col-12">
                        <Input
                          type="phone"
                          name="phone"
                          id="phone"
                          placeholder="Enter phone number"
                          required
                          onChange={this.handlePhone}
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="row">
                      <div className="col-6">
                        <Button
                          className="btn btn-block btn-success"
                          onClick={this.handleSMS}
                        >
                          Send text message
                        </Button>
                      </div>
                      <div className="col-6">
                        <Input
                          type="text"
                          name="code"
                          id="code"
                          placeholder="Enter code"
                          onChange={this.handleCode}
                          required
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="text-danger">
                        {this.state.handshake === "OK" ? 'Your code is valid':''}
                    </div>
                  </FormGroup>
                  <h4 className="status-update">{this.state.status}</h4>
                </Form>
                </div>
              </div>
            </Container>
          </div>
        );
    }
}
