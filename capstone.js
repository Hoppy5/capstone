document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const descElements = document.querySelectorAll(".desc");
    
    let isLess = true; 

    toggleButton.addEventListener("click", function() {
        if (isLess) {
            
            for (let i = 1; i < descElements.length; i++) {
                descElements[i].style.display = "none";
            }
            toggleButton.textContent = "more"; 
        } else {
            
            descElements.forEach((element) => {
                element.style.display = "flex"; 
            });
            toggleButton.textContent = "less"; 
        }
        isLess = !isLess;
    });
});
