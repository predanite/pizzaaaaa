menu_list_array = ["chicken tandoori pizza",
"veg supreme  pizza",
"paneer tikka pizza",
"duluxe veggie pizza",
"veg extravaganza pizza"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
for(var i=0;<menu_list_array.length;i++ ){
    htmldata=htmldata+ '<li>'+ menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
var htmldata;
var item-document.getElementById("additem").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata='<section class="card">'
for(var i=0;1<menu_list_array.length;i++){
    htmldata=htmldata+'<div class = "card">' + +'<img src="images/pizzaIng.png"/>'+menu_list_array[i] + '</div>'
}
htmldata=htmldata"</section>"
document.getElementById("display_addedmenu").innerhtml = htmldata;
}