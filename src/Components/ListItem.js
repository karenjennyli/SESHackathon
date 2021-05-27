import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Icon } from "react-native-elements";
import { EditOutlined } from "@ant-design/icons";

import PencilIcon from "../../assets/pencil.png";

export default function ListItem(props) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={{ flex: 4 }}>{props.info.name}</Text>
                <Text style={{ flex: 1 }}>{props.info.quantity}</Text>
                <Icon style={{ flex: 2 }} name="edit" />
            </View>
            <View style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingVertical: 7,
    },
    line: {
        width: 300,
        borderTopColor: "black",
        borderTopWidth: 1,
        backgroundColor: "black",
    },
});
