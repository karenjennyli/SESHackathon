import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";

import ShoppingListItem from "./ShoppingListItem";

const defaultItems = [
    {
        name: "milk",
        quantity: 1,
        note: "whole milk",
        bought: false,
        user: "JD",
    },
    {
        name: "eggs",
        quantity: 12,
        note: "",
        bought: false,
        user: "JD",
    },
    {
        name: "chicken",
        quantity: 1,
        note: "Rotisserie",
        bought: false,
        user: "JD",
    },
];

export default class ShoppingList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            items: defaultItems,
        };
    }

    updateQuantity = (name, change, note) => {
        let newItems = this.state.items;
        for (var i in newItems) {
            var item = newItems[i];
            if (item.name === name) {
                newItems[i].quantity = item.quantity + change;
                if (newItems[i].quantity > 99) newItems[i].quantity = 99;
                if (newItems[i].quantity < 0) newItems[i].quantity = 0;
                if (note) newItems[i].note = note;
            }
        }
        this.setState({ items: newItems });
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.state.items.map((item) => (
                        <ShoppingListItem
                            key={item.name}
                            info={item}
                            updateQuantity={this.updateQuantity}
                        />
                    ))}

                    <View style={styles.container}>
                        <View
                            style={{
                                ...styles.row,
                                opacity: 0.4,
                                paddingTop: 12,
                            }}
                        >
                            <Text style={{ paddingRight: 10, color: "white" }}>
                                New Item
                            </Text>
                            <TouchableOpacity style={{}} onPress={() => {}}>
                                <Icon
                                    name="plus"
                                    type="ant-design"
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
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
