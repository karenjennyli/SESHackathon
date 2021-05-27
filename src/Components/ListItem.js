import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import { TouchableOpacity } from "react-native";
import { Icon, Avatar } from "react-native-elements";

import PencilIcon from "../../assets/pencil.png";

export default function ListItem(props) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Avatar
                    size="small"
                    rounded
                    title={props.info.user}
                    containerStyle={{
                        backgroundColor: "gray",
                    }}
                />
                <Text style={{ flex: 3, paddingLeft: 20 }}>
                    {props.info.name}
                </Text>
                <TouchableOpacity
                    style={{ flex: 2 }}
                    onPress={() => {
                        console.log("hi");
                        props.updateQuantity(props.info.name, -1);
                    }}
                >
                    <Icon name="minus" type="ant-design" />
                </TouchableOpacity>
                <Text style={{ flex: 0, paddingHorizontal: 15 }}>
                    {props.info.quantity}
                </Text>
                <TouchableOpacity
                    style={{ flex: 2 }}
                    onPress={() => props.updateQuantity(props.info.name, 1)}
                >
                    <Icon name="plus" type="ant-design" />
                </TouchableOpacity>
                <Icon style={{ flex: 2, paddingLeft: 10 }} name="edit" />
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
        alignItems: "center",
    },
    line: {
        width: 300,
        borderTopColor: "black",
        borderTopWidth: 1,
        backgroundColor: "black",
    },
});
