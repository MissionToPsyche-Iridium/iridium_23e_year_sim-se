document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflow = "hidden";

const main = document.querySelector("main");
main.style.position = "relative";
main.style.width = "100vw";
main.style.height = "100vh";

const div1 = document.getElementById("div1");
div1.style.position = "absolute";
div1.style.top = "0";
div1.style.left = "0";
div1.style.width = "100%";
div1.style.height = "100%";
div1.style.backgroundColor = "lightblue";
div1.style.transition = "all 0.75s ease";

const div2 = document.getElementById("div2");
div2.style.position = "absolute";
div2.style.top = "5px";
div2.style.right = "5px";
div2.style.width = "20vw";
div2.style.height = "40vh";
div2.style.backgroundColor = "lightcoral";
div2.style.zIndex = "1";
div2.style.transition = "all 0.75s ease";

const arrowIcon = document.getElementById("arrow-icon");
arrowIcon.style.color = "orange";
arrowIcon.style.fontSize = "24px";
arrowIcon.style.cursor = "pointer";
arrowIcon.style.position = "absolute";
arrowIcon.style.visibility = "hidden";

const rightIcon = document.getElementById("right-icon");
rightIcon.style.color = "orange";
rightIcon.style.fontSize = "24px";
rightIcon.style.cursor = "pointer";
rightIcon.style.position = "absolute";
rightIcon.style.visibility = "hidden";
rightIcon.style.top = "5px";
rightIcon.style.right = "5px";

// Function to swap z-index values
function swapZIndex() {
    const z1 = div1.style.zIndex;
    const z2 = div2.style.zIndex;
    div1.style.zIndex = z2;
    div2.style.zIndex = z1;
}

// Click action for `arrowIcon` (div2's icon)
arrowIcon.addEventListener("click", () => {
    div2.style.top = "0";
    div2.style.right = "0";
    div2.style.width = "100vw";
    div2.style.height = "100vh";
    div2.style.padding = "0";

    div1.style.top = "5px";
    div1.style.left = "5px";
    div1.style.width = "20vw";
    div1.style.height = "40vh";

    updateIconVisibility();
    swapZIndex();
});

// Click action for `rightIcon` (div1's icon)
rightIcon.addEventListener("click", () => {
    div1.style.top = "0";
    div1.style.left = "0";
    div1.style.width = "100vw";
    div1.style.height = "100vh";

    div2.style.top = "5px";
    div2.style.right = "5px";
    div2.style.width = "20vw";
    div2.style.height = "40vh";

    updateIconVisibility();
    swapZIndex();
});

// Function to update icon visibility based on size
function updateIconVisibility() {
    if (div2.style.width === "20vw") {
        arrowIcon.style.visibility = "visible";
    } else {
        arrowIcon.style.visibility = "hidden";
    }

    if (div1.style.width === "20vw") {
        rightIcon.style.visibility = "visible";
    } else {
        rightIcon.style.visibility = "hidden";
    }
}

// Call `updateIconVisibility` initially to hide icons when divs are full size
updateIconVisibility();
