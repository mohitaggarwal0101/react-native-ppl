import React,{Component} from 'react'
import { View, Text, TextInput,Image,ScrollView, FlatList } from 'react-native';
import { Form, Button,Input } from 'native-base';
// import ValidationComponent from 'react-native-form-validator';
import ValidationComponent from 'react-native-form-validator';
import Axios from 'axios';


export default class Timeline extends React.Component{
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
                <View style={{height:60,backgroundColor:"lightgreen"}}>
                <Text style={{textAlign:"center", fontSize:30,margin:10,fontFamily:"fantasy"}}>Timeline</Text>
                </View>
                <View style={{ flex:1,backgroundColor:"whkite",flexDirection:"row",justifyContent:"space-around",marginTop:10}}>
                <View style={{backgroundColor:"yellyow",width:140,height:130}}>
                <Image source={require('./images/lft_img1.png')} style={{ width:140,height:130,borderRadius:70}} />
                </View>
                <View style={{backgroundColor:"",width:220,height:130,borderColor:"black",borderWidth:0,marginTop:0}}>
                    <View style={{flex:1,marginTop:10}}>
                        <Text>Name:</Text>
                        <Text style={{fontSize:20}}>Mohit aggarwal</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text>Email-id:</Text>
                        <Text style={{fontSize:20}}>mohit@gmail.com</Text>
                    </View>

                    
                </View>
                
                </View>
            
                </View>

                <View style={{ marginTop:10,width:400,flexDirection:"row",justifyContent:"space-around"}}>
                <Button style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >Timeline</Text></Button>
                <Button title="ncsn" onPress= {()=>this.props.handleChange(4)} style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >Upload post</Text></Button>
                <Button onPress= {()=>this.props.handleChange(5)} style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >add category</Text></Button>
                <Button onPress= {()=>this.props.handleChange(6)} style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >Show categories</Text></Button>
                <Button style={{width:78, backgroundColor:"white"}}><Text style={{marginLeft:10}} >My uploads</Text></Button>
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

                        <Image source={require('./images/feat_img2.png')} style={{height:150,width:381,flex:7}} />
                        
                        {/* <Text style={{marginLeft:5,flex:1}}>three little cats</Text> */}
                        
                        <View style={{backgroundColor:"yellomw",flex:1 ,flexDirection:"row",justifyContent:"flex-start"}}>
                            <Button style={{marginLeft:4,width:100,backgroundColor:"white",height:40}}><Text>  0 Likes</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white",height:40}}><Text>  0 comments</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white",height:40}}><Text>  0 share</Text></Button>
                        </View>
                    </View>
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

                        <Image source={require('./images/img_9.png')} style={{height:150,width:381,flex:7}} />
                        
                        {/* <Text style={{marginLeft:5,flex:1}}>three little cats</Text> */}
                        
                        <View style={{backgroundColor:"yellomw",flex:1 ,flexDirection:"row",justifyContent:"flex-start"}}>
                            <Button style={{marginLeft:4,width:100,backgroundColor:"white",height:40}}><Text>  0 Likes</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white",height:40}}><Text>  0 comments</Text></Button>
                            <Button style={{marginLeft:2,width:100,backgroundColor:"white",height:40}}><Text>  0 share</Text></Button>
                        </View>
                    </View>
                    
                </View>   
                
                <View style={{marginTop:20,height:40,backgroundColor:"lightgreen"}}>
                
                </View>

            </ScrollView>
                
            </View>
            
        )
    }
}