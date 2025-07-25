document.addEventListener("DOMContentLoaded", function () {
  const fullText = "Мамєдов Дмитро – frontend-розробник"; 
  let index = 0;  
  const typedText = document.getElementById("typed-text");  
  const cursor = document.querySelector(".cursor");  

  
  const typeWriter = () => {
    if (index <= fullText.length) {
      typedText.textContent = fullText.slice(0, index++);  
      setTimeout(typeWriter, 100);  
    } else {
      cursor.classList.add("hidden");  
    }
  };

  typeWriter();  
});
