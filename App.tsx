import { NavigationContainer } from "@react-navigation/native";
import AppRoute from "./app/components/configs/AppRoute";

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
}
export default App;