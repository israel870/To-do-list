// let myRadio = document.getElementById('radioCheck');
// console.log(myRadio);
// if(myRadio.checked = true){
//     alert("Checked")
// } else {
//     alert("not checked")
// }
const newTask = document.getElementById('newTask');
const modalBg = document.getElementById('modalBg');
newTask.addEventListener('click', () => {
    modalBg.classList.remove('hidden');
    modalBg.classList.add('flex')
     listInput.value = '';
});
let listInput = document.getElementById('listInput');
let addTask = document.getElementById('addTask');
const listArr = [];
addTask.addEventListener('click', () => {
    if (listInput.value === '') {
        alert('Please input something');
        
        
        
    } else {
        modalBg.classList.remove('flex');
        modalBg.classList.add('hidden');
        console.log(listInput.value);
       
        if (listArr.includes(listInput.value)) {
            alert('This task already exists');
        } else {
            listArr.push(listInput.value);
        }
         console.log(listArr);
        updateUI();
        
    }
});
let toDoList = document.getElementById('toDoList');
let closeModal = document.getElementById('closeModal');

function updateUI() {
     toDoList.innerHTML = '';
    listArr.forEach((items, listArr) => {
        toDoList.innerHTML += `
         <div class="flex gap-3 items-center">
          <input type="radio" id="radioCheck"/>
          <p>
            ${items}
          </p>
          <button class=" bg-purple-500 rounded-sm w-18 text-white  px-3 py-1 " id = "deleteItem">
          <img src="/assets/weui--delete-on-outlined.png" alt="" width="20px" />
          </button>
          
        </div>`;
    });
}
closeModal.addEventListener('click', () => {
    modalBg.classList.remove('flex');
    modalBg.classList.add('hidden')
});

let deleteItem = document.getElementById('deleteItem');
deleteItem.addEventListener('click', () => {
    
})
