import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  szavazat=(szam)=>{
    //alert(szam)
    var bemenet={
      bevitel1:szam
    }

  fetch("http://joszai-attila-back.dszcbaross.tk/szavazatfelvitel", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}

    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }


  componentDidMount(){
    return fetch('http://joszai-attila-back.dszcbaross.tk/alkatresz')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >
          <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.alkatresz_nev} </Text>
          <Text style={{color:"green",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.alkatresz_ar} Ft </Text>
         

          <TouchableOpacity
        style={styles.kekgomb}
        onPress={async ()=>this.szavazat(item.film_id)}
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15}}  >Erre szavazok</Text>
      </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({film_id}, index) => film_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});