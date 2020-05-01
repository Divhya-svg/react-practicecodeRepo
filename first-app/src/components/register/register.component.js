import React,{Component} from 'react';
import {Form,Input,Label,FormGroup,FormFeedback,Button} from 'reactstrap';
import {isEmail} from 'validator';

class Register extends Component{
    constructor(props){
        super(props);

        this.state=this.getInitialState();
           
        
    }
    getInitialState =() =>({
        data:{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        errors:{}
    });

    handleChange =(e) =>{
        this.setState({
            data:{
                //get everything from data spreading through entire object of the state and putting all values in state
                ...this.state.data,
                [e.target.name]: e.target.value//overriding currently changed element
            },
            errors:{
                ...this.state.errors,
                [e.target.name]:''
            }
        })
    }
    validate = () =>{
        const {data} = this.state;

        let errors={};

        if(data.firstName === '') errors.firstName='First Name cannot be blank.';
        if(data.lastName === '') errors.lastName='Last Name cannot be Blank.';
        if(!isEmail(data.email)) errors.email='Email must be valid.';
        if(data.email ==='')errors.email='Email cannot be blank';
        
        if(data.password === '') errors.password='Password must be valid.';
        if(data.confirmPassword !== data.password) errors.confirmPassword='Passwords must match.';
        return errors;
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        
        const {data} =this.state;
        const errors =this.validate();
        if(Object.keys(errors).length===0)//if no errors
        {
            console.log(data);
            //call api here
            //Resetting the form
            this.setState(this.getInitialState())
        }else{
            this.setState({errors});
        }
       
    }
    render(){
        const {data,errors}=this.state
        return(
            <Form onSubmit={this.handleSubmit}>
               <FormGroup>
                   <Label form="firstName">First Name</Label>
                   <Input id="firstName" value={data.firstName} invalid={errors.firstName ? true:false}
                   name="firstName"
                   onChange={this.handleChange}
                   />
                   <FormFeedback>{errors.firstName}</FormFeedback>
               </FormGroup>
               <FormGroup>
                   <Label form="lastName">Last Name</Label>
                   <Input id="lastName" value={data.lastName} invalid={errors.lastName ? true:false}
                   name="lastName"
                   onChange={this.handleChange}
                   />
                   <FormFeedback>{errors.lastName}</FormFeedback>
               </FormGroup>
               <FormGroup>
                   <Label form="email">Email</Label>
                   <Input id="email" value={data.email} invalid={errors.email ?true:false}
                   name="email"
                   onChange={this.handleChange}
                   />
                   <FormFeedback>{errors.email}</FormFeedback>
               </FormGroup>
               <FormGroup>
                   <Label form="password">Password</Label>
                   <Input id="password" value={data.password} type="password" invalid={errors.password ? true:false}
                   name="password"
                   onChange={this.handleChange}
                   />
                   <FormFeedback>{errors.password}</FormFeedback>
               </FormGroup>
               <FormGroup>
                   <Label form="confirmPassword">Confirm Password</Label>
                   <Input id="confirmPassword" type="password" value={data.confirmPassword} invalid={errors.confirmPassword ? true:false}
                   name="confirmPassword"
                   onChange={this.handleChange}
                   />
                   <FormFeedback>{errors.confirmPassword}</FormFeedback>
               </FormGroup>
               <Button color="primary">Register</Button>
            </Form>
        )
    }
}
export default Register;