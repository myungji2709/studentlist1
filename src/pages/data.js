let list = [
    {
        id: 1,
        name: "product 1",
    },
    {
        id: 2,
        name: "product 2",
    },
    {
        id: 3,
        name: "product 3",
    },
    {
        id: 4,
        name: "product 4",
    },
];
export const getProducts = () => {
    return list;
};
export const getProductsByID = (id) => {
    return list.find((item) => item.id === id);
};
