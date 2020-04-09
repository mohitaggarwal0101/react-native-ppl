import React,{Component} from 'react'
import { View, Text, TextInput,Image ,ScrollView } from 'react-native';
import { Form, Button,Input } from 'native-base';
import ValidationComponent from 'react-native-form-validator';
import Axios from 'axios';
import ImagePicker from 'react-native-image-picker'




export default class AddCategory extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      category: "",
      thumbnail: null,
      msg: "",
      msgImage:""
    }
  };

  onChange=(key,val)=>{
    this.setState({[key]: val})

  }

handleChoosePhoto = () => {
  const options = {
    // quality: 1.0,
    // maxWidth: 500,
    // maxHeight: 500,
    // storageOptions: {
    //   skipBackup: true
    // }

    noData: true,
    mediaType: 'photo',
  }

  ImagePicker.launchImageLibrary(options, response => {
  
        if (response.didCancel) {
          console.warn('User cancelled photo picker');
          this.setState({msgImage:""})
        }
        else if (response.error) {
          console.warn('ImagePicker Error: ', response.error);
          this.setState({msgImage:""})
        }
        else if (response.customButton) {
          console.warn('User tapped custom button: ', response.customButton);
          this.setState({msgImage:""})
        }
        else {
          let source = { uri: response.uri };
  
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
          // this.setState({image:source})
          this.setState({thumbnail:response})
          this.setState({msgImage:response.fileName})
          
        }
  })

}

onUpload=()=>{
    console.log("on upload");
    if(this.state.category.length === 0 || this.state.msgImage.length === 0)
    {
      this.setState({msg: "please fill both the input fields"})
    }
    else
    {   
        let fd = new FormData();

        fd.append("fileData",{
            uri: this.state.thumbnail.uri,
            type: this.state.thumbnail.type,
            name: this.state.thumbnail.fileName
        });

        // let options = {
        //     method:"post",
        //     url:"http://192.168.43.246:8000/addCategory",
        //     data:fd,
        //     headers:{
        //         'content-type': 'application/json',
        //         Accept: 'application/json',
        //       }
      
        //     //timeout: 1000 * 10,
        //   };
        // //   if (method === 'get') {
        // //     delete options['data'];
        // //   }
        //   Axios({
        //     ...options,
        //   }).then((response)=>{
        //       console.log("respnse from server------",response.data);
        //   })

        const headers={
            'content-type': 'application/json',
                Accept: 'application/json',
        }
        
        Axios.post("http://192.168.43.246:8000/addCategory",fd,headers).then((response)=>{
            
        console.log(response.data);

        })

        // callApi({method: 'POST', url: "http://192.168.43.246:8000/addCategory", data: fd}).then(
        //     response => {
        //       console.log('Data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', response);
        //       if (response.data.status === 'Profile Inserted') {
        //         this.props.navigation.navigate('Timeline');
        //       }
        //     },
        //   );

        // console.log("data in form::::::",data);

        

        console.log("after fetch");
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
        borderWidth: 2,
        backgroundColor:"white"
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
      <Text style={{textAlign:"center", fontSize:25}}>Add Category</Text>
      
      {this.state.msg.length != 0 && <Text>{this.state.msg}</Text> }

      <View style={style.forView}>
      <Text style={style.forText}>Category Name:</Text>
      <TextInput onChangeText={(value)=> this.onChange("category",value)} placeholder="category" style={style.forInput} />
      </View>

      <View style={style.forView}>
      <Text style={style.forText}>Add Thumbnail:</Text>
      <Button onPress={()=>this.handleChoosePhoto()} style={{height:40,borderRadius:10,backgroundColor:"lightgreen"}}><Text style={{marginHorizontal:5,fontSize:20}}>Choose image</Text></Button>
      {this.state.msgImage.length !=0 && <Text style={{marginLeft:6}}>{this.state.msgImage}</Text>}
      </View>

      <Button onPress={()=>this.onUpload()} style={{height:40,borderRadius:10,backgroundColor:"lightgreen",marginTop:25,}}><Text style={{fontSize:25,marginLeft: 85}}>Add Category</Text></Button>

      <Button onPress={()=>this.props.handleChange(3)} style={{height:40,borderRadius:10,backgroundColor:"lightgreen",marginTop:25}}><Text style={{marginHorizontal:85,fontSize:25}}>Back to home</Text></Button>

      {/* <View style={style.forView,{flex:1,flexDirection:"row", justifyContent: 'space-between', marginTop:25}}>
      <Button onPress={()=>this.onUpload()} style={style.forButton}><Text style={{marginHorizontal:15,fontSize:22}}>Add Category</Text></Button>
      <Button onPress={()=>this.props.handleChange(3)} style={style.forButton}><Text style={{marginHorizontal:42,fontSize:25}}>Home</Text></Button>
      </View> */}

      </Form>
    </View>
  );
  }
};

// const headers={
//     'content-type': 'application/json',
//         Accept: 'application/json',
// }

// Axios.post("http://192.168.43.246:8000/addCategory",fd,headers).then((response)=>{
    
// console.log(response.data);