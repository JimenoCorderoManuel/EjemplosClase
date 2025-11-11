 
 //Componente mejorado

const productos = [
    {nombre:"Leche", precio:20, img:"https://www.lala.com.mx/storage/app/media/Prodcutos/7501020527278_FRONT.png" },
    {nombre: "jugo naranja", precio: 15, img: "https://e7.pngegg.com/pngimages/622/725/png-clipart-orange-juice-fizzy-drinks-orange-drink-orange-soft-drink-juice-food-photography.png"}
    ]

   const contenedor = document.getElementById("contenedor");

    productos.forEach(prod =>{

        const card = document.createElement("div");
        card.classname="card";

        card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre} </h3>
        <p>$${prod.precio}</p>
        <button>Agregar</button>
        `;

        contenedor.appendChild(card);

    })

    