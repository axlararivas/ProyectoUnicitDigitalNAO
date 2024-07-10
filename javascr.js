const post = [{
    id: 1,
    titulo: "Mi Primer Post",
    imagen: "htpps://img.com/1",
    tags: ["JavaScript", "WebDevelopment"],
}, {
    id: 2,
    titulo: "Mi Experiencia con React",
    imagen: "htpps://img.com/2",
    tags: ["JavaScript", "WebDevelopment", "React"],   
}, {
    id: 3,
    titulo: "Porque Deje Angular",
    imagen: "htpps://img.com/3",
    tags: ["JavaScript", "WebDevelopment", "Angular"],   
}]

var respuesta;

respuesta = post.some(carro => carro.tags.includes("Angu"));

if (respuesta) {
    console.log("Existe la frase");
}else{
    console.log("No esta dentro");
}