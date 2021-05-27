import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { TouchableOpacity } from "react-native";
import { Icon, Avatar } from "react-native-elements";

import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ShoppingListItem(props) {
    const [bought, setBought] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <BouncyCheckbox
                    onPress={(isChecked) => {
                        setBought(isChecked);
                    }}
                />
                <Avatar
                    size="small"
                    rounded
                    title={props.info.user}
                    containerStyle={{
                        backgroundColor: "gray",
                    }}
                />
                <Text style={{ flex: 1, paddingLeft: 20, color: "white" }}>
                    {props.info.name}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        minWidth: 70,
                        flex: 0.2,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        // style={{ flex: 0 }}
                        onPress={() => {
                            props.updateQuantity(props.info.name, -1);
                        }}
                    >
                        <Icon name="minus" type="ant-design" color="white" />
                    </TouchableOpacity>
                    <Text style={{ paddingHorizontal: 10, color: "white" }}>
                        {props.info.quantity}
                    </Text>
                    <TouchableOpacity
                        // style={{ flex: 0 }}
                        onPress={() => {
                            props.updateQuantity(props.info.name, 1);
                        }}
                    >
                        <Icon name="plus" type="ant-design" color="white" />
                    </TouchableOpacity>
                </View>
                <Icon
                    style={{ flex: 2, paddingLeft: 10 }}
                    name="edit"
                    color="white"
                />
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
        width: 320,
        borderTopColor: "white",
        borderTopWidth: 1,
    },
});
