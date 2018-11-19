module.exports=function(){
    var link=document.getElementById("link");
    link.onclick=function(e){
        e.preventDefault();
        href.location=__dirname+"/02.html";
    }
}