const IdInPara = 'inpara';
const IdAddInPara = 'add-inpara';

function init() {
  const addInpara = document.getElementById(IdAddInPara);

  addInpara.onclick = e => {
    console.log(e);
    var node = document.createElement("div");                 // Create a <li> node
    node.classList.add("box");
    var textnode = document.createTextNode("new input para"); // Create a text node
    node.appendChild(textnode);                               // Append the text to <li>
    document.getElementById(IdInPara).appendChild(node);      // Append <li> to <ul> with id="myList"
  };
}
