function carregar () {
var msg= window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
//var hora= 19 -> Só para forçar o código para teste.
msg.innerHTML= `Agora são ${hora} horas.`
if (hora >=0 && hora<12){
    //Bom dia!
    img.src= 'manhã.png.png'
    document.body.style.backgroundColor= '#e7b969'
} else if(hora >=12 && hora< 18){
    //Boa tarde!
    img.src='tarde.png.png'
    document.body.style.backgroundColor= '#ae7368'
}else {
    //Boa noite!
    img.src='noite.png.png'
    document.body.style.backgroundColor= '#08151b'
}
}