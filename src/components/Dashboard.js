import React from 'react'
import '../css/mystyles.css'
import AddExpenseForm from './AddExpenseForm'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <button id='add-expense-button' class='button is-primary'>
                <span class='icon is-small'>
                    <i class='fas fa-plus'></i>
                </span>
                <span>Add Expense</span>
            </button>
            <AddExpenseForm />
        </div>
    )
}