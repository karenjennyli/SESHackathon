import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function formatMoney(value) {
    value = value.toFixed(2);
    if (value < 0) {
        value = value.slice(0, 1) + "$" + value.slice(1);
    } else {
        value = "+$" + value;
    }
    return value;
}

export default function ExpensesItem(props) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text
                    style={{
                        flex: 1,
                        color: props.info.balance > 0 ? "#A7FF88" : "#FF6C6C",
                        fontSize: 18,
                    }}
                >
                    {/* <NumberFormat
                        value={props.info.balance}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    /> */}
                    {formatMoney(props.info.balance)}
                </Text>
                <View style={{ flex: 1 }}></View>
                <Text
                    style={{
                        flex: 2,
                        color: "white",
                        fontSize: 18,
                    }}
                >
                    {props.info.name}
                </Text>
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
