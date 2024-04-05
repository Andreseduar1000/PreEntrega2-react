const products = [
    { id: "1", name: "Puma XT-40", img: "url-img", price: 40000, category: "Running", description: "Zapato Running", stock: 10 },
    { id: "2", name: "Puma RR-20", img: "url-img", price: 25000, category: "Running", description: "Zapato Running", stock: 10 },
    { id: "3", name: "Mocaccine", img: "url-img", price: 10000, category: "Vestir", description: "Calzado de vestir", stock: 10 },
    { id: "4", name: "Sandalias", img: "url-img", price: 30000, category: "Vestir", description: "Calzado Casual", stock: 10 },
    { id: "5", name: "Adidas 2023", img: "url-img", price: 50000, category: "Trekkin", description: "Calzado para montañas", stock: 10 },
    { id: "6", name: "Botas ", img: "url-img", price: 22000, category: "Trekkin", description: "Calzado para montañas", stock: 10 },
  ];
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 1000 )
      
    });
  };