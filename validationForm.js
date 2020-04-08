// // 'use strict';
 
// import React, {Component}  from 'react';
// import {View, Text, TextInput, TouchableHighlight} from 'react-native';
// import ValidationComponent from 'react-native-form-validator';
// import { Button } from 'native-base';
 
// export default class FormTest extends ValidationComponent {
 
//   constructor(props) {
//     super(props);
//     this.state = {name : "My name", email: "tibtib@gmail.com", number:"56", date: "2017-03-01"};
//   }
 
//   _onPressButton() {
//     // Call ValidationComponent validate method

//     this.validate({
//       name: {minlength:3, maxlength:7, required: true},
//       email: {email: true, required: true},
//       number: {numbers: true, required: true },
//       date: {date: 'YYYY-MM-DD', required: true}
//     });
//   }
 
//   render() {
//       return (
//         <View>
//           <TextInput  onChangeText={(name) => this.setState({"name":name})}  />
//           <TextInput  onChangeText={(email) => this.setState({"email":email})} value={this.state.email} />
//           <TextInput  onChangeText={(number) => this.setState({"number":number})} value={this.state.number} />
//           <TextInput  onChangeText={(date) => this.setState({"date":date})} value={this.state.date} />
//           {/* {this.isFieldInError('date') && this.getErrorsInField('date').map(errorMessage => <Text>{errorMessage}</Text>) } */}
 
//           {/* <TouchableHighlight onPress={this._onPressButton}> */}
//           <Button onPress={this._onPressButton} style={{ title:"Hello", backgroundColor:"red"}}/><Text>Submit</Text>
//           {/* </TouchableHighlight> */}
 
//           <Text>
//             {/* {this.getErrorMessages()} */}
//             ckm
//           </Text>
//         </View>
//       );
//   }
 
// }

import React, { Component } from 'react';
import { AppRegistry, View, Text} from 'react-native';

export default class FormTest extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      // <View style={{backgroundColor:"red",width:370,height:100}}>
      //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      //   <View style={{flex: 1, backgroundColor: 'steelblue'}} /> 
      //    {/* <Text>njs</Text> */}
      // </View>

      <View>

      </View>
    );
  }
}