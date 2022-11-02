import { Animated, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useRef } from "react";
function Screen1(){
    const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000,
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
  
  // You can then use your `FadeInView` in place of a `View` in your components:
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 400, height: 100, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Welcome to Animation React Native</Text>
        </FadeInView>
      </View>
    )
}
export default Screen1;