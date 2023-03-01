import React, {Component} from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class ButtonBasics extends Component {

    constructor(props){
        super(props);
        this.state ={
             isLoading: true,
             valaszto:1,
             dataSource:[],
             dataSourcevideo:[],
             dataSourceprocesszor:[],
             dataSourcetapegyseg:[],
             dataSourceram:[]
            }
      }

  _onPressButton() {
    Alert.alert('Termékek kiválasztva!');
  }

  componentDidMount(){
    fetch('http://joszai-attila-back.dszcbaross.tk/hattertar')
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


      fetch('http://joszai-attila-back.dszcbaross.tk/videokartya')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSourcevideo: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

      fetch('http://joszai-attila-back.dszcbaross.tk/Processzor')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSourceprocesszor: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });


      fetch('http://joszai-attila-back.dszcbaross.tk/Tapegyseg')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSourcetapegyseg: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

      fetch('http://joszai-attila-back.dszcbaross.tk/Ram')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSourceram: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });



  }

  
  render() {
    return (
     
     <View style={styles.container}>
        
        
            <Picker 
                style={{backgroundColor:"#42adf5",color:"white",marginTop:10, marginBottom:10}}
                selectedValue={this.state.valaszto}
                onValueChange={(ertek) => 
                this.setState({valaszto:ertek})


              }>
                  {this.state.dataSource.map(item=>

                <Picker.Item label={item.alkatresz_nev} value={item.id} />
          )}

              </Picker>
              
              <Picker 
                style={{backgroundColor:"#42adf5",color:"white",marginTop:10, marginBottom:10}}
                selectedValue={this.state.valaszto}
                onValueChange={(ertek) => 
                this.setState({valaszto:ertek})


              }>
                  {this.state.dataSourcevideo.map(item=>

                <Picker.Item label={item.alkatresz_nev} value={item.id} />
          )}

              </Picker>

              <Picker 
                style={{backgroundColor:"#42adf5",color:"white",marginTop:10, marginBottom:10}}
                selectedValue={this.state.valaszto}
                onValueChange={(ertek) => 
                this.setState({valaszto:ertek})


              }>
                  {this.state.dataSourceprocesszor.map(item=>

                <Picker.Item label={item.alkatresz_nev} value={item.id} />
          )}

              </Picker>

              <Picker 
                style={{backgroundColor:"#42adf5",color:"white",marginTop:10, marginBottom:10}}
                selectedValue={this.state.valaszto}
                onValueChange={(ertek) => 
                this.setState({valaszto:ertek})


              }>
                  {this.state.dataSourcetapegyseg.map(item=>

                <Picker.Item label={item.alkatresz_nev} value={item.id} />
          )}

              </Picker>

              <Picker 
                style={{backgroundColor:"#42adf5",color:"white",marginTop:10, marginBottom:10}}
                selectedValue={this.state.valaszto}
                onValueChange={(ertek) => 
                this.setState({valaszto:ertek})


              }>
                  {this.state.dataSourceram.map(item=>

                <Picker.Item label={item.alkatresz_nev} value={item.id} />
          )}

              </Picker>


              <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="Kiválasztás" />
        </View>
        
      </View>
      
      );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});