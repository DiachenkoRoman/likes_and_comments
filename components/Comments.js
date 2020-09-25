export const Comment = (data, comments) =>{

    let cont = document.createElement("ol");

    return cont.innerHTML = comments.map((elem, index) =>{

        return(`
            <p class="commentsList__items">${index+1}. ${elem}</p>
        `)
    }).join("")
}
