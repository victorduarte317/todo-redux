import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <h1>
                    <PageHeader 
                        name='Tasks' 
                        small='Register'>
                    </PageHeader>

                    <TodoForm />
                    <TodoList />
                </h1>
            </div>
        )
    }
}