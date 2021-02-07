var i1 = document.querySelector('img.img1')
var i2 = document.querySelector('img.img2')
var i3 = document.querySelector('img.img3')
var teste = document.querySelector('p.teste')

function entra(id){
    //var teste = document.querySelector('p.teste')
    teste.innerText = `Entrou`
    
    if (id === 'i1')
       i1.style.border = '5px solid green' 
    else if (id === 'i2')
       i2.style.border = '5px solid green' 
    else
       i3.style.border = '5px solid green' 
}

function sai(){
    //var teste = document.querySelector('p.teste')
    teste.innerText = `Saiu`  
    i1.style.border = 'none'
    i2.style.border = 'none'
    i3.style.border = 'none'
}