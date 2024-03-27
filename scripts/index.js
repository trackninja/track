const text = "Let's Craft Digital Excellence for Your Business";
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds)
      }
    }

    typeWriter();



   
    