const colorInput = document.getElementById("colorInput");

// Retrieve and apply the saved color on page load
const savedColor = localStorage.getItem('selectedColor');
if (savedColor) {
    document.body.style.background = savedColor;
    colorInput.value = savedColor; // Set the color input to the saved color
}

// Add an event listener to the color input element that triggers on input changes
colorInput.addEventListener('input', function() {
    // Get the current value of the color input
    const color = colorInput.value;
    
    // Save the color to localStorage
    localStorage.setItem('selectedColor', color);
    
    document.body.style.background = color;
});

// Get a reference to the font style select element by its ID
document.getElementById("fontStyle").addEventListener('change', function() {
    // Get the selected font style 
    var fontFamily = document.getElementById("fontStyle").value;
    
    // Apply different font styles based on the selected value
    switch (fontFamily) {
        case "font1": {
            document.getElementById("body").style.fontFamily = "'Courier New', Courier, monospace";
        }
        break;
        
        case "font2": {
            document.getElementById("body").style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
        }
        break;
        
        case "font3": {
           
            document.getElementById("body").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        }
        break;
        
        case "font4": {
            document.getElementById("body").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
        }
        break;
    }
});
