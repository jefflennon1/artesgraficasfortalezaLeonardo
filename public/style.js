  const menuItems = document.querySelectorAll('.container-menu a')
  
  menuItems.forEach( item=> item.addEventListener('click', chamaScrollClick));


  function chamaScrollClick(event){
      event.preventDefault();
      const element = event.target;
      const id = element.getAttribute('href')
      const to = document.querySelector(id).offsetTop;
      

      window.scroll({
        top: to,
        behavior: "smooth"
      })
  }