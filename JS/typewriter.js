document.addEventListener("DOMContentLoaded", () => {
    const headOne = document.querySelector("#main h1");
    const h3 = document.querySelector("#sub-one h3");
    const lines = document.querySelectorAll("#sub-one p .line");
    const gridThreeElements = document.querySelectorAll(".grid-three");

    // Show everything immediately instead of typewriter animation
    headOne.classList.add("typing-complete");
    h3.classList.add("start-typing");
    
    lines.forEach(line => {
        line.classList.add("start-typing");
    });

    gridThreeElements.forEach(element => {
        element.classList.add("show");
    });

    /* Original typewriter animation code:
    // Start typing animation for h1
    headOne.addEventListener("animationend", () => {
        headOne.classList.add("typing-complete"); // Stop caret blinking
        h3.classList.add("start-typing");
    });

    // Start typing animation for h3 
    h3.addEventListener("animationend", () => {
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add("start-typing");
            }, index * 3000); // Delay each line's animation
        });

        // After all lines are done typing, reveal grid-three elements
        setTimeout(() => {
            gridThreeElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add("show"); // Add show class one by one
                }, index * 1000); // Delay each grid-three by 1 second
            });
        }, lines.length * 3000); // Delay revealing grid-three until all lines finish
    });
    */
});
