import React, { useState } from "react";
import { Touchable } from "react-native";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";

import ShoppingList from "./ShoppingList";

export default function ListButtons(props) {
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: props.selected ? "#AAAAAA" : "#CACACA",
            }}
        >
            <TouchableOpacity onPress={props.setSelect}>
                <Text style={{ color: "white" }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 160,
        height: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});
