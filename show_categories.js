import React,{Component} from 'react'
import { View, Text, TextInput,Image ,ScrollView } from 'react-native';
import { Form, Button,Input } from 'native-base';
import ValidationComponent from 'react-native-form-validator';
import Axios from 'axios';
import ImagePicker from 'react-native-image-picker'

export default class ShowCategory extends React.Component{
    constructor(props){
      super(props);
    };

      render(){
        return(
          <ScrollView >

            <View style={{width:370,margin:6,borderWidth:5,borderRadius:12,borderColor:"grey",backgroundColor:"lightblue"}}>

            <Text style={{textAlign:"center", fontSize:30,margin:10,fontFamily:"fantasy"}}>Categories</Text>

            <Text style={{backgroundColor:"grey",height:5}}></Text>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2, }}>

                  <Image source={require('./images/icon_02.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3,}}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Dogs</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2, }}>

                  <Image source={require('./images/icon_01.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3, }}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Cats</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2,}}>

                  <Image source={require('./images/icon_05.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3,}}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Horses</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2,}}>

                  <Image source={require('./images/icon_03.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3, }}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Parrots</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2, }}>

                  <Image source={require('./images/icon_04.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3,}}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Others</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2, }}>

                  <Image source={require('./images/icon_02.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3,}}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Dogs</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2, }}>

                  <Image source={require('./images/icon_01.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3, }}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Cats</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2,}}>

                  <Image source={require('./images/icon_05.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3,}}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Horses</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2,}}>

                  <Image source={require('./images/icon_03.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3, }}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Parrots</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>

              <View>
              <View style={{height:100, backgroundColor:"lightgreen", flexDirection:"row",marginTop:0}}>
                <View style={{flex:2, }}>

                  <Image source={require('./images/icon_04.png')} style={{width:100,height:90,marginTop:5,marginLeft:20,borderRadius:40}} />
                
                </View >
                
                <View style={{flex:3,}}>
                  
                  <Text style={{fontFamily:"arial",textAlign:"center",fontSize:25,marginTop:10}}>Others</Text>

                </View>
              </View>
              
              <Text style={{backgroundColor:"grey",height:5}}></Text>
              </View>  

              <Button onPress={()=>this.props.handleChange(3)} style={{backgroundColor:"lightblue",borderRadius:5}}><Text style={{marginLeft:75, fontSize:30,margin:10,fontFamily:"fantasy"}}>Back To Home</Text></Button>

            </View>

          </ScrollView>
        )
      }

}