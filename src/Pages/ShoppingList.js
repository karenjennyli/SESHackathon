import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";

import ListItem from "../Components/ListItem";

const defaultItems = [
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "JD",
    },
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "HS",
    },
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "AV",
    },
];

export default function ShoppingList(props) {
    const [items, setItems] = useState(defaultItems);

    function updateQuantity(name, change) {
        let newItems = items;
        for (var item in newItems) {
            if (item.name == name) {
                item.quantity = item.quantity + change;
            }
        }
        setItems(newItems);
    }

    return (
        <View style={styles.container}>
            <Text style={{ paddingTop: 50, paddingBottom: 20 }}>
                Shopping List
            </Text>
            <ScrollView>
                {items.map((item) => (
                    <ListItem info={item} updateQuantity={updateQuantity} />
                ))}

                <View style={styles.container}>
                    <View
                        style={{ ...styles.row, opacity: 0.4, paddingTop: 12 }}
                    >
                        <Text style={{ paddingRight: 10 }}>New Item</Text>
                        <TouchableOpacity style={{}} onPress={() => {}}>
                            <Icon name="plus" type="ant-design" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft: 10,
        paddingVertical: 7,
        alignItems: "center",
    },
});
