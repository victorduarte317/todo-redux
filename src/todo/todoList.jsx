import { connect } from 'react-redux'
import React from 'react'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { removeTask, markAsDone, markAsPending } from './todoActions'

const TodoList = props => {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>

                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}>
                    </IconButton>

                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}>
                    </IconButton>

                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.removeTask(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))   
    }
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="tableActions"> Actions </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({markAsDone, markAsPending, removeTask}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)