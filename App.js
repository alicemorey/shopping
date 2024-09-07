// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// Import screens
import ShoppingLists from './components/ShoppingLists';
import Welcome from './components/Welcome';


const App = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyD4UenyGEqwfDpHzVEXDjWudRsxHQIZ2fk",
      authDomain: "shopping-list-demo-dee8c.firebaseapp.com",
      projectId: "shopping-list-demo-dee8c",
      storageBucket: "shopping-list-demo-dee8c.appspot.com",
      messagingSenderId: "404440184743",
      appId: "1:404440184743:web:006787dfc6892a9912e882"
    };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="ShoppingLists"
      >
        {props => <ShoppingLists db={db} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;