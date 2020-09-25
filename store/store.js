export const data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [
    {
        id: 1,
        link: "#1",
        name: "Established fact123123",
        description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg",
        likes: 0,
        comments: ["hihi", "haha"]
    },
    {
        id: 2,
        link: "#1",
        name: "Established fact",
        description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg",
        likes: 0,
        comments: []
    },
    {
        id: 3,
        link: "#2",
        name: "Many packages",
        description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        image: "http://telegram.org.ru/uploads/posts/2017-10/1507400859_file_162309.jpg",
        likes: 0,
        comments: []
    },
    {
        id: 4,
        link: "#3",
        name: "Suffered alteration",
        description: "Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
        image: "http://telegram.org.ru/uploads/posts/2017-10/1507400896_file_162315.jpg",
        likes: 0,
        comments: []
    },{
        id: 5,
        link: "#4",
        name: "Discovered source",
        description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        image: "http://telegram.org.ru/uploads/posts/2017-10/1507400878_file_162324.jpg",
        likes: 0,
        comments: []
    },{
        id: 6,
        link: "#5",
        name: "Handful model",
        description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        image: "http://telegram.org.ru/uploads/posts/2017-10/1507400876_file_162328.jpg",
        likes: 0,
        comments: []
    },
];
!localStorage.getItem("data") ? localStorage.setItem("data", JSON.stringify(data)) : null;
