import { SafeAreaView, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./navigation/StackNavigator";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
