const products = [
    { id: "1", name: "Ushuaia", img: "url-img", price: 40000, category: "viaje", description: "Viaje de nieve", stock: 10 },
    { id: "2", name: "Mendoza", img: "url-img", price: 25000, category: "viaje", description: "Viaje a los viñedos", stock: 10 },
    { id: "3", name: "Buenos Aires", img: "url-img", price: 10000, category: "viaje", description: "Viaje a ciudad de la Furia", stock: 10 },
    { id: "4", name: "Puerto Iguazu", img: "url-img", price: 30000, category: "viaje", description: "Viaje a las Cataratas", stock: 10 },
    { id: "5", name: "Jujuy", img: "url-img", price: 50000, category: "viaje", description: "Tour a las Salinas", stock: 10 },
    { id: "6", name: "Bariloche", img: "url-img", price: 22000, category: "viaje", description: "Tour a los increibles paisajes de Bariloche", stock: 10 },
    { id: "7", name: "Chubut", img: "url-img", price: 56000, category: "viaje", description: "Increible paisajes de Chubut", stock: 10 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };