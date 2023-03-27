import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import { DataContext } from '../ContextProvider/ContextProvider'
import Toast from 'react-native-toast-message';
import Constants from '../Constants/Constants';


const CRUD = ({ navigation }) => {
    const { todos, setTodos, value, setValue, indexvalue, setIndexValue, age, setAge, city, setCity, password, setPassword, email, setEmail } = useContext(DataContext)
    const handleAddTodo = (index) => {
        if (index === 0) {
            Toast.show('This field is required.');
            if (value.length > 0 && age.length > 0 && city.length > 0 && email.length > 0 && password.length > 0) {
                setTodos([...todos, { text: value, age: age, city: city, email: email, password: password, key: Date.now(), checked: false }])
            }
        } else {
            let indexForUpdate = todos.findIndex((obj => obj.key == index));
            todos[indexForUpdate].text = value
            todos[indexForUpdate].age = age
            todos[indexForUpdate].city = city
            todos[indexForUpdate].email = email
            todos[indexForUpdate].password = password
            setTodos(todos)
        }
        setValue('')
        setAge('')
        setCity('')
        setEmail('')
        setPassword('')
        setIndexValue(0)
        navigation.navigate('Add')
    }
    const empty = value.length > 0 &&
        age.length > 0 &&
        city.length > 0 &&
        email.length > 0 &&
        password.length > 0
    Toast.show('This field is required.');
  
    return (
        <View  style={styles.container}>
            <Text style={{
                fontSize: 30, margin: 40, textAlign: "center", color: 'black', fontFamily:Constants.fontFamilyBold
        }}>ADD Your Todo List</Text>
            <TextInput
                style={styles.TextInput}
                multiline={true}
                onChangeText={(value) => setEmail(value)}
                placeholder='Enter Your Email Address'
                keyboardType='email-address'
                placeholderTextColor="black"
                value={email}
            />
            <TextInput
                style={styles.TextInput}
                multiline={true}
                onChangeText={(value) => setValue(value)}
                placeholder='Enter Your Todo List'
                placeholderTextColor="black"
                value={value}
            />
            <TextInput
                style={styles.TextInput}
                multiline={true}
                onChangeText={(value) => setAge(value)}
                placeholder='Enter Your Age'
                keyboardType='numeric'
                placeholderTextColor="black"
                value={age}
            />
            <TextInput
                style={styles.TextInput}
                multiline={true}
                onChangeText={(value) => setCity(value)}
                placeholder='Enter City Name'
                placeholderTextColor="black"
                value={city}
            />
            <TextInput
                style={styles.TextInput}
                multiline={true}
                onChangeText={(value) => setPassword(value)}
                placeholder='Enter your Password'

                placeholderTextColor="black"
                value={password}
            />
            <View style={{ marginHorizontal: 10 }}>
                <TouchableOpacity style={{ ...styles.SectionStyle, backgroundColor: !empty == true ? 'grey' : 'green' }} onPress={() => handleAddTodo(indexvalue)
                }  >
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CRUD
const styles = StyleSheet.create({
    TextInput: {
        color: 'black',
        padding: 15,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: '#ebebeb',
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 16, },
    SectionStyle: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: 'green',
        marginTop: 10,
        fontSize: 16,
        fontFamily: Constants.fontFamilyBold
    },
    container: {
        justifyContent: 'center', flex: 1, backgroundColor: 'orange',
    },
    text: { textAlign: 'center', color: '#fff', fontFamily: Constants.fontFamilyBold, fontSize: 18 }
});

{/* {
                todos.map((task) => (
                    <Task
                        text={task.text}
                        key={task.key}
                        checked={task.checked}
                        setChecked={() => handleChecked(task.key)}
                        update={() => update(task.key)}
                        delete={() => handleDeleteTodo(task.key)}

                    />
                ))

            } */}
// const handleDeleteTodo = (id) => {
//     setTodos(
//         todos.filter((todo) => {
//             if (todo.key !== id) return true
//         })
//     )
// }
// const update = (id) => {

//     let x = todos.filter((todo) => {
//         if (todo.key === id) return todo
//     })
//     // console.log(x[0].text)
//     setIndexValue(x[0].key)
//     setValue(x[0].text)
// }


// const handleChecked = (id) => {

//     setTodos(
//         todos.map((todo) => {
//             if (todo.key === id) todo.checked = !todo.checked;
//             return todo;
//         })
//     )
// }