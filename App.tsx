import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppContainer from './src/navigators/AppContainer';
import {Provider} from 'react-redux';
import store, {persistor} from './src/stores/slices';
import {PersistGate} from 'redux-persist/integration/react';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

function App(): React.JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      PushNotification.createChannel(
        {
          channelId: '1',
          channelName: 'android channel',
        },
        created => console.log(`createChannel returned '${created}'`),
      );
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppContainer />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
