
window.addEventListener("scroll", () => {
  const navBar = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav .navigation a");

  if (window.scrollY > 50) {
   
    navBar.style.backgroundColor = "#149f39"; 
    navBar.style.color = "#fff";             

    navLinks.forEach(link => {
      link.style.color = "#fff";             
    });

  } else {
    
    navBar.style.backgroundColor = "white";
    navBar.style.color = "black";

    navLinks.forEach(link => {
      link.style.color = "black";
    });
  }
});



const menuItems = document.querySelectorAll("nav .navigation li");

menuItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#ffc066";
    item.style.color = "#000";
  });

  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "transparent";
    item.style.color = "";
  });
});
