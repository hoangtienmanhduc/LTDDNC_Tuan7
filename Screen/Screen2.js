import { Animated, Dimensions, Easing, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useRef, useState } from "react";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

function Screen2(){
   
  state = {
    left: 30,
    right:30,
    top:30,
    bot:30,
  };

  _onPress1 = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({left: this.state.left- 30})
  }
  _onPress2 = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({right: this.state.right- 30})
  }
  _onPress3 = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({top: this.state.top- 30})
  }
  _onPress4 = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({bot: this.state.bot- 30})
  }

    return (
      <View style={styles.container}>
        <View style={[styles.box, {marginLeft: this.state.left},{marginRight: this.state.right},{marginTop: this.state.top},{marginBottom: this.state.bot}]} />
        <View style={{flexDirection:'row',marginTop:200}}>
        <TouchableOpacity onPress={this._onPress1}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Trai</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPress2}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Phai</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={this._onPress3}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tren</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPress4}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Duoi</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  });
  
export default Screen2;