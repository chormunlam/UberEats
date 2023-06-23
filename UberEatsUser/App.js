import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
//day 2
import { Amplify } from "aws-amplify";
//for encapuate
import { withAuthenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";

//new version:
// import { Amplify } from "aws-amplify";

// import { Authenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";

// import awsExports from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />

      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
