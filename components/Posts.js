import {Comment} from "./Comments.js";

export class Post{
    constructor({ id, comments, name, description, image, likes = 0, link }){

        this.id = id;
        this.comments = comments;
        this.name = name;
        this.description = description;
        this.image = image;
        this.likes = likes;
        this.link = link;

    }

    updateInLocalStorage = () => {
        let data = JSON.parse( localStorage.getItem('data') );
        let updatedData = data.map( item => {
            if( item.id === this.id ){
                item = this;
            }
            return item;
        });
        localStorage.setItem('data', JSON.stringify(updatedData) );
    }

    likesCount = () =>{
        // let postId = event.target.parentElement.parentElement.id;
        // let postList = JSON.parse(localStorage.getItem("data"));
        // let elem = postList.find(post => post.id === +postId);
        this.likes += 1;
        this.render();
        this.updateInLocalStorage()
        // localStorage.setItem("data", JSON.stringify(postList));
        // window.location.reload();
    }

    render = ( target ) => {

        let node;
        if( !this.node ){
            node = document.createElement('div');
        } else {
            node = this.node;
        }
        node.innerHTML = `
        <div id=${this.id} class="postBlock">

            <img src="${this.image}">
            
            <div id="${this.id}">
                <a href=${this.link}><h3>${this.name}</h3></a>
                <p>${this.description}</p>
                <p class="postBlock__like_but">&#10084; ${this.likes}</p>
                ${this.comments.length > 0 ? "<p class='commentsCaption'>Comments ("+this.comments.length+")</p>" + Comment(this.data, this.comments, this.id) : ""}
                <input  class="commentsInput" name="comment" type="text">
                <button class="comments__submit">Submit</button>
            </div>
        </div>`;

        let like = node.querySelector(".postBlock__like_but");
        if( like ){
            like.addEventListener("click", this.likesCount)
        }

        // let subBut = document.querySelectorAll(".comments__submit");
        // let inputsComment = document.querySelectorAll(".commentsInput");
        // buts.forEach(elem => );
        // subBut.forEach(elem => elem.addEventListener("click", this.commentPost));
        // inputsComment.forEach(elem => elem.addEventListener("keyup", this.updComment))


        if( !this.node ){
            target.appendChild( node );
        }

        this.node = node;
    }


}


export class Posts{
    constructor(data, root) {
        this.data = data
        this.root = root
        this.commentInput = null
    }

    likesCount = (event) =>{
        let postId = event.target.parentElement.parentElement.id;
        let postList = JSON.parse(localStorage.getItem("data"));
        let elem = postList.filter(post => post.id === +postId);
        elem[0].likes += 1;
        localStorage.setItem("data", JSON.stringify(postList));
        window.location.reload();
    }

    commentPost = (event) => {
        let postId = event.target.parentElement.parentElement.id;
        let postList = JSON.parse(localStorage.getItem("data"));
        let elem = postList.filter(post => post.id === +postId);
        elem[0].comments.push(this.commentInput);
        localStorage.setItem("data", JSON.stringify(postList));
        this.commentInput = null;
        window.location.reload()
    }

    updComment = (event) => {
        this.commentInput = event.target.value
    }

    render() {
        this.root.innerHTML = this.data.map(elem => {

            return(`
                    <div id=${elem.id} class="postBlock">
                    
                        <img src="${elem.image}">
                        
                        <div id="${elem.id}">
                            <a href=${elem.link}><h3>${elem.name}</h3></a>
                            <p>${elem.description}</p>
                            <p class="postBlock__like_but">&#10084; ${elem.likes}</p>
                            ${elem.comments.length > 0 ? "<p class='commentsCaption'>Comments ("+elem.comments.length+")</p>" + Comment(this.data, elem.comments, elem.id) : ""}
                            <input  class="commentsInput" name="comment" type="text">
                            <button class="comments__submit">Submit</button>
                        </div>
                        
                    </div>
            `)

        }).join("");

        let buts = document.querySelectorAll(".postBlock__like_but");
        let subBut = document.querySelectorAll(".comments__submit");
        let inputsComment = document.querySelectorAll(".commentsInput");
        buts.forEach(elem => elem.addEventListener("click", this.likesCount));
        subBut.forEach(elem => elem.addEventListener("click", this.commentPost));
        inputsComment.forEach(elem => elem.addEventListener("keyup", this.updComment))
    };
};
