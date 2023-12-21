// screens/SearchScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { apiCallGet } from '../APIConst/APIConst';



const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setproducts] = useState([])

    const handleSearch = () => {
        const filtered = products.filter(
            (product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    };
    useEffect(() => {
        getProducts()

    }, [])
    const getProducts = () => {
        console.log("===============")
        apiCallGet('/products').then(data => {
            // console.log("alll", data)
            setproducts(data?.products)
        })
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Text style={styles.price}>Price: ${item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search products"
                value={searchQuery}
                onChangeText={(text) => {
                    setSearchQuery(text);
                    handleSearch(text);
                }}
            />
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    thumbnail: {
        width: 80,
        height: 80,
        marginRight: 16,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        marginTop: 8,
        color: 'green',
    },
});

export default SearchScreen;
