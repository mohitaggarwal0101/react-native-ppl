import React,{Component} from 'react'
import { View, Text, TextInput } from 'react-native';
import { Form, Button,Input } from 'native-base';
// import ValidationComponent from 'react-native-form-validator';
import ValidationComponent from 'react-native-form-validator';
import Axios from 'axios';


export default class Login extends ValidationComponent{
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      msg:""
    }
  }

  onChange=(key,val)=>{
    this.setState({[key]: val})

    // const alph= /^[a-zA-Z]*$/
    
    // const num= /^[0-9]+$/
    // const phone= /[0-9]|[5]/

    // const mail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    // if(alph.test(val))
    // {
    //   console.warn("valid text")
    // }
    // else
    // {
    //   console.warn("invalid");
    // }

    
  }

  onLogin = ()=>{
    console.log("the state is",this.state)

    const mail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if(this.state.email.length === 0 || this.state.password.length === 0)
    {
      this.setState({msg:"every input field must be filled to login"})
    }
    else if(!(mail.test(this.state.email)))
    {
      this.setState({msg:"email format is incorrect"})
    }
    else
    {
      // console.warn("correct");
      // this.props.history.push()
      console.log("in elseeeeeeeeeeeeeee");
      Axios.post("http://192.168.43.246:8000/login",this.state).then((response)=>{
      console.log(response.data);

      if(response.data.msg === "incorrect info")
      {
        this.setState({msg:"either email-id or password is incorrect"})
      }
      else
      {
        this.setState({msg:"user login successfully"});

        this.props.handleChange(3);
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
        width:155,
      }
    }

  return(
    <View style={{margin: 30}}>
      
      <Form>
      <Text style={{textAlign:"center", fontSize:25}}>Login</Text>
      { this.state.msg.length !=0 && <Text>{this.state.msg}</Text>}

      <View style={style.forView}>
      <Text style={style.forText}>EMAIL-ID:</Text>
      <TextInput ref="email" onChangeText={(value)=> this.onChange("email",value)} placeholder="email-id" style={style.forInput} required="true"/>
      </View>

      <View style={style.forView}>
      <Text style={style.forText}>PASSWORD:</Text>
      <TextInput type="password" secureTextEntry={true} onChangeText={(value)=> this.onChange("password",value)} placeholder="password" style={style.forInput} required/>
      </View>

      {/* <Button title="login" onPress={this.onLogin} style={{marginTop: 20, width:150, alignSelf:"center",borderRadius:15,backgroundColor:"blue", textAlign:"justify",backgroundColor:"lightgreen"}}><Text style={{marginHorizontal:59}}>login</Text></Button> */}
      
      <View style={style.forView}><Text style={style.forText}>if you don't have account, click on sign up</Text></View>

      <View style={style.forView,{flex:1,flexDirection:"row", justifyContent: 'space-between', marginTop:25}}>
      <Button onPress={()=> this.props.handleChange(1)} style={style.forButton}><Text style={{marginHorizontal:35,fontSize:25}}>Sign up</Text></Button>
      <Button title="login" onPress={()=>this.onLogin()} style={style.forButton}><Text style={{marginHorizontal:45,fontSize:25}}>Login</Text></Button>
      </View>

      </Form>
    </View>
  );
  }
};