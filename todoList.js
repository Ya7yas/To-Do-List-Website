////////To LOAD (to do list )///////////////
function onload(){
    if(localStorage.length>0){
        for (let index = 1; index < localStorage.clickcount+1 ; index++) {
                if(localStorage.getItem(index)){//ckeck if this item is exicte
                let container=document.getElementById("container");
                container.style.visibility="visible";
                let div=document.createElement('div');//creat div
                let p=document.createElement('p');//creat p
                let btn=document.createElement('button');//creat button
                div.id="taskDiv"+index;//add a uneqe id for each div so we can delete it by useing this id
                div.className="taskDiv";//add the same class for all created divs to give them the same style
                btn.id="taskBtn"+index; //add a uneqe id for buttons
                container.appendChild(div);
                div.appendChild(p);
                div.appendChild(btn);
                p.innerText=localStorage.getItem(index);//add local items value to p
                btn.innerText="Delete";
                btn.addEventListener('click', fun =() =>{//add event listener to each button so we can delete the div perant
                    div.remove();
                    localStorage.removeItem(index);//delete item from local storage
                })
                }
                else continue;
        }
    }
}
///////Add Button//////
document.getElementById("addBtn").addEventListener('click', fun=()=>{
    let value = document.getElementById("taskDesciption").value;
    if(value =="") window.alert("Please write your task first");//check if textarea is not empty
    else{
        var counter;
        if (localStorage.clickcount) {//check if clickcount is exicted
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            counter=localStorage.clickcount;
        } else {
            localStorage.clickcount = 1;
            counter=localStorage.clickcount;
        }
        localStorage.setItem(counter,value);//add items to local storage
        let container=document.getElementById("container");
        container.style.visibility="visible";
        document.getElementById("taskDesciption").value="";
        let div=document.createElement('div');
        let p=document.createElement('p');
        let btn=document.createElement('button');
        div.id="taskDiv"+counter;
        div.className="taskDiv";
        btn.id="taskBtn"+counter;
        container.appendChild(div);
        div.appendChild(p);
        div.appendChild(btn);
        p.innerText=value;
        btn.innerText="Delete";
        btn.addEventListener('click', fun =() =>{
            div.remove();
            localStorage.removeItem(counter);//delete item from local storage

        })
    }
})

///////clear Button//////
document.getElementById("clearBtn").addEventListener('click', fun=()=>{
    if(localStorage.clickcount==0){alert("No tasks to delete")};
    for (let index = 0; index < localStorage.length ; index++) {
        let key=localStorage.key(index);
        let div=document.getElementById("taskDiv"+key);
        if(div){
            div.remove();
        }
    } 
    localStorage.clear();
    localStorage.clickcount=0;
    let container=document.getElementById("container");
    container.style.visibility="hidden"; //to hide task div when all divs are deleted
})

