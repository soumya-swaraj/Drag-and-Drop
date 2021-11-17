const fill = document.getElementsByClassName("fill")[0];
const empties = document.getElementsByClassName("empty");
// console.log(fill);
// console.log(empties);

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("drop", drop);
    empty.addEventListener("dragend", dragEndForEmpties);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
}


function dragStart() {
    this.classList.add("hold");
    setTimeout(() => {
        this.classList.add("invisible");
    }, 1);
}

function dragEnd() {
    this.classList.remove("invisible");
    this.classList.remove("hold");
}

function dragOver(e) {
    console.log("over");
    /*The ondragover event occurs when a draggable element or text selection is being 
    dragged over a valid drop target. By default, data/elements cannot be dropped 
    in other elements. To allow a drop, we must prevent the default handling of the 
    element. This is done by calling the event.*/
    e.preventDefault();
}
function drop(e) {
    // prevent default action (open as link for some elements)
    // e.preventDefault(); // here not required
    e.target.append(fill)
}
function dragEnter(params) {
    this.classList.add("hover");
}
function dragLeave(params) {
    this.classList.remove("hover");
}
function dragEndForEmpties() {
    this.classList.remove("hover");
}