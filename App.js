import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./navigators/RootNavigator";

/* ------------------------------ Manage State ------------------------------ */
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store/store";
import { getInitialData, setAppLoading } from "./store/actions/appActions";

/* ------------------------------ Loading fonts ----------------------------- */
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

function Main(props) {
  let [fontsLoaded] = useFonts({
    serif400: require("./assets/fonts/JosefinSans-Regular.ttf"),
    sans400: require("./assets/fonts/Lato-Regular.ttf"),
  });

  let isAppLoading = useSelector((state) => state.app.loading);

  let dispatch = useCallback(useDispatch(), []);

  useEffect(() => {
    console.log("I will fetch data");
    dispatch(getInitialData());
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (isAppLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading App</Text>
      </View>
    );
  }

  return <View style={{ flex: 1 }}>{props.children}</View>;
}

function App() {
  return (
    <Provider store={store}>
      <Main>
        <RootNavigator />
      </Main>
    </Provider>
  );
}

export default App;
