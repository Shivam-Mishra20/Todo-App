const inputbox = document.querySelector('#input')
const addBtn = document.querySelector('#btn')
const listcontainer = document.querySelector('#task-list')


const AddData = ()=>{
    if(inputbox.value === '' ){
        new Error ('enter something in input box')


    }
    else{
        let li= document.createElement('li')
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value=''
    saveData()

    
}


const saveData = ()=>{
    localStorage.setItem('New notes', listcontainer.innerHTML)
}


addBtn.addEventListener('click',AddData)

input.addEventListener('keypress',(E)=>{
    if(E.key ==="Enter"){
        AddData()
    }
});


listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
        
        saveData()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData()
    }

} ,false)

const showTaskonrefresh= ()=>{
    listcontainer.innerHTML=localStorage.getItem('New notes')
}
showTaskonrefresh()