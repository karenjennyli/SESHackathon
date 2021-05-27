import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import ListItem from "../Components/ListItem";

const defaultItems = [
    {
        name: "Milk",
        quantity: 1,
        note: "Whole milk",
        bought: false,
        user: "JD",
    },
    {
        name: "Milk",
        quantity: 1,
        note: "Whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "Milk",
        quantity: 1,
        note: "Whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "Milk",
        quantity: 1,
        note: "Whole milk",
        bought: false,
        user: "HS",
    },
    {
        name: "Milk",
        quantity: 1,
        note: "Whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "Milk",
        quantity: 1,
        note: "Whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "Milk",
        quantity: 1,
        note: "Whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "Milk",
        quantity: 1,
        note: "Whole milk",
        bought: false,
        user: "AV",
    },
    {
        name: "Milk",
        quantity: 1,
        note: "Whole milk",
        bought: false,
        user: "AV",
    },
];

export default function ShoppingList() {
    const [items, setItems] = useState(defaultItems);

    function updateQuantity(name, change) {
        let newItems = items;
        for (item in newItems) {
            if (item.name == name) {
                item.quantity = item.quantity + change;
            }
        }
        setItems(newItems);
    }

    return (
        <View style={styles.container}>
            <Text style={{ paddingTop: 50 }}>Shopping List</Text>
            <ScrollView>
                {items.map((item) => (
                    <ListItem
                        info={item}
                        updateQuantity={() => this.updateQuantity}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
    },
});
