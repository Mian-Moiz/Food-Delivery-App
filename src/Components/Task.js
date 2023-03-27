import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import Constants from '../Constants/Constants';
const Task = (props) => (
    <View style={styles.taskWrapper}>
        <TouchableOpacity onPress={() => props.setChecked()}>
            <Icon
                name={props.checked ? "check" : "square"}
                size={30}
                color="#900"
                style={{ marginLeft: 15 }}
            />
        </TouchableOpacity>
        <View style={{ backgroundColor: 'white', padding: 20, height: '100%', width: '70%' ,marginHorizontal:10}}>
        <View>
            {props.checked && <View style={styles.verticalLine}></View>}
                <Text style={styles.task}>Todo{' '}:{' '}{props.text}</Text>
        </View>
        <View>
            {props.checked && <View style={styles.verticalLine}></View>}
                <Text style={styles.task}>Age {' '}:{' '}{props.age}</Text>
        </View>
        <View>
            {props.checked && <View style={styles.verticalLine}></View>}
                <Text style={styles.task}>Email{' '}:{' '}{props.email}</Text>
        </View>
        <View>
            {props.checked && <View style={styles.verticalLine}></View>}
                <Text style={styles.task}>City{' '}:{' '}{props.city}</Text>
        </View>
        <View>
            {props.checked && <View style={styles.verticalLine}></View>}
                <Text style={styles.task}> Password{' '}:{' '}{props.password}</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',padding:5,alignItems:'center'}}>
        <Icon
            name="edit"
            size={30}
            color="yellow"
            style={{ marginLeft: 'auto' }}
            onPress={props.update}
        />
        <Icon
            name="trash-2"
            size={30}
            color="#fff"
            style={{ marginLeft: 'auto' }}
            onPress={props.delete}
        />
        </View>
    </View>
)
export default Task
const styles = StyleSheet.create({
    taskWrapper: {
        marginTop: '5%',
        flexDirection: 'row',
        borderColor: 'red',
        borderBottomWidth: 1.5,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
        padding:10
    },
    task: {
        paddingBottom: 20,
        paddingLeft: 10,
        marginTop: 6,
        borderColor: 'red',
        borderBottomWidth: 1,
        fontSize: 17,
        fontFamily: Constants.fontFamilyBold,
        color: 'black',
    },
    verticalLine: {
        borderBottomColor: 'red',
        borderBottomWidth: 4,
        marginLeft: 10,
        width: '100%',
        position: 'absolute',
        marginTop: 15
    }
})