/*
Realizar un programa que muestre una letra de acuerdo a una calificación obtenida 
si el alumno saco de 90-100 debe mostrar A si el alumno saco de 80-89 debe mostrar 
B si saco de 70-79 mostrara C de 60-69 D y si no esta en este rango la letra F
*/

console.log("------------------------------------------------------------")
console.log("programa utilizando if else ")
//if - else

let calificación = 67;

if(calificación >= 90 && calificación <= 100){
    console.log("Tu calificacion es A")
}   else if(calificación >= 80 && calificación <= 89){
    console.log("Tu calificacion es B");
}   else if(calificación >= 70 && calificación <= 79){
    console.log("Tu calificacion es C");
}   else if(calificación >= 60 && calificación <= 69){
    console.log("Tu calificacion es D");
}   else if(calificación >= 0 && calificación <= 59){
    console.log("Tu calificacion es F");
}

console.log("------------------------------------------------------------");
console.log("programa utilizando switch ");
//switch
// se utiliza la misma variable del caso anterior :)

switch(true){
    case (calificación >= 90 && calificación <= 100):
        console.log("Tu calificacion es A");
        break;
    case (calificación >= 80 && calificación <= 89):
        console.log("Tu calificacion es B");
        break;
    case (calificación >= 70 && calificación <= 79):
        console.log("Tu calificacion es C");
        break;
    case (calificación >= 60 && calificación <= 69):
        console.log("Tu calificacion es D");
        break;
    case (calificación >= 0 && calificación <= 59):
        console.log("Tu calificacion es F");
        break;

        default:
            console.log("error");
            break;
}