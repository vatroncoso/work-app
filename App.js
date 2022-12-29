import { StatusBar } from 'expo-status-bar';

import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Button,
} from 'react-native';

import { 
  useDimensions,
  useDeviceOrientation,} from '@react-native-community/hooks';

export default function App() {
  console.log(useDeviceOrientation())
  return (
    <View style={{
        backgroundColor: 'grey',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
      }}>

    <View style={{
        backgroundColor: 'blue',
        flex: 0.3,
        alignItems: 'center',
  
    }}>
      <Text style={{
        paddingTop: 120,
      }}>
        Mis horas
      </Text>


    </View>

    <View style={{
        backgroundColor: 'red',
        flex: 0.6,
        alignItems: 'center',
    }}>
      <View style={styles.buttomContainer}>
        <Button title='Hoy'/>
      </View>
      <View style={styles.buttomContainer}>
        <Button title='Hoy'/>
      </View>
      <View style={styles.buttomContainer}>
        <Button title='Hoy'/>
      </View>

    </View>

    <View style={{
        backgroundColor: 'yellow',
        flex: 0.1,
        alignItems: 'center',
    }}>
      <Text style={{
        paddingTop: 20,
      }}>
        by Valentina C:</Text>

    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttomContainer: {
    backgroundColor: 'purple',
    alignItems: 'center',
    paddingTop:100,
    width:200,
  },

});
