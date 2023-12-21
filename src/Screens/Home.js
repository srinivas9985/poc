// screens/HomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { apiCallGet } from '../APIConst/APIConst';
import { connect } from 'react-redux';

const Home = ({ loggedIn, dispatch, navigation }) => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        getProducts()

    }, [])
    const getProducts = () => {
        //Get method
        apiCallGet('/products').then(data => {
            setproducts(data?.products)
        })
    }
    const renderRating = (rating) => {
        const filledStars = '★'.repeat(Math.floor(rating));
        const emptyStars = '☆'.repeat(Math.floor(5 - rating));

        return filledStars + emptyStars;
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })} style={styles.productContainer} >
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.productInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{renderRating(item.rating)}</Text>
                    <Text style={styles.ratingText}>Rating</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Product List</Text>
                {loggedIn &&
                    <TouchableOpacity onPress={() => navigation.navigate('AddProductScreen')}>
                        <Text style={styles.addButton}>Add</Text>
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 16,
        marginTop: 8,
        marginLeft: 16
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addButton: {
        fontSize: 16,
        color: 'blue',
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    productInfo: {
        marginLeft: 12,
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: 'green',
        marginTop: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    rating: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 4,
    },
    ratingText: {
        fontSize: 12,
        color: '#666',
    },
});
const mapStateToProps = (state) => ({
    loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(Home);