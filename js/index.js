// particlesJS.load('particles-js', 'js/particles.json', function() {
//     console.log('callback - particles.js config loaded');
//   


window.onscroll=function(){
    if(scrollY>650){
        document.getElementById("nav").classList.replace("bg-transparent", "bg-dark");
    }else{
        document.getElementById("nav").classList.replace("bg-dark", "bg-transparent");
    }
}
    

