const input = document.querySelector('.input-block');
const add = document.querySelector('#addTask');
const clear = document.querySelector('#clearTask');
const collection = document.querySelector('.list');
loadEventListeners();

function loadEventListeners(){
    add.addEventListener('click',addItems);
    clear.addEventListener('click',clearItems);
    collection.addEventListener('change',checked);
    document.addEventListener('DOMContentLoaded',getTasks)
}
var i = 1;
function addItems(e){
    e.preventDefault();
    const inputval = input.value;
    const li = document.createElement('li');
    collection.appendChild(li);
    li.innerHTML = `<fieldset class='form-group'><label for='paperChecks${i}'class='paper-check'><input type='checkbox' name='paperChecks' id='paperChecks${i}' value='task1' class="checkbox"><span> ${inputval}</span></label></fieldset>`;
    i++;
    input.value = "";
    storeTask(inputval);
    console.log(i);
    console.log(li);
    console.log(inputval);
}
function clearItems(e){
    //collection.innerHTML = "";
    while(collection.firstChild){
        collection.firstChild.remove();
    }
    localStorage.clear();
}
function checked(e){
    //console.log(e.target.parentElement.parentElement.parentElement);
    e.target.parentElement.parentElement.parentElement.remove();
    
}
function storeTask(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getTasks(){
     let tasks;
     var j = 1;
    console.log("loaded");
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
    console.log("yes");
    const li = document.createElement('li');
    collection.appendChild(li);
    li.innerHTML = `<fieldset class='form-group'><label for='paperChecks${j}'class='paper-check'><input type='checkbox' name='paperChecks' id='paperChecks${j}' value='task1' class="checkbox"><span> ${task}</span></label></fieldset>`;
    j++;
    });
}
//function speech(){
//window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//
//const recognition = new SpeechRecognition();
//
//recognition.interimResults = true;
//    
//    recognition.addEventListener('result',e=>{
//        //console.log(e);
//        const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
//        console.log(transcript);
//        input.value = transcript;
////        if(e.results[0].isFinal){
////            p = document.createElement('p');
////            words.appendChild(p);
////        }
//
////    });
////    //recognition.addEventListener('end',recognition.start);
////    recognition.start();
////}
////speech();
//
//console.log("not working");
//
//        if(transcript.includes('hello')){
//            console.log('gobu');
//        }
//    });
//    //recognition.addEventListener('end',recognition.start);
//    recognition.start();
//}
//speech();
//
