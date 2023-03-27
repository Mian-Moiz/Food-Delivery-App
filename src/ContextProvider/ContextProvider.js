import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, createContext } from 'react';
export const DataContext = createContext("DataContext");

const ContextProvider = (props) => {
    const [password, setPassword] = useState('123qwe');
    const [name, setName] = useState('')
    const [age, setAge] = useState('20')
    const [city, setCity] = useState('lahore')
    const [value, setValue] = useState('')
    const [indexvalue, setIndexValue] = useState(0)
    const [todos, setTodos] = useState([])
    const [email, setEmail] = useState('')
    const [itemName, setitemName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [cart, setCart] = useState([])
    
    const getRequest = async (url, callback) => {
        fetch(url, {
            method: 'GET',
            headers: {
                accept: 'text/plain',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                callback(responseJson.success, responseJson.result, responseJson.error);
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    const saveToAsyncStorageCredentials = async (storageName, dataToInsert) => {
        await AsyncStorage.setItem(storageName, JSON.stringify(dataToInsert));
    }

    const values = {
        age,
        name,
        city,
        cart,
        email,
        value,
        todos,
        indexvalue,
        indexvalue,
        password,
        itemName,
        price, 
        quantity, 
        setQuantity,
        setitemName,
        setCart,
        getRequest,
        setName,
        setAge,
        setCity,
        setValue,
        setTodos,
        setEmail,
        setIndexValue,
        setPassword,
        setPrice,
        saveToAsyncStorageCredentials,
    }
    return (
        <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
    );
}
export default ContextProvider;
