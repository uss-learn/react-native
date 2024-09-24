import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import {useEffect, useRef, useState} from "react";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  })
})
export default function App() {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef(null);
    const [expoPushToken, setExpoPushToken] = useState('');
    const responseListener = useRef(null);

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification)
    })

    responseListener.current =  Notifications.addNotificationResponseReceivedListener((response)=> {
      console.log(response);
    })

    registerForPushNotificationsAsync().then((token) =>{
        setExpoPushToken(token)
    })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    }
  });

  const registerForPushNotificationsAsync = async () => {
      const {status: existingStatus} = await Notifications.getPermissionsAsync()
      console.log("existingStatus", existingStatus);
      let finalStatus = existingStatus
      if (finalStatus !== 'granted') {
          const {status} = await Notifications.requestPermissionsAsync()
          finalStatus = status;
      }
      if (finalStatus !== 'granted') {
          Alert.alert("Permission request", "Pas de jeton de notification push")
      }
      const token = await Notifications.getExpoPushTokenAsync({
          projectId: 'd2636b99-1a0f-4117-a172-6625bcbdb143',
      })
      console.log("TOKEN", token);
      return token?.data;
  }


  const handleNotification = async () => {
    const notification = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Acheter du pain',
        body: 'Ma première notitication locale',
        data: { data: 'goes here', test: { test1: 'more data' } },
      },
      trigger: {
        seconds: 4
      }
    })
    console.log("notification", notification);
  }
  return (
    <View style={styles.container}>
      <Text>
        Expo push token { expoPushToken }
      </Text>
      <Text>
        Titre {notification?.request?.content?.title??''}
      </Text>
      <Text>
        Body {notification?.request?.content?.body??''}
      </Text>
      <Text>
        Data {notification?.request?.content?.data?.data??''}
      </Text>
      <Button
          title={"Cliquer"}
          onPress={async () => {
            await handleNotification()
          }}
      />
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
});
