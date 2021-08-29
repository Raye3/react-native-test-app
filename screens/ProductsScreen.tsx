import React, { useState, useContext } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function ProductsScreen({productsList}) {

    // list of products to be viewed
    const renderedItem = ({ item }) => {
        return (
            <View style={styles.productWrapper}>
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Image
                        style={styles.productImage}
                        source={{
                            uri: 'https://www.incathlab.com/images/products/default_product.png',
                        }}
                    />
                </View>
                <View style={{flex: 2}}>
                    <Text style= {{textTransform: 'capitalize'}}>{item.name}</Text>
                    <Text>Price: ${item.price}</Text>
                    <Text>Quantity: {item.quantity}</Text>
                </View>
            </View>
        );
    }

    // To be rendered when the products list is empty
    const emptyProductsList = () => {
        return (
            <View>
                <Text style={{textAlign: 'center'}}>No product Has been added</Text>
            </View>
        );
    }
    return (
        <View>
            <Text style={{marginBottom: 10, fontSize: 24, textAlign: 'center', marginVertical: 15}}>Products List</Text>
            <FlatList
                data={productsList}
                renderItem={renderedItem}
                ListEmptyComponent={emptyProductsList}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    productImage: {
        width: 50,
        height: 50
    },
    productWrapper : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        paddingBottom: 5,
        borderColor: 'black',
        borderBottomWidth: 0.5
    }
})

