const cardContainer = async ()=>{
    try{
        const res =await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await res.json();;
       
         const cardCollection= document.getElementById('cardCollection');
        for(var i=0;i<result.length; i++){
                const divChild = document.createElement("div");
                
                divChild.innerHTML=`
                <div class="card-body">
                  <h5 class="card-title">Name : ${result[i].name}</h5>
                  <p class="card-text"> User Name : ${result[i].username}</p>
                  <p class="card-text"> Emailid : ${result[i].email}</p>
                  <p class="card-text"> City: ${result[i].address.city}</p>
                </div>`
                
                cardCollection.append(divChild);
        }   
        divChild.setAttribute('class',"child")
                
    }catch(error){
        console.log(console.log(error));
    }
}
cardContainer();