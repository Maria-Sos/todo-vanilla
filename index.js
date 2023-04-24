const itemsList = document.querySelector('#itemsList')
const addItem = document.querySelector('.btn')
const intupField = document.querySelector('.inputField')

const addNewItem = () => {
    const itemValue = intupField.value
    const itemContainer = document.createElement('li')
    itemContainer.classList.add('item')
    itemContainer.innerText = itemValue

    const itemButtons = document.createElement('div')
    itemButtons.classList.add('itemBtn')
    itemContainer.appendChild(itemButtons)
    
    const doneButton = document.createElement('button')
    doneButton.innerText = '✔️'
    doneButton.classList.add('done')
    itemButtons.appendChild(doneButton)
    doneButton.addEventListener('click', () => {
        itemContainer.classList.toggle('itemCompleted')
    })

    const deleteButton = document.createElement('button')
    deleteButton.innerText = '🗑️'
    deleteButton.classList.add('delete')
    itemButtons.appendChild(deleteButton)
    deleteButton.addEventListener('click', () => {
        itemsList.removeChild(itemContainer)
    })

    itemsList.appendChild(itemContainer)
    intupField.value = ''
}

addItem.addEventListener('click', addNewItem)

