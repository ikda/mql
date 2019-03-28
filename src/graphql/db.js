export const people = [
    {
        id: "0",
        name: "nicolas",
        age: "18",
        gender: "male"
    },
    {
        id: "1",
        name: "nicky",
        age: "18",
        gender: "female"
    },
    {
        id: "2",
        name: "jack",
        age: "18",
        gender: "male"
    },
    {
        id: "3",
        name: "tom",
        age: "18",
        gender: "female"
    },
    {
        id: "4",
        name: "zelda",
        age: "18",
        gender: "male"
    },
    {
        id: "5",
        name: "jiro",
        age: "18",
        gender: "female"
    },
    {
        id: "6",
        name: "zidane",
        age: "18",
        gender: "male"
    },
]


export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}