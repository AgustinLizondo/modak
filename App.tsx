import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppContainer from './src/navigators/AppContainer';
import {Provider} from 'react-redux';
import store, {persistor} from './src/stores/slices';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
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
