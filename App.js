import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Alkatresz from './Alkatresz';
import Hattertar from './Hattertar';
import Videokartya from './Videokartya';
import Processzor from './Processzor';
import Tapegyseg from './Tapegyseg';
import Ram from './Ram';
import Alkatreszvalaszto from './Alkatreszvalaszto';

function HomeScreen({ navigation }) {
  return (
   <Alkatresz />
  );
}

function HattertarakScreen({ navigation }) {
  return (
    <Hattertar />
  );
}

function VideokartyakScreen({ navigation }) {
  return (
    <Videokartya />
  );
}

function ProcesszorokScreen({ navigation }) {
  return (
    <Processzor />
  );
}
function TapegysegekScreen({ navigation }) {
  return (
    <Tapegyseg />
  );
}

function RamokScreen({ navigation }) {
  return (
    <Ram />
  );
}

function AlkatreszvalasztoScreen({ navigation }) {
  return (
    <Alkatreszvalaszto />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Összes alkatrész" component={HomeScreen}/>
        <Drawer.Screen name="Háttértárak" component={HattertarakScreen}/>
        <Drawer.Screen name="Videókártyák" component={VideokartyakScreen}/>
        <Drawer.Screen name="Processzorok" component={ProcesszorokScreen}/>
        <Drawer.Screen name="Tápegységek" component={TapegysegekScreen}/>
        <Drawer.Screen name="Ram" component={RamokScreen}/>
        <Drawer.Screen name="Alkatrészválasztó" component={AlkatreszvalasztoScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}