
const body = document.querySelector("body");
const icon = document.querySelector("#icon");
const dropDowns = document.querySelectorAll(".dropdown");
const clickLinks = document.querySelectorAll(".click-link");


const biggerMenu = document.querySelector(".bigger-menu");



const dropLists = document.querySelectorAll(".drop-list");




const menu = document.querySelector(".menu");
    
const array = [clickLinks[0],clickLinks[1],clickLinks[2],clickLinks[3],clickLinks[4],clickLinks[5],clickLinks[6],clickLinks[7]];

    ////// menu List //////

        for(const clickLink of clickLinks){
            
            clickLink.addEventListener("click",() =>{
                if(!clickLink.childNodes[3].classList.contains("open")){
                
                    clickLink.childNodes[3].classList.toggle("open");
                }else if(clickLink.childNodes[3].classList.contains("open")){
                    clickLink.childNodes[3].classList.toggle("open");

                }   

        

                clickLink.childNodes[1].childNodes[1].classList.toggle("degree-180");
                clickLink.childNodes[1].childNodes[1].style.transition = "0.5s";
            });
          
        
            
                
            
                array[0].addEventListener("click", () =>{
                    
                    
                    for(let i = 0;i < array.length;i++){
                        
                        if( i === 0){
                            
                        }else{   
                            array[i].childNodes[3].classList.remove("open");
                        }
                    }
                    
                    

                })
                
                   
           
                array[1].addEventListener("click", () =>{
                   
                    for(let i = 0;i < array.length;i++){
                        if( i === 1){
                            
                            
                        }else{
                            array[i].childNodes[3].classList.remove("open");

                        }
                        
                    }
                    
                })
                
            
               
                array[2].addEventListener("click", () =>{
                 
                    for(let i = 0;i < array.length;i++){
                        
                        if( i === 2){
                           
                        }else{
                            array[i].childNodes[3].classList.remove("open");

                        }
                    }
                })
               
                               
            
                array[3].addEventListener("click", () =>{
                   
                    for(let i = 0;i < array.length;i++){
                        
                        if( i === 3){
                            
                        }else{
                            array[i].childNodes[3].classList.remove("open");

                        }
                    }
                })  
            
           
                array[4].addEventListener("click", () =>{
                   
                    for(let i = 0;i < array.length;i++){
                        
                        if( i === 4){
                         
                        }else{
                            array[i].childNodes[3].classList.remove("open");

                        }
                    }
                })    
            
           
                array[5].addEventListener("click", () =>{
                   
                    for(let i = 0;i < array.length;i++){
                        
                        if( i === 5){
                           
                        }else{
                            array[i].childNodes[3].classList.remove("open");

                        }
                    }
                })     
            
            
                array[6].addEventListener("click", () =>{
                  
                    for(let i = 0;i < array.length;i++){
                        
                        if( i === 6){
                           
                        }else{
                            array[i].childNodes[3].classList.remove("open");

                        }
                    }
                })     
            
    
            
                array[7].addEventListener("click", () =>{
                   
                    for(let i = 0;i < array.length;i++){
                        if( i === 7){
                           
                        }else{
                            array[i].childNodes[3].classList.remove("open");

                        }
                    }
                })     
            
            
            
        


        document.addEventListener("click", (event) =>{
            

            if(event.target.id === "item" || event.target.className === "click-link"){
                return;
            }else if(clickLink.childNodes[3].classList.contains("open")){   
                clickLink.childNodes[3].classList.toggle("open");
                clickLink.childNodes[1].childNodes[1].classList = "fa-solid fa-caret-down";
                clickLink.childNodes[1].childNodes[1].style.transition = "0.5s";

            }
            if(event.target.nodeName.toString() === "A" && event.target.id !== "link" && event.target.id !== "return" && event.target.id !== "prod"){
                
                event.target.parentNode.parentNode.parentNode.parentNode.classList.add("open");
                
                console.log(event.target.nodeName);
                event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].classList = "fa-solid fa-caret-down degree-180";
            }
            if(event.target.nodeName.toString() === "LI" && event.target.id !== "list" && event.target.id !== "prod"){
                event.target.parentNode.parentNode.parentNode.classList.add("open");
                console.log(event.target.nodeName);
                event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].classList = "fa-solid fa-caret-down degree-180";

            
            }
            if(event.target.nodeName.toString() === "UL" && event.target.childNodes.id !== "list"){
                event.target.parentNode.parentNode.classList.add("open");
                console.log(event.target.nodeName);
            }
        
            if(event.target.id === "second-sec"){
                event.target.parentNode.parentNode.classList.add("open");
            }
            if( event.target.id === "list-items"){
                biggerMenu.classList.add("open");
                icon.classList.add("degree-180");
            }
            if(event.target.id === "list"){
                biggerMenu.classList.add("open");
                icon.classList.add("degree-180");
            }
            if(event.target.id === "link"){
                biggerMenu.classList.add("open");
                icon.classList.add("degree-180");
            }
            if(event.target.id === "h3"){
                biggerMenu.classList.add("open");
                icon.classList.add("degree-180");
            }
        })
        
    }

        /////// hamburger button and menu ///////
    
    const smHidden = document.querySelector(".sm-hidden");
    const hamBtn = document.querySelector("#hamburger-menu");
    const menuList = document.querySelector(".menu-list");
    const menuElongated = document.querySelector(".menu-elongated");
    
    hamBtn.addEventListener("click",show);

    function show(){
        if(menuElongated.className === "menu-elongated"){
            
            hamBtn.classList = "fa-solid fa-x hamburger";
            document.querySelector("main").marginTop = "0px";
            
            menuElongated.classList.add("change-dis");
            
        }else{
            

            hamBtn.classList = "fa-solid fa-bars hamburger";
            menuElongated.classList = "menu-elongated";
           
            menuElongated.style.maxHeight = menuElongated.scrollHeight + "px";
            
            

        }
    }

    /////// sidebars onscroll ///////

    const leftPart = document.querySelector(".left-part");
    const rightPart = document.querySelector(".right-part");

    if(leftPart.scrollHeight = 3202){
        leftPart.classList.add("pos-fix");
       
        rightPart.classList.add("pos-fix");
       
    }else{
        
    }

    ////// return button and scroll up ///// 
  
const ret = document.querySelector("#return");
    
    ret.addEventListener("click", () =>{
        window.scrollTo({top : 0 , behavior : "smooth"});
        
    })

    const sticky = document.querySelector(".sticky")
    const headerAd = document.querySelector(".header-ad")
    document.addEventListener("scroll",() =>{
        if(window.scrollY > 125){
            sticky.style.position = "fixed";
            sticky.style.top = "0";
            headerAd.style.paddingTop = "77px";
            
        }else if(window.scrollY < 125){
            sticky.style.position = "static";
            headerAd.style.paddingTop = "0";

        }
          
        
        
        
    })
  
    
   
    
    
    
    
    
    