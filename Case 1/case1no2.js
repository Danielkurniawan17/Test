var fruits = [
    {
      fruitId: 1,
      fruitName: "Apel",
      fruitType: "IMPORT",
      stock: 10,
    },
    {
      fruitId: 2,
      fruitName: "Kurma",
      fruitType: "IMPORT",
      stock: 20,
    },
    {
      fruitId: 3,
      fruitName: "apel",
      fruitType: "IMPORT",
      stock: 50,
    },
    {
      fruitId: 4,
      fruitName: "Manggis",
      fruitType: "LOCAL",
      stock: 100,
    },
    {
      fruitId: 5,
      fruitName: "Jeruk Bali",
      fruitType: "LOCAL",
      stock: 10,
    },
    {
      fruitId: 5,
      fruitName: "KURMA",
      fruitType: "IMPORT",
      stock: 20,
    },
    {
      fruitId: 5,
      fruitName: "Salak",
      fruitType: "LOCAL",
      stock: 150,
    },
  ];
  console.log("LOKAL");
fruits.filter((item) => {
  if (item.fruitType === "LOCAL") {
    console.log(item.fruitName);
  }
});

console.log("IMPORT");
fruits.filter((item) => {
  if (item.fruitType === "IMPORT") {
    console.log(item.fruitName);
  }
});
