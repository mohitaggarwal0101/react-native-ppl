// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//   return (
//     <View>
//     <Text>hello world

//     </Text>
//     </View>
//   );
//   // enjoy 
//   // Thanks bro party le lunga tu khush rh
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

import React,{Component} from 'react'
import { View, Text, TextInput } from 'react-native';
import { Form, Button,Input } from 'native-base';
import ValidationComponent from 'react-native-form-validator';
// import { Form } from 'react-native-elements';

import Login from './login';
import SignUp from './signup';
import FormTest from './validationForm.js';
import Timeline from "./timeline"
import UploadPost from './upload_post.js';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      // login: false,
      forRenderComp: 2
    }

  }

  handleChange = (val) => {
    this.setState({"forRenderComp":val})
  }
   
  render(){
  return(
    <View>

    {this.state.forRenderComp === 1 && <SignUp handleChange = {this.handleChange}/>}

    {this.state.forRenderComp === 2 && <Login handleChange = {this.handleChange}/>}

    {this.state.forRenderComp === 3 && <Timeline handleChange = {this.handleChange}/>}
    
    {this.state.forRenderComp === 4 && <UploadPost handleChange = {this.handleChange}/>}
    
    {/* <FormTest/> */}
    </View>
  );
  }
};

