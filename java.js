function addAnnouncement(){

let input =
document.getElementById(
"announcementInput"
);

let text = input.value;

if(text===""){
alert("Enter announcement");
return;
}

let li =
document.createElement("li");

li.innerHTML = `
${text}

<button onclick="editAnnouncement(this)">
Edit
</button>

<button onclick="deleteAnnouncement(this)">
Delete
</button>
`;

document
.getElementById("announcementList")
.appendChild(li);

input.value="";
}

function deleteAnnouncement(btn){

btn.parentElement.remove();

}

function editAnnouncement(btn){

let currentText =
btn.parentElement.firstChild.textContent;

let newText =
prompt(
"Edit Announcement",
currentText
);

if(newText){

btn.parentElement.firstChild.textContent =
newText;

}

}
