import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    // You can use either key property in object or keyExtractor approach

    const friends = [
        { name: "Friend #1", age: "30" },
        { name: "Friend #2", age: "29" },
        { name: "Friend #3", age: "35" },
        { name: "Friend #4", age: "27" },
        { name: "Friend #5", age: "22" },
        { name: "Friend #6", age: "30" },
        { name: "Friend #7", age: "32" },
        { name: "Friend #8", age: "31" },
        { name: "Friend #9", age: "25" },
    ];

    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    },
});

export default ListScreen;
