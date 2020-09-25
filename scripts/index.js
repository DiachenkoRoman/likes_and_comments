import {data} from "../store/store.js";
import {Posts} from "../components/Posts.js";

const root = document.querySelector("#renderArea");

const start = new Posts(data, root);
start.render();
