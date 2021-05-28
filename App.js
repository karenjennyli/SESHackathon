import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import ShoppingListPage from "./src/Pages/ShoppingListPage";
import Scanner from "./src/Pages/Scanner";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        // <View style={styles.container}>
        //     <ShoppingListPage />
        // </View>
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="ShoppingListPage">
                <Drawer.Screen
                    name="ShoppingListPage"
                    component={ShoppingListPage}
                />
                <Drawer.Screen name="Scanner" component={Scanner} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
});
