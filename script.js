// All document selected elements
const boxContainer = document.querySelector(".box-container");
const userDpHover = document.querySelector(".user-info");
const myDp = document.querySelector('.user-name #mydp');
const userInput = document.querySelector("#user-input");
const microAndSend = document.querySelector("#fa-microphone");
const microPhone = document.querySelector(".fa-microphone i");
const userMessages = document.querySelector("#user-messages");
const mainDate = document.querySelector(".user-encryptmessage p#main-date");
const userEncryptMessageP1 = document.querySelector(".user-encryptmessage p:nth-child(1)");
const userEncryptMessageP2 = document.querySelector(".user-encryptmessage p:nth-child(2)");
const userEncryptMessageP3 = document.querySelector(".user-encryptmessage p:nth-child(3)");
const userEncryptMessageP4 = document.querySelector(".user-encryptmessage p:nth-child(4)");
const userEncryptMessageP5 = document.querySelector(".user-encryptmessage p:nth-child(5)");
const userEncryptMessageP6 = document.querySelector(".user-encryptmessage p:nth-child(6)");
const encrypted = document.querySelector(".encrypted");
const nameP = document.querySelector(".name p:nth-child(1)");
const namePP = document.querySelector(".name p:nth-child(2)");
const magnifyingGlass = document.querySelector("#magnifyingglass");
const inputs = document.querySelector(".inputs");
const defaultFormat = document.querySelector(".default-format");
const endToEndEncrypt = document.querySelector("#End-to-end");
const searchProfileNames = document.querySelector("#search-profile-name");
const userInfoPopup = document.querySelector(".user-info-popup");
const userChatSection = document.querySelector(".user-chat");



searchProfileNames.focus();
userMessages.style.display = 'none';
userInfoPopup.style.display = 'none';
myDp.style.display = 'none';


function saveMessage(){
  let message = userInput.value;
  if (message.trim() !== '') { 
    var messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
    displayMessages();
  } 
}


//dynamically excuting profile box
function userContainer(){
  for(let i = 0; i < data.length; i++){
    boxContainer.innerHTML  += 
    `<div class='box' id="${i}"><div class='dp'><img src=${data[i].img} alt=${data[i].message}></div> <div class='bsc-name'><div class='bsc-n'><p id="box-name${i}">${data[i].para}</p><span>${data[i].date}</span></div> <div class='mess'><p>${data[i].para2}</p></div></div></div>`; 
  }
}
userContainer();

const res = boxContainer.querySelectorAll('.box');
res.forEach(take =>{
  take.addEventListener("click",()=>{
    if(take.id == 1){
      userMessages.style.display = 'block';
    }else{
      userMessages.style.display = 'none';
    }
  });
})


const boxes = boxContainer.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener("click", ()=>{
        if(box.id == 0 || box.id == 1){
           userInfoPopup.classList.add("user-infopopup");
          // userDpHover.addEventListener("click",userInfo);
        }else{
          // userDpHover.removeEventListener("click",userInfo);
          userInfoPopup.style.display = 'none';
        }
        for(let i = 0; i < profiles.length; i++){
          if(i == box.id){
            myDp.style.display = 'block';
            userDpHover.classList.add("chat-head");
            myDp.src = profiles[i].ProDpImgsrc;
            nameP.textContent = profiles[i].ProName;
            namePP.textContent = profiles[i].ProNameBelow;
            magnifyingGlass.innerHTML = profiles[i].ProMagnifyingIcon;
            userEncryptMessageP1.textContent = profiles[i].ProBodyDate;
            userEncryptMessageP1.classList.add(profiles[i].EncryptP1);
            userEncryptMessageP2.innerHTML = profiles[i].EndToEndMess;
            userEncryptMessageP2.classList.add(profiles[i].EncryptP2);
            userEncryptMessageP3.textContent = profiles[i].DissapearMess;
            userEncryptMessageP3.classList.add(profiles[i].EncryptP3);
            userEncryptMessageP4.textContent = profiles[i].ProBodyDate;
            userEncryptMessageP4.classList.add(profiles[i].EncryptP4);
            userEncryptMessageP5.innerHTML = profiles[i].DissapearTurnedOff;
            userEncryptMessageP5.classList.add(profiles[i].EncryptP5);
            userEncryptMessageP6.textContent = profiles[i].ProBodyDate;
            userEncryptMessageP6.classList.add(profiles[i].EncryptP6);
          }
       }
        inputs.style.visibility = 'visible';
        defaultFormat.style.display = 'none';
        endToEndEncrypt.style.display = 'none';
        userMessages.style.display = 'block';
        userInput.focus();
  });
  box.classList.add('trans');
});
function userInfo(){
  userInfoPopup.style.display = 'block';
  myDp.style.display = 'none';
}

//WhatsApp profile dp opacity setting from profile info section
userDpHover.addEventListener("mouseover",()=>{
  myDp.style.opacity = '0.6';
});
userDpHover.addEventListener("mouseout",()=>{
  myDp.style.opacity = '1';
});

//toggling paper and microphone icon when keyup event fired
userInput.addEventListener('keyup', () => {
  if (userInput.value.trim() !== "") {
    microAndSend.innerHTML = '<i class="fa-solid fa-paper-plane paperPlane"></i>';
  } else {
    microAndSend.innerHTML = '<i class="fa-solid fa-microphone mPhone"></i>';
  }
});


//main body message box function
let span;
let li;
var func = ()=>{
            displayMessages();
}

function displayMessages() {
  var messages = JSON.parse(localStorage.getItem('messages')) || [];
  console.log(messages);
  if (messages.length >= 0) {
       userMessages.innerHTML = '';
       messages.forEach(function(message, index) {
        li = document.createElement('li');
        var span = document.createElement('span');
        span.textContent = message;
        const span2 = document.createElement("span");
        const currentTime = new Date();
        let hours = currentTime.getHours();
        const timeFormat = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        const minutes = currentTime.getMinutes();
        const m = minutes < 10 ? `0${minutes}` : `${minutes}`;
        span2.textContent = `${hours}:${m} ${timeFormat}`;
        span2.classList.add("message-time");
        span.classList.add("messages-word");
        span.appendChild(span2);
        var removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
        removeButton.classList.add("removeBtnStyle");
        removeButton.onclick = function() {
          span.classList.add("spaneffect");
          removeButton.classList.add("removeeffect");
          setTimeout(()=>{
            removeMessage(index);
          },300)
        };
        li.appendChild(span);
        li.classList.add("line");
        li.appendChild(removeButton);
        userMessages.appendChild(li);
        if(userInput.value.length >= '85'){
          span2.classList.add("message-timeLine");
        }else{
          span2.classList.add("message-time");
        }                          
        userInput.value = "";
        microAndSend.innerHTML = '<i class="fa-solid fa-microphone"></i>';
       });
  } else {
      alert('No messages stored yet.');
  }
}

  // Function to remove a message from localStorage
function removeMessage(index) {
  var messages = JSON.parse(localStorage.getItem('messages')) || [];
  if (index >= 0 && index < messages.length ) {
      messages.splice(index, 1); // Remove the message at the given index
      localStorage.setItem('messages', JSON.stringify(messages)); // Update localStorage
      displayMessages(); // Refresh the displayed messages
  }
}

//printing message box from input in main message body when click event fired on paper icon
const enterKey = (e) =>{
          if(e.target.tagName === "I"){
            saveMessage();
            func();
          }
};
microAndSend.addEventListener("click", enterKey)

//printing message box from input in main message body when click event fired on 13 keyCode(Enter)
const keyCode = (e) =>{
        if(e.keyCode === 13){
          saveMessage();
          func();
        }
};
userInput.addEventListener("keyup", keyCode)





