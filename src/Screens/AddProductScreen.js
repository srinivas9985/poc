// screens/AddProductScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { icons } from '../Common';

const AddProductScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = () => {
        // Perform product addition logic here
        // You can dispatch an action or update the state in the HomeScreen to add the new product
        // For simplicity, I'll just log the product details for now
        console.log('Product Added:', { title, description, price });
        // Optionally, you can navigate back to the HomeScreen after adding the product
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{}} >
                    <Image source={icons['back']} style={{ height: 20, width: 20 }}></Image>
                </TouchableOpacity>
                <Text style={styles.title}>Add Product</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Product Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Product Description"
                value={description}
                onChangeText={(text) => setDescription(text)}
            // multiline
            />
            <TextInput
                style={styles.input}
                placeholder="Product Price"
                value={price}
                onChangeText={(text) => setPrice(text)}
                keyboardType="numeric"
            />
            <Button title="Add Product" onPress={handleAddProduct} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        //  marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        borderRadius: 10,
        paddingHorizontal: 8,
    },
});

export default AddProductScreen;
