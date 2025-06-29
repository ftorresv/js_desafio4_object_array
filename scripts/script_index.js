const ventas = document.querySelector("#row_ventas");
const alquiler = document.querySelector("#row_alquiler");
const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road,Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa familiar con amplio jardín",
    src: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    descripcion: "Hermosa casa ideal para familias, con un gran jardín y zona de juegos",
    ubicacion: "101 Family Street, Suburbia, CA 67890",
    habitaciones: 5,
    costo: 3500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento moderno en zona céntrica",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    descripcion: "Moderno departamento en el corazón de la ciudad, cerca de todo",
    ubicacion: "22 Downtown Ave, Capital City, CA 10001",
    habitaciones: 2,
    costo: 2000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Chalet con piscina privada",
    src: "https://fastly.picsum.photos/id/142/4272/2848.jpg?hmac=z8IS_an6FQ8ijJOBd-wSVg1JTZbeIDG4TbjHwLQbs0I",
    descripcion: "Lujoso chalet con piscina privada y terraza",
    ubicacion: "45 Ocean View, Coastal Town, CA 55555",
    habitaciones: 4,
    costo: 6000,
    smoke: false,
    pets: true,
  }
];
const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue,Seaside Town, CA 56789",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
   {
    nombre: "Loft minimalista en barrio artístico",
    src: "https://images.unsplash.com/photo-1653918834459-c3e6bb3c47a1?q=80&w=2191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Loft de diseño minimalista, ideal para artistas o parejas jóvenes",
    ubicacion: "50 Art District, Creative City, CA 80808",
    habitaciones: 1,
    costo: 1500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Cabaña rústica en el bosque",
    src: "https://images.unsplash.com/photo-1605989719315-87eca153de3b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Acogedora cabaña en medio del bosque, perfecta para desconectar",
    ubicacion: "Forest Path 22, Mountain Woods, CA 44444",
    habitaciones: 2,
    costo: 1700,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento amoblado cerca del parque",
    src: "https://images.unsplash.com/photo-1650389236371-43a2e2b9ec65?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Cómodo apartamento totalmente amoblado, a pasos del parque central",
    ubicacion: "Park Lane 88, Green City, CA 12345",
    habitaciones: 2,
    costo: 2100,
    smoke: false,
    pets: true,
  }
];

// Condición: si ambas secciones existen (index.html), mostrar sólo 3
if (ventas !== null && alquiler !== null) {

  let listaVentas = "";
  for (let i = 0; i < 3 ; i++) {
    const propiedad = propiedades_venta[i];
    listaVentas += generarHTML(propiedad);
  }
  ventas.innerHTML = listaVentas;

  let listaAlquiler = "";
  for (let i = 0; i < 3; i++) {
    const propiedad = propiedades_alquiler[i];
    listaAlquiler += generarHTML(propiedad);
  }
  alquiler.innerHTML = listaAlquiler;

} else {
  // Si al menos una sección es null, mostramos todas las propiedades disponibles

  if (ventas !== null) {
    let listaVentas = "";
    for (let i = 0; i < propiedades_venta.length; i++) {
      const propiedad = propiedades_venta[i];
      listaVentas += generarHTML(propiedad);
    }
    ventas.innerHTML = listaVentas;
  }

  if (alquiler !== null) {
    let listaAlquiler = "";
    for (let i = 0; i < propiedades_alquiler.length; i++) {
      const propiedad = propiedades_alquiler[i];
      listaAlquiler += generarHTML(propiedad);
    }
    alquiler.innerHTML = listaAlquiler;
  }
}

// Función
function generarHTML(propiedad) {
  return `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${propiedad.src}" class="card-img-top" alt="Imagen de propiedad" />
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
          <i class="${propiedad.smoke ? "fa-solid fa-smoking" : "fa-solid fa-ban-smoking"}"></i>
          ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
        </p>
        <p class="${propiedad.pets ? "text-success" : "text-danger"}">
          <i class="${propiedad.pets ? "fa-solid fa-paw" : "fa-solid fa-ban"}"></i>
          ${propiedad.pets ? "Mascotas bienvenidas" : "No se permiten mascotas"}
        </p>
      </div>
    </div>
  </div>`;
}

//Iteraciones, en este caso se aplica cuando sólo se verifica la existencia de una sección, pero muestra todas las propiedades
// if(ventas){
// let listaVentas = "";
// for (propiedad of propiedades_venta) {
//   listaVentas += `
//     <div class="col-md-4 mb-4">
//       <div class="card">
//         <img
//           src= "${propiedad.src}"
//           class="card-img-top"
//           alt="Imagen de propiedad"
//         />
//         <div class="card-body">
//           <h5 class="card-title">${propiedad.nombre}</h5>
//           <p class="card-text">
//             ${propiedad.descripcion}
//           </p>
//           <p>
//             <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
//           </p>
//           <p>
//             <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
//           </p>
//           <p>
//             <i class="fas fa-dollar-sign"></i> ${propiedad.costo}
//           </p>
//           <p class="${
//             propiedad.smoke == true ? "text-success" : "text-danger"
//           }">
//             <i class="${
//               propiedad.smoke == true
//                 ? "fa-solid fa-smoking"
//                 : "fa-solid fa-ban-smoking"
//             }"></i>
//             ${
//               propiedad.smoke == true
//                 ? "Permitido fumar"
//                 : "No se permite fumar"
//             }
//             </p>
//           <p class="${propiedad.pets == true ? "text-success" : "text-danger"}">
//             <i class="${
//               propiedad.pets == true ? "fa-solid fa-paw" : "fa-solid fa-ban"
//             }"></i> 
//             ${
//               propiedad.pets == true
//                 ? "Mascotas bienvenidas"
//                 : "No se permiten mascotas"
//             }
//           </p>
//         </div>
//       </div>
//     </div>`;
// }
// ventas.innerHTML = listaVentas;
// }
// if(alquiler){
// let listaAlquiler = "";
// for (propiedad of propiedades_alquiler) {
//   listaAlquiler += `
//     <div class="col-md-4 mb-4">
//       <div class="card">
//         <img
//           src= "${propiedad.src}"
//           class="card-img-top"
//           alt="Imagen de propiedad"
//         />
//         <div class="card-body">
//           <h5 class="card-title">${propiedad.nombre}</h5>
//           <p class="card-text">
//             ${propiedad.descripcion}
//           </p>
//           <p>
//             <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
//           </p>
//           <p>
//             <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
//           </p>
//           <p>
//             <i class="fas fa-dollar-sign"></i> ${propiedad.costo}
//           </p>
//           <p class="${
//             propiedad.smoke == true ? "text-success" : "text-danger"
//           }">
//             <i class="${
//               propiedad.smoke == true
//                 ? "fa-solid fa-smoking"
//                 : "fa-solid fa-ban-smoking"
//             }"></i>
//             ${
//               propiedad.smoke == true
//                 ? "Permitido fumar"
//                 : "No se permite fumar"
//             }
//             </p>
//           <p class="${propiedad.pets == true ? "text-success" : "text-danger"}">
//             <i class="${
//               propiedad.pets == true ? "fa-solid fa-paw" : "fa-solid fa-ban"
//             }"></i> 
//             ${
//               propiedad.pets == true
//                 ? "Mascotas bienvenidas"
//                 : "No se permiten mascotas"
//             }
//           </p>
//         </div>
//       </div>
//     </div>`;
// }
// alquiler.innerHTML = listaAlquiler;
// }
