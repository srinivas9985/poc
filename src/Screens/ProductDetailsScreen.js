// screens/ProductDetailsScreen.js

import React from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { icons } from '../Common';
import { theme } from '../Theam';

const ProductDetailsScreen = ({ route, navigation }) => {
    const { product } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 20, }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{}} >
                    <Image source={icons['back']} style={{ height: 20, width: 20 }}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 16 }}>Details</Text>
            </View>

            <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
            <View style={styles.detailsContainer}>
                <FlatList
                    data={product.images}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={styles.productImage} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.title}>{product.title}</Text>
                <Text>{product.description}</Text>
                <Text style={styles.price}>Price: ${product.price}</Text>

                {/* Add more product details as needed */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    thumbnail: {
        width: '100%',
        height: 200,
        marginBottom: 16,
        borderRadius: 8,
    },
    detailsContainer: {
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        marginTop: 8,
        color: 'green',
    },
    productImage: {
        width: 100,
        height: 100,
        marginRight: 8,
        borderRadius: 8,
    },
});

export default ProductDetailsScreen;
