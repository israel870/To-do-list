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
});
let listInput = document.getElementById('listInput');
let addTask = document.getElementById('addTask');
addTask.addEventListener('click', () => {
    if (listInput.value = "" ) {
        alert('Please input something');
        return;
    }
})
