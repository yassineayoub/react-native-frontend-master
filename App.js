import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  FlatList,
  NavigatorIOS,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Color from './components/Color';

export default function App() {
  const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Here are some boxes of differents colours</Text>
        <FlatList
          data={COLORS}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => <Color {...item} />}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  colors: {
    Cyan: '#2aa198',
    Blue: '#268bd2',
    Magenta: '#d33682',
    Orange: '#cb4b16',
  },
});
