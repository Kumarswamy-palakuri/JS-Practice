let inputTask=document.getElementById('inputTask');
let addBtn=document.getElementById('addToDo');
let listContainer=document.getElementById('ol');
// if(inputTask.value!='')
addBtn.addEventListener('click',function(){
if(inputTask.value)
  var task=document.createElement('li');
  task.classList.add('list-styling')
  task.innerText=inputTask.value;
  listContainer.appendChild(task);
  inputTask.value="";
  task.addEventListener('click',function(){
    task.style.textDecoration="line-through";
  })
  task.addEventListener('dblclick',function(){
    listContainer.removeChild(task);
  })
});