import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View, StatusBar, Switch } from 'react-native';
import { Constants } from 'expo-constants';

let id = 0

const style = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appContainer: {
    paddingTop: 54,
  },
  fill: {
    flex: 1,
  }
})

const Todo = props => (
  <View style = {style.todoContainer}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Button onPress = {props.onDelete} title='Delete' />
    <Text>{props.todo.text}</Text>
  </View>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    id++
    const text = `TODO number ${id}`
    this.setState({
      todos: [
        ...this.state.todos,
        { id: id, text: text, checked: false},
      ],
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <View style={[style.appContainer, style.fill]}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title='Add TODO' />
        <ScrollView style={style.fill}>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}
