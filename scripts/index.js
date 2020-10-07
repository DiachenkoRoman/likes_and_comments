import { data, clearData, getLCData } from "../store/store.js";
import { Posts, Post } from "../components/Posts.js";


document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById("renderArea");
    const data = getLCData();

    let result = data.map( item => {
        let post = new Post(item);
        post.render(root);
        return post;
    });

    

    console.log( result );


    // const start = new Posts(data, root);
    // start.render();

});

