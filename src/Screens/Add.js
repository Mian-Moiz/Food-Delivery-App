import { View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Task from '../Components/Task';
import { DataContext } from '../ContextProvider/ContextProvider';

const Add = ({ navigation}) => {
  const {todos,setTodos,setIndexValue,setValue,setAge,setCity,setPassword,setEmail} = useContext(DataContext)

  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true
      })
    )
  }
  const update = (id) => {
    let x = todos.filter((todo) => {
      if (todo.key === id) return todo
    })
    // console.log(x[0].text)
    setIndexValue(x[0].key)
    setValue(x[0].text)
    setAge(x[0].age)
    setCity(x[0].city)
    setPassword(x[0].password)
    setEmail(x[0].email)

    navigation.navigate('CRUD')

  }
  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    )
  }
  return (
    <ImageBackground source={require('../Assets/background.jpg')} style={{ flex: 1 ,backgroundColor:'black'}}>
<ScrollView>
      {
        todos.map((task) => (
          <Task
            age={task.age}
            city={task.city}
            email={task.email}
            password={task.password}
            text={task.text}
            key={task.key}
            checked={task.checked}
            setChecked={() => handleChecked(task.key)}
            update={() => update(task.key)}
            delete={() => handleDeleteTodo(task.key)}

          />
        ))
      }
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginVertical: 40, padding: 20 }}>
        <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 10, padding: 10 }}
          onPress={() => {navigation.navigate('CRUD')}}>
          <Ionicons name='add' size={40} color='white' />
        </TouchableOpacity>
      </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Add