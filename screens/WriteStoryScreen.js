import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import { colors, Header } from 'react-native-elements';

export default class writeStoryScreen extends React.Component {
    
render() {
      return(
        
        <View >
          <Header
          backgroundColor={'lightpink'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'black', fontSize: 30 },
          }}
        />
        <View style={styles.container}>
        <TextInput 
          style={styles.title}
          placeholder="                                          Story Title"/>
          <TextInput 
          style={styles.author}
          placeholder="                                          Author"/>
          <TextInput 
          style={styles.storyText}
          placeholder="                                  Write your own Story "/>
        <TouchableOpacity 
          style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        </View>    
         
        );
      }
    }
  

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      title:{
          height: 40,
          borderWidth: 2,
          marginTop: 40,
          margin: 10
      },
      author: {
          height: 40,
          borderWidth: 2,
          margin: 10
      },
      storyText: {
          height: 250,
          borderWidth: 2,
          margin: 10
      },
      submitButton:{
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: 'pink',
          width: 80,
          height: 40
      },
      buttonText: {
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold'
      }
    });