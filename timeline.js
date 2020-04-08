import React,{Component} from 'react'
import { View, Text, TextInput,Image,ScrollView, FlatList } from 'react-native';
import { Form, Button,Input } from 'native-base';
// import ValidationComponent from 'react-native-form-validator';
import ValidationComponent from 'react-native-form-validator';
import Axios from 'axios';


export default class Timeline extends React.Component{
    constructor(props){
        super(props);

    };

    render(){
        return(
            <View>
            <ScrollView>
            <View>
            <View style={{ flex:1,backgroundColor:"white",flexDirection:"row",justifyContent:"space-around",marginTop:3}}>
                <View style={{backgroundColor:"yellow",width:140,height:130,}}>
                <Image source={require('./images/lft_img1.png')} style={{ width:140,height:130}} />
                </View>
                <View style={{backgroundColor:"",width:220,height:130,borderColor:"black",borderWidth:0}}>
                    <View>
                    <Text>Name:</Text>
                    <Text style={{fontSize:20}}>Mohit aggarwal</Text>
                    </View>
                    <View style={{marginTop:15}}>
                        <Text>Email-id:</Text>
                        <Text style={{fontSize:20}}>mohit@gmail.com</Text>
                    </View>

                    
                </View>
                
               </View>
            
               </View>

                <View style={{ marginTop:10,width:400,flexDirection:"row",justifyContent:"space-around"}}>
                <Button style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >Timeline</Text></Button>
                <Button title="ncsn" onPress= {()=>this.props.handleChange(4)} style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >Upload post</Text></Button>
                <Button style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >add category</Text></Button>
                <Button style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >All categories</Text></Button>
                <Button style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >My uploads</Text></Button>
                </View>

                
                

                <View style={{marginTop:10 ,marginLeft:2}}>
                    <View style={{ width:380,borderTopColor:"orange",borderTopWidth:2,marginRight:2}}>
                        
                        <View style={{backgroundColor:"yellomw",flex:1.4 ,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{margin:10}}>Mohit aggarwal</Text>
                            <Text style={{marginRight:10,marginTop:10}}>Dogs</Text>
                        </View>
                        <Image source={require('./images/feat_img1.png')} style={{height:150,width:381,flex:7}} />
                        
                        <Text style={{marginLeft:5,flex:1}}>three little cats</Text>
                        
                        <View style={{backgroundColor:"yellomw",flex:1 ,flexDirection:"row",justifyContent:"flex-start"}}>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white"}}><Text>  0 Likes</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white"}}><Text>  0 comments</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white"}}><Text>  0 share</Text></Button>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:30 ,marginLeft:2}}>
                    <View style={{ width:380,height:300,alignItems:"stretch",borderTopColor:"orange",borderTopWidth:2,marginRight:2}}>
                        
                        <View style={{backgroundColor:"yellomw",flex:1.4 ,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{margin:10}}>Mohit aggarwal</Text>
                            <Text style={{marginRight:10,marginTop:10}}>Dogs</Text>
                        </View>
                        <Image source={require('./images/feat_img3.png')} style={{height:150,width:381,flex:7}} />
                        
                        <Text style={{marginLeft:5,flex:1}}>My cute rabbits</Text>
                        
                        <View style={{backgroundColor:"yellomw",flex:1 ,flexDirection:"row",justifyContent:"flex-start"}}>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white"}}><Text>  0 Likes</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white"}}><Text>  0 comments</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white"}}><Text>  0 share</Text></Button>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:30 ,marginLeft:2}}>
                    <View style={{ width:380,alignItems:"stretch",borderTopColor:"orange",borderTopWidth:2,marginRight:2}}>
                        
                        <View style={{backgroundColor:"yellomw",flex:1.4 ,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{margin:10}}>Mohit aggarwal</Text>
                            <Text style={{marginRight:10,marginTop:10}}>Dogs</Text>
                        </View>
                        <Image source={require('./images/img_9.png')} style={{height:150,width:381,flex:7}} />
                        
                        <Text style={{marginLeft:5,flex:1}}>Two dogs looking at each other</Text>
                        
                        <View style={{backgroundColor:"yellomw",flex:1 ,flexDirection:"row",justifyContent:"flex-start"}}>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white"}}><Text>  0 Likes</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white"}}><Text>  0 comments</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white"}}><Text>  0 share</Text></Button>
                        </View>
                    </View>
                </View>

            </ScrollView>
            
            </View>
            
        )
    }
}