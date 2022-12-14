import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect } from "react";
import {RequestUserPermission, NotificationListner} from'./src/utils/pushnotification_healper';
const App = () => {

  
  useEffect(() => {
    RequestUserPermission();
    NotificationListner();
  }, []);

  return (
    <View>
          <SafeAreaView style={styles.body}>
      <Text>Firebase Notification tutorial</Text>
    </SafeAreaView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  body:{
    justifyContent:'center',
    alignItems:'center',
  }
})


