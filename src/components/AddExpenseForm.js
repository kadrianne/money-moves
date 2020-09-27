import React from 'react'
import '../css/mystyles.css'

export default function AddExpenseForm() {
    return (
        <div id='add-expense-form' class="field is-horizontal">
            <div class="control">
                <input class="input" type="text" placeholder="Text input" />
            </div>
        </div>
    )
}