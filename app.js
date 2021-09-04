function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo__input");
    console.log(text.value)
    db.collection("todo-items").add({
        text : text.value,
        status:"active"
    })
    text.value = "";
}

function getitem(){
    db.collection("todo-items").onSnapshot((snapshot)=>{
        console.log(snapshot)
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
        });
        generateItem(items);
    })
}

function generateItem(items){
    let itemHTML = "";
    items.forEach((item) => {
        itemHTML += `
            <div class="todo__item">
                <div class="check">
                    <div data-id="${item.id}" class="check__mark" ${item.status === "completed" ? "checked" : ""}>
                        <img src="./assets/icon-check.svg" alt="">
                    </div>
                </div>
                <div class="todo__text" ${item.status === "completed" ? "checked" : ""}>
                    ${item.text}
                </div>
            </div>
        
        `
    })
    
    document.querySelector(".todo__items").innerHTML = itemHTML;
    createEventListener();

}

function createEventListener(){
    let todoCheckMark = document.querySelectorAll(".todo__items .check__mark");
    todoCheckMark.forEach((checkMark) => {
        checkMark.addEventListener("click", function(){
            markCompleted(checkMark.dataset.id);
        })
    })

}

function markCompleted(id){
    console.log("Check Mark Clicked")
    // From a Database
    let item = db.collection("todo-items").doc(id);
    console.log(item) 
    item.get().then(function(doc){
        if (doc.exists){
            let status = doc.data().status;
            if(status == "active"){
                item.update({
                    status : "completed"
                })
            } else if (status == "completed"){
                item.update({
                    status : "active"
                })
            }
        }
    })
     
}


getitem();