import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ShoppingListPage from "./src/Pages/ShoppingListPage";
import Scanner from "./src/Pages/Scanner";

export default function App() {
    return (
        <View style={styles.container}>
            <ShoppingListPage />
        </View>
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
