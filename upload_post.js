import React,{Component} from 'react'
import { View, Text, TextInput,Image ,ScrollView } from 'react-native';
import { Form, Button,Input } from 'native-base';
// import ValidationComponent from 'react-native-form-validator';
import ValidationComponent from 'react-native-form-validator';
import Axios from 'axios';
import ImagePicker from 'react-native-image-picker'



export default class UploadPost extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      postName: "",
      category: "",
      image: null,
      msg: "",
      msgImage:""
    }
  };

  onChange=(key,val)=>{
    this.setState({[key]: val})

  }

handleChoosePhoto = () => {
  const options = {
    quality: 1.0,
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
      skipBackup: true
    }
  }

  ImagePicker.launchImageLibrary(options, response => {
    // console.log('Response => ', response);
  
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
          this.setState({image:response})
          this.setState({msgImage:response.fileName})
          
        }
  })

}
// abhi yehi bnaya h sir
// databse m nhi store kraya abhi
// orr kuch bhi dikhana h sir?
onUpload=()=>{
    if(this.state.postName.length === 0 || this.state.category.length === 0 || this.state.msgImage.length === 0)
    {
      this.setState({msg: "please fill all input fields"})
    }
    else
    {
      // console.log("comming before axios");

      // console.log("image +++++++",this.state.image);

      const data = new FormData();

      // formData.append("postName",this.state.postName);
      // formData.append("category",this.state.category);
      // formData.append("image",this.state.image.uri);
// file  wala dikhao
// backend????call
      data.append('name', 'avatar');
      data.append('fileData', {
      uri : this.state.image.uri,
      type: this.state.image.type,
      name: this.state.image.fileName
      });
      // kya hua sir
      //ye rha sir
      // const config = {
      //   method: 'POST',
      //   headers: {
      //    'Accept': 'application/json',
      //    'Content-Type': 'multipart/form-data',
      //   },
      //   body: data,
      //  };

       Axios.post("http://192.168.43.246:8000/uploadPost",data)
       .then(()=>{       
         console.log("checkStatusAndGetJSONResponse");
         }).catch((err)=>{console.log(err)});

      // console.log("data in form is```````",data);

      //  fetch("http://localhost:8000/uploadPost", config)
      //  .then((checkStatusAndGetJSONResponse)=>{       
      //  console.log(checkStatusAndGetJSONResponse);
      //  }).catch((err)=>{console.log(err)});
    
      

      // console.log("data in the form is~~~~~~~~~~",formData)

      // const config = {
      //   headers: {
      //       "content-type": "multipart/form-data"
      //   }
      // }

      // Axios.post("http://192.168.43.246:8000/uploadPost", formData, config).then(function(response){

      //   console.log("response is comming from server",response.data.message);
      // })
      // aa gya ?
      // nhi sir




      // const createFormData = (photo, body) => {
      //   const data = new FormData();
      
      //   data.append("photo", {
      //     name: photo.fileName,
      //     type: photo.type,
      //     uri:
      //       Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
      //   });
      
      //   Object.keys(body).forEach(key => {
      //     data.append(key, body[key]);
      //   });
      
      //   return data;
      // };      

      // fetch("http://localhost:8000/uploadPost", {
      // method: "POST",
      // body: createFormData(this.state.photo, { userId: "123" })
      // }).then(response => response.json()).then((response)=>{
      //   console.log("stored to database");
      // })
      
      // var data = new FormData();

      // data.append('my_photo', {
      // uri: this.state.photo.response.uri, // your file path string
      // name: 'my_photo.jpg',
      // type: 'image/jpg'
      // },

      // fetch("http://localhost:8000/uploadPost", {
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'multipart/form-data'
      //   },
      //   method: 'POST',
      //   body: data
      // })

      // this.setState({msg: "post uploaded successfully"})

      // console.log("the state isssssss+++++++++++++++",this.state);
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
      <Text style={{textAlign:"center", fontSize:25}}>Upload Post</Text>
      
      {this.state.msg.length != 0 && <Text>{this.state.msg}</Text> }
      <View style={style.forView}>
      <Text style={style.forText}>Post Name:</Text>
      <TextInput onChangeText={(value)=> this.onChange("postName",value)} placeholder="post name" style={style.forInput} />
      </View>

      <View style={style.forView}>
      <Text style={style.forText}>Category:</Text>
      <TextInput onChangeText={(value)=> this.onChange("category",value)} placeholder="category" style={style.forInput} />
      </View>

      <View style={style.forView}>
      <Text style={style.forText}>Add image:</Text>
      <Button onPress={()=>this.handleChoosePhoto()} style={{height:40,borderRadius:10,backgroundColor:"lightgreen"}}><Text style={{marginHorizontal:5,fontSize:20}}>Choose image</Text></Button>
      {this.state.msgImage.length !=0 && <Text style={{marginLeft:6}}>{this.state.msgImage}</Text>}
      </View>

      <View style={style.forView,{flex:1,flexDirection:"row", justifyContent: 'space-between', marginTop:25}}>
      <Button onPress={()=>this.onUpload()} style={style.forButton}><Text style={{marginHorizontal:15,fontSize:22}}>Upload post</Text></Button>
      <Button onPress={()=>this.props.handleChange(3)} style={style.forButton}><Text style={{marginHorizontal:42,fontSize:25}}>Home</Text></Button>
      </View>

      </Form>
    </View>
  );
  }
};