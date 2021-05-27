import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";

import ExpensesItem from "./ExpensesItem";

const defaultItems = [
    {
        name: "Anna",
        balance: -10.5,
    },
    {
        name: "Bob",
        balance: 3,
    },
    {
        name: "Cat",
        balance: -15.24,
    },
    {
        name: "Macy",
        balance: 37.24,
    },
];

export default class Expenses extends React.Component {
    constructor(props) {
        super();
        this.state = {
            items: defaultItems,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.state.items.map((item) => (
                        <ExpensesItem
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
