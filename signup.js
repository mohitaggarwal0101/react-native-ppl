import React,{Component} from 'react'
import { View, Text, TextInput } from 'react-native';
import { Form, Button,Input, Row, ListItem } from 'native-base';
import ValidationComponent from 'react-native-form-validator';

import Axios from 'axios';
// ab bhai step  by step check kr nahi aata toh mujhse puch ok ?
// thik h sir thanku

export default class Signup extends React.Component{
  constructor(props){
    super(props);

    this.state = {

      username:"",
      password:"",
      email:"",
      fname:"",
      lname:"",
      msg:"",
      forMail:""

    }
  }

  onChange=(key,val)=>{
    this.setState({[key]: val})
    
  }

  onSignUp = ()=>{
    console.log("the state is",this.state)

    // const alph=/^[a-zA-Z]*$/
    const mail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    // const phn=/^\d{10}$/
    // const age=/^[0-9]{1,2}[:.,-]?$/

    if(this.state.fname.length === 0 || this.state.lname.length === 0 || this.state.email.length === 0 || this.state.username.length === 0 || this.state.password.length === 0)
    {
      this.setState({msg:"every input field must be filled to sign up"})
      this.setState({forMail:""});
    }
    else if(!(mail.test(this.state.email)))
    {
      this.setState({forMail:"invalid email-id"});
      this.setState({msg:""});
    }
    else
    {
      Axios.post("http://192.168.43.246:8000/signUp",this.state).then((response)=>{
      console.log("data on frontend",response.data);

      if(response.data.msg === "user exists")
      {
        console.log(response.data.msg);

        this.setState({forMail:"email already exists"})
        this.setState({msg:""})
      }
      else
      {
        console.log("user created successfully");

      }
    })
    }
    
  }
  
  render(){

    let style={
      forView:{
        marginTop:15
      },

      forText:{
        marginLeft:6
      },

      forInput:{
        height: 40,
        borderRadius: 10, 
        borderWidth: 2
      },

      forButton:{
        borderRadius:15,
        backgroundColor:"lightgreen",
        width:140,
      }
    }

  return(
    <View style={{margin: 30}}>
    
      <Form>
      <Text style={{textAlign:"center", fontSize:25}}>Sign up</Text>
      { this.state.msg.length != 0 && <Text>{this.state.msg}</Text>}

      <View style={style.forView}>
      <Text style={style.forText}>Username:</Text>
      <TextInput type="text" onChangeText={(value)=> this.onChange("username",value)} placeholder="enter your name" style={style.forInput}/>
      </View>
      
      <View style={style.forView}>
      <Text style={style.forText}>Password:</Text>
      <TextInput onChangeText={(value)=> this.onChange("password",value)} placeholder="password" style={style.forInput} />
      </View>

      <View style={style.forView}>
      <Text style={style.forText}>Email-id:</Text>
      <TextInput onChangeText={(value)=> this.onChange("email",value)} placeholder="enter your email" style={style.forInput}/>
      </View>

      <View style={style.forView}>
      <Text style={style.forText}>First name:</Text>
      <TextInput onChangeText={(value)=> this.onChange("fname",value)} placeholder="First name" style={style.forInput}/>
      </View>

      <View style={style.forView}>
      <Text style={style.forText}>Last name:</Text>
      <TextInput onChangeText={(value)=> this.onChange("lname",value)} placeholder="Last name" style={style.forInput}/>
      </View>

      {/* <Button title="Signup" onPress={this.onSignUp} style={{marginTop: 20, width:150, alignSelf:"center",borderRadius:15,backgroundColor:"lightgreen"}}><Text style={{ marginLeft:50}}>Sign up</Text></Button> */}
      {/* <ul>
        <li><Text>ncs</Text></li>
      </ul> */}
      {/* <ListItem title="vsdk" subtitle={"sdvj"}><Text>dvs</Text></ListItem> */}
      
      <View style={style.forView}><Text style={style.forText}>if you already have an account, click on login</Text></View> 

      <View style={style.forView,{flex:1,flexDirection:"row", justifyContent: 'space-around', marginTop:15}}>
      <Button onPress={()=>this.onSignUp()} style={style.forButton}><Text style={{marginHorizontal:25,fontSize:25}}>Sign up</Text></Button>
      <Button title="login" onPress={()=>this.props.handleChange(2)} style={style.forButton}><Text style={{marginHorizontal:35,fontSize:25}}>Login</Text></Button>
      </View>

      

      </Form>
     
    </View>  
  );
  }
};