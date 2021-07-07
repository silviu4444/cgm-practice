const data = {
  products: [
    {
      id: 1,
      name: "Grand Court Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida865124_513723_hd2.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida865124_442722_hd2.jpg",
      },
      brand: "Adidas",
      price: 54.99,
    },
    {
      id: 2,
      name: "Ownthegame Basketball Shoe",
      sizes: ["36", "37", "38"],
      colors: {
        "black-white":
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida890737_424298_hd2.jpg",
        "black-gold":
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida890737_547333_hd2.jpg",
      },
      brand: "Adidas",
      price: 44.99,
    },
    {
      id: 3,
      name: "Kaptir Super Running Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898105_548204_hd2.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898105_548173_hd1.jpg",
      },
      brand: "Adidas",
      price: 59.99,
    },
    {
      id: 4,
      name: "Ultraboost 4.0 DNA Running Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898154_424333_hd1.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898154_424624_hd1.jpg",
      },
      brand: "Adidas",
      price: 179.99,
    },
    {
      id: 5,
      name: "Ultraboost 21 Running Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        blue: "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898151_548218_hd1.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898151_548216_hd1.jpg",
      },
      brand: "Adidas",
      price: 119.99,
    },
    {
      id: 6,
      name: "Lite Racer Adapt 3.0 Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida891626_532844_hd1.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida891626_513738_hd1.jpg",
      },
      brand: "Adidas",
      price: 49.99,
    },
    {
      id: 7,
      name: "Lite Racer Adapt 4.0 Slip On Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        "white-black":
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898157_424298_hd1.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898157_424626_hd1.jpg",
      },
      brand: "Adidas",
      price: 49.99,
    },
    {
      id: 8,
      name: "Kaptir Running Shoe",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida890738_539612_hd2.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida890738_540652_hd2.jpg",
      },
      brand: "Adidas",
      price: 54.99,
    },
    {
      id: 9,
      name: "Questar Flow NXT",
      sizes: ["36", "37", "38"],
      colors: {
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898103_513705_hd2.jpg",
      },
      brand: "Adidas",
      price: 59.99,
    },
    {
      id: 10,
      name: "SolarGlide ST 3 Running Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898147_548215_hd1.jpg",
      },
      brand: "Adidas",
      price: 54.99,
    },
    {
      id: 11,
      name: "Grand Court Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida865124_513723_hd2.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida865124_442722_hd2.jpg",
      },
      brand: "Adidas",
      price: 54.99,
    },
    {
      id: 12,
      name: "Ownthegame Basketball Shoe",
      sizes: ["36", "37", "38"],
      colors: {
        "black-white":
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida890737_424298_hd2.jpg",
        "black-gold":
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida890737_547333_hd2.jpg",
      },
      brand: "Adidas",
      price: 44.99,
    },
    {
      id: 13,
      name: "Kaptir Super Running Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898105_548204_hd2.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898105_548173_hd1.jpg",
      },
      brand: "Adidas",
      price: 59.99,
    },
    {
      id: 14,
      name: "Ultraboost 4.0 DNA Running Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898154_424333_hd1.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898154_424624_hd1.jpg",
      },
      brand: "Adidas",
      price: 179.99,
    },
    {
      id: 15,
      name: "Ultraboost 21 Running Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        blue: "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898151_548218_hd1.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898151_548216_hd1.jpg",
      },
      brand: "Adidas",
      price: 119.99,
    },
    {
      id: 16,
      name: "Lite Racer Adapt 3.0 Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida891626_532844_hd1.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida891626_513738_hd1.jpg",
      },
      brand: "Adidas",
      price: 49.99,
    },
    {
      id: 17,
      name: "Lite Racer Adapt 4.0 Slip On Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        "white-black":
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898157_424298_hd1.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898157_424626_hd1.jpg",
      },
      brand: "Adidas",
      price: 49.99,
    },
    {
      id: 18,
      name: "Kaptir Running Shoe",
      sizes: ["36", "37", "38"],
      colors: {
        white:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida890738_539612_hd2.jpg",
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida890738_540652_hd2.jpg",
      },
      brand: "Adidas",
      price: 54.99,
    },
    {
      id: 19,
      name: "Questar Flow NXT",
      sizes: ["36", "37", "38"],
      colors: {
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898103_513705_hd2.jpg",
      },
      brand: "Adidas",
      price: 59.99,
    },
    {
      id: 0,
      name: "SolarGlide ST 3 Running Sneaker",
      sizes: ["36", "37", "38"],
      colors: {
        black:
          "https://d3d71ba2asa5oz.cloudfront.net/12037791/images/adida898147_548215_hd1.jpg",
      },
      brand: "Adidas",
      price: 54.99,
    },
  ],
};

export default data;
