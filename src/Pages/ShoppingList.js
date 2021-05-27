import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ListItem from "../Components/ListItem";

items = [
    { name: "milk", quantity: 1, note: "whole milk", bought: false },
    { name: "eggs", quantity: 12, note: "", bought: false },
    { name: "chicken", quantity: 1, note: "", bought: false },
    { name: "milk", quantity: 1, note: "whole milk", bought: false },
    { name: "milk", quantity: 100, note: "whole milk", bought: false },
];

export default function ShoppingList() {
    return (
        <View style={styles.container}>
            {items.map((item) => (
                <ListItem info={item} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
});
