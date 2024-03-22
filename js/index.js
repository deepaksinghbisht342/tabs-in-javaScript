const button = document.querySelectorAll(".tabslinks");
var content = document.querySelectorAll('.tab-content');


for (var i = 0; i < button.length; i++){

    button[i].addEventListener('click', function(){

        var tabName = this.dataset.tab;
        var tabContent = document.getElementById(tabName);
        

     for (var j = 0; j < content.length; j++){

        content[j].style.display = 'none';
     }

     for (var k = 0; k < content.length; k++){

        button[k].classList.remove('active');
     }
     


        tabContent.style.display ="block";
        this.classList.add('active');
    
    });
    
}
    

document.querySelector('.tabslinks').click();
    
 
