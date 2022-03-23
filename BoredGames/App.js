import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const apiID = 'QnMGMpLsyy';

function HomeScreen(){
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

async function SearchScreen(){

    const [searchString, setSearchString] = React.useState("");
    const [searchResults, setSearchResults] = React.useState(null);
    const handleChangeText = (text) => {
        setSearchString(text);
        let apiURL = `https://api.boardgameatlas.com/api/search?name={text}&fuzzy_match=true&client_id={apiID}`;
        fetch(apiURL)
        .then(response => response.json())
        .then(response => {
            setSearchResults(response);
            console.log(searchString);
            console.log(searchResults);
        });
    }

    return (
    <SafeAreaView style={styles.container}>
            <TextInput 
                justify='flex-start'
                style = {styles.searchBar}
                onChangeText={handleChangeText} 
                placeholder="Search"
            />
        <StatusBar style="auto" />
    </SafeAreaView>
    );
    
}

function ProfileScreen(){
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
    

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={HomeScreen} />
            <Tab.Screen name = "Search" component={SearchScreen} />
            <Tab.Screen name = "Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  searchBar: {
    width: '80%',
    height: '5%',
    backgroundColor: 'gainsboro',
    borderWidth: 1, 
    align: 'left',
  },
});
