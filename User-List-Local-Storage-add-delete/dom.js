var candidates = [];
function init() {
  if(localStorage.getItem("candidates")!=null){
    candidates =JSON.parse(localStorage.getItem("candidates"));
    draw(); 
  }
}

function addCandidateToList() {
  var cand = getCandidate();
  var listItem = document.createElement("li");
  var deleteBtn = document.createElement("span");
  var text = document.createTextNode("X")
  deleteBtn.className ="btn btn-danger pull-right";
  
  deleteBtn.appendChild(text);
  deleteBtn.addEventListener("click",function(e){
       e.target.parentNode.parentNode.removeChild(e.target.parentElement);
       //this.parentNode.parentNode.removeChild(this);
  })
 
  
  listItem.className = "list-group-item";
  listItem.style = "overflow:auto";
  listItem.innerText = "Name :" + cand.fullName;
  
  var myList = document.getElementById("myList");
   listItem.appendChild(deleteBtn);
    myList.appendChild(listItem);
}

function draw(){
  var myList = document.getElementById("myList");
  myList.innerHTML = "";
  for(var i=0;i<candidates.length;i++){
 var listItem = document.createElement("li");
  var deleteBtn = document.createElement("span");
  var text = document.createTextNode("X")
  listItem.index = i;
  deleteBtn.className ="btn btn-danger pull-right";
  deleteBtn.appendChild(text);
  deleteBtn.addEventListener("click",function(e){
       //e.target.parentNode.parentNode.removeChild(e.target.parentElement);
       candidates.splice(e.target.parentNode.parentNode.index,1);
       draw();
       saveToLocalStorage();
       //this.parentNode.parentNode.removeChild(this);
  })
  listItem.className = "list-group-item";
  listItem.style = "overflow:auto";
  listItem.id = candidates[i].id;
  listItem.innerText = "Name :" + candidates[i].fullName;
  
  

   listItem.appendChild(deleteBtn);
    myList.appendChild(listItem);
  }
}

function findInArray(cand){
   for(var i=0;i<candidates.length;i++){
      if(candidates[i].id == cand.id) return i;
   }

}
function addCandidateToList2() {
  var id = Math.floor(Math.random()*100000) + 10000;
  var cand = getCandidate();
  cand.id = id;
  candidates.push(cand);
  draw();
  saveToLocalStorage();
 
}

function saveToLocalStorage(){
  localStorage.setItem("candidates",JSON.stringify(candidates));
}




init();



function getCandidate() {
  var fullName = document.getElementsByName("field1")[0].value;
  var about = document.getElementsByName("field3")[0].value;
  var job = document.getElementById("job").value;
  var item = document.querySelector("input.field1");
   var candidate = new Candidate(fullName,about,job);
  console.log("your name is :" + name + " about: " + about + " job:" + job);
  return candidate;
}


