

document.getElementById('btn').addEventListener('click',loaddata);

function loaddata() {
    
    //create xmlhttprequst  objext

    let xhr = new XMLHttpRequest();
    
    xhr.open('GET','data.txt', true);

    xhr.onload = function () {
        
        if(this.status == 200) {
           
            console.log(this.status);
        }
    }
    
    xhr.send();
}

