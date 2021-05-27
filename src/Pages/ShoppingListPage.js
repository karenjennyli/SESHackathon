import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";

import ListButtons from "../Components/Group/ListButtons";
import ShoppingList from "../Components/Group/ShoppingList";
import Expenses from "../Components/Group/Expenses";

export default class ShoppingListPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            shoppingListSelected: true,
        };
    }

    updateQuantity = (name, change, note) => {
        console.log(this.state.items);
        let newItems = this.state.items;
        for (var i in newItems) {
            var item = newItems[i];
            if (item.key === name) {
                newItems[i].quantity = item.quantity + change;
                if (newItems[i].quantity > 99) newItems[i].quantity = 99;
                if (newItems[i].quantity < 0) newItems[i].quantity = 0;
                if (note) newItems[i].note = note;
            }
        }
        this.setState({ items: newItems });
    };

    selectShoppingList = () => this.setState({ shoppingListSelected: true });
    selectExpenses = () => this.setState({ shoppingListSelected: false });

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        paddingTop: 50,
                        paddingBottom: 20,
                        color: "white",
                        fontSize: 32,
                    }}
                >
                    Roommates
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <ListButtons
                        text={"Shopping List"}
                        selected={this.state.shoppingListSelected}
                        setSelect={this.selectShoppingList}
                    />
                    <ListButtons
                        text={"Expenses"}
                        selected={!this.state.shoppingListSelected}
                        setSelect={this.selectExpenses}
                    />
                </View>
                <View style={styles.line} />
                <TouchableOpacity></TouchableOpacity>
                {this.state.shoppingListSelected ? (
                    <ShoppingList />
                ) : (
                    <Expenses />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingTop: 50,
    },
    line: {
        width: 320,
        borderTopColor: "white",
        borderTopWidth: 1,
    },
});
