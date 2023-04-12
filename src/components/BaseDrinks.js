export const BASE_DRINKS = [
    {
        id: 1,
        name: "Latte",
        basePrice: 3.5,
        customizations: [
            { name: "Size", options: ["Short", "Tall", "Grande", "Venti"] },
            {
                name: "Milk Type",
                options: ["Whole Milk", "Almond Milk", "Oat Milk", "Soy Milk"],
                price: 0.5
            },
            { name: "Number of Shots", options: [1, 2], price: 0.5 }
        ]
    },
    {
        id: 2,
        name: "Cappuccino",
        basePrice: 3,
        customizations: [
            { name: "Size", options: ["Short", "Tall", "Grande", "Venti"] },
            {
                name: "Milk Type",
                options: ["Whole Milk", "Almond Milk", "Oat Milk", "Soy Milk"],
                price: 0.5
            },
            { name: "Number of Shots", options: [1, 2], price: 0.5 }
        ]
    },
    {
        id: 3,
        name: "Mocha",
        basePrice: 4,
        customizations: [
            { name: "Size", options: ["Short", "Tall", "Grande", "Venti"] },
            {
                name: "Milk Type",
                options: ["Whole Milk", "Almond Milk", "Oat Milk", "Soy Milk"],
                price: 0.5
            },
            { name: "Number of Shots", options: [1, 2], price: 0.5 },
            {
                name: "Sauce",
                options: ["Chocolate Sauce", "Caramel Sauce", "Hazelnut Sauce"],
                price: 0.5
            }
        ]
    },
    {
        id: 4,
        name: "Espresso",
        basePrice: 2,
        customizations: [{ name: "Number of Shots", options: [1, 2], price: 0.5 }]
    },
    {
        id: 5,
        name: "Americano",
        basePrice: 3,
        customizations: [
            { name: "Size", options: ["Short", "Tall", "Grande", "Venti"] },
            { name: "Number of Shots", options: [1, 2], price: 0.5 }
        ]
    }
];
