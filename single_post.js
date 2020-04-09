import React,{Component} from 'react'
import { View, Text, TextInput,Image,ScrollView, FlatList } from 'react-native';
import { Form, Button,Input } from 'native-base';
// import ValidationComponent from 'react-native-form-validator';
import ValidationComponent from 'react-native-form-validator';
import Axios from 'axios';


export default class SinglePost extends React.Component{
    constructor(props){
        super(props);

        var dat = new Date();

        this.state = {
            date: dat.toString().slice(8, 10) + " " + dat.toString().slice(4, 7) + " " + dat.toString().slice(11, 15),
            time: dat.toString().slice(16, 24)
        }
    };

    render(){
        return(
            <View>
            <ScrollView>
            <View>
            
            <View>
                <View style={{height:70,backgroundColor:"lightgreen"}}>
                <Text style={{textAlign:"center", fontSize:30,margin:10,fontFamily:"fantasy"}}>Single Post</Text>
                </View>

                <View style={{marginTop:20 ,marginLeft:2}}>
                    <View style={{ width:380,borderBottomColor:"oranged",borderTopColor:"lightgreen",borderBottomWidth:0,borderTopWidth:3,marginRight:2,height:400}}>
                        
                        <View style={{backgroundColor:"lightblue",flex:1 ,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{marginLeft:10,marginTop:10}}>Mohit aggarwal</Text>
                            <Text style={{marginRight:10,marginTop:10}}>Dogs</Text>
                        </View>

                        <View style={{backgroundColor:"lightgrey",flex:1 ,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{marginLeft:10,marginTop:10}}>{this.state.date}</Text>
                            <Text style={{marginRight:10,marginTop:10}}>{this.state.time}</Text>
                        </View>

                        <Image source={require('./images/feat_img1.png')} style={{height:150,width:381,flex:7}} />
                        
                        {/* <Text style={{marginLeft:5,flex:1}}>three little cats</Text> */}
                        
                        <View style={{backgroundColor:"yellomw",flex:1 ,flexDirection:"row",justifyContent:"flex-start"}}>
                            <Button style={{marginLeft:4,width:100,backgroundColor:"white",height:40}}><Text>  0 Likes</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white",height:40}}><Text>  0 comments</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white",height:40}}><Text>  0 share</Text></Button>
                        </View>
                    </View>
                </View>

                
            </View>     

            {/* <View style={{width:340,marginLeft:20,marginTop:10,backgroundColor:"red",height:30}}>
            </View> */}
            
            <View style={{marginLeft:20,marginTop:10}}>
            <Text style={{fontSize:20}}>Add Comment:</Text>
            <TextInput style={{borderWidth:4,borderRadius:5,width:340,height:40,borderColor:"lightblue"}}></TextInput>
            <Button style={{width:100,marginTop:5,borderRadius:15,backgroundColor:"lightblue"}}><Text style={{marginLeft:17,fontSize:20}}>Submit</Text></Button>
            </View>

            <View style={{marginLeft:20,marginTop:10}}>
            <Text style={{fontSize:15 }}>mohit aggarwal</Text>
            <Text style={{borderWidth:3,borderRadius:5,width:340,borderColor:"lightblue",padding:7}}>cmsakcmsamksc </Text>
            </View>

            <View style={{marginLeft:20,marginTop:10}}>
            <Text style={{fontSize:15 }}>raghu</Text>
            <Text style={{borderWidth:3,borderRadius:5,width:340,borderColor:"lightblue",padding:7}}>cmsakcmsamksc k,mv  nsdjnsdvjvsdj    ksdnvk  vmsd kvsdk ov jvsdjivsdo</Text>
            </View>
            
            <View style={{marginLeft:20,marginTop:10}}>
            <Text style={{fontSize:15 }}>pranjay</Text>
            <Text style={{borderWidth:3,borderRadius:5,width:340,borderColor:"lightblue",padding:7}}>cmsakcmsammvkmsdkmvdksc </Text>
            </View>

            <View style={{marginLeft:20,marginTop:10}}>
            <Text style={{fontSize:15 }}>sumit</Text>
            <Text style={{borderWidth:3,borderRadius:5,width:340,borderColor:"lightblue",padding:7}}>cmsakc </Text>
            </View>

            <View style={{height:40,backgroundColor:"lightgreen",alignSelf:"stretch",marginTop:20}}></View>
            
            
            </View>
            </ScrollView>
            </View>
            
        )
    }
}