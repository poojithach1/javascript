// const items = document.querySelector('.add-items');
const itemsList = document.querySelector('ul');
const inputElemnet = document.getElementById('add-input');

const addButton = document.getElementById('add-button');

function onClickAdd() {
 let list = [];
 let inputValue = inputElemnet.value;
 let title = document.createElement('h3');
 title.innerText = inputValue;
 list.append(title);
 itemsList.append(list);

 let n= inputValue.length;
 for (let i=1;i<=n;i++) {
     let li= document.createElement('li');
     let deleteButton=document.createElement('button');
     deleteButton.innerText= 'delete';
     let editButton= docuemnt.createElement('button');
     editButton.innerText='edit';
     li.append(i);
     li.appendChild(deleteButton);
     li.appendChild(editButton);
     list.push(li);
 } 
 return list ;
 
 function deleteItem() { 
    itemsList.removeChild(listItem);
 }

 function editItem() {

 }
        
 deleteButton.addEventListener('click',deleteItem);
 editButton.addEventListener('click',editItem);


}









addButton.addEventListener('click',onClickAdd);








// function onClickAdd() {
//    //get input element value 
//    //get itemsList 
//    //create l
//    //appendList
//    let inputValue = inputElemnet.value;
//    let listItem = document.createElement('li');
//    let title = document.createElement('h3');
//    title.innerText = inputValue;
//    let deleteButton = document.createElement('button');
//    deleteButton.textContent = 'delete' ;
//    let editButton = document.createElement('button');
//    editButton.textContent = 'edit';
//    le);listItem.appendChild(tit
//    listItem.appendChild(deleteButton);
//    listItem.appendChild(editButton)  ;
//    itemsList.appendChild(listItem);

  
//     function deleteItem() { 
//         itemsList.removeChild(listItem);
//     }
    
//   deleteButton.addEventListener('click',deleteItem);

// }


// let list =itemsList.childNodes;
// for (let i=0; i<=list.length; i++) {
//  let arrayValue = list[i];
//  console.log(arrayValue);
// }

// addButton.addEventListener('click',onClickAdd); 


