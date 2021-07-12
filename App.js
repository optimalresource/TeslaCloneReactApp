import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import CarItem from './components/CarItem';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem 
        name='Model S'
        tagline='Order Online For'
        taglineCTA='Touchless Delivery'
        image={require('./assets/images/ModelS.jpeg')}
      /> */}
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
