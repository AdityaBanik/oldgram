const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.querySelector('main') 

//Renders posts from javaScript array into the document
posts.forEach(renderPost)

function renderPost(e){
    
    const postHtml = `
            <article class="post"> 
                <section class="post-header">
                    <img class="avatar" src="${e.avatar}" alt="post-profile-image">
                    
                    <div class="container">
                        <h4>${e.name}
                            <span class='post-header-location'>${e.location}</span>
                        </h4> 
                    </div>
                </section>
                   
                <img class='post-img' src="${e.post}">
                
                <section class="post-icons" >
                    <img src="images/icon-heart.png">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                </section>
                       
                <div class="container">
                    <p class="bold-text likes">${e.likes} likes</p>
                    <p> <span class="bold-text">${e.username}</span> ${e.comment}</p>
                </div>
            </article>
    `
    mainEl.innerHTML+= postHtml
}


//Getting every post element 
const postsEL = document.querySelectorAll('.post')

//Setting event listeners on the like-button and the image of each post
postsEL.forEach(
    function(post){
        
        const postImg = post.querySelector('.post-img')
        const likeBtn = post.querySelector('.post-icons').children[0]
        
        postImg.addEventListener('dblclick', liked.bind(post))
        likeBtn.addEventListener('click', liked.bind(post))
    }
)

function liked(){
    const LikesEL = this.querySelector('.likes')
    LikesEL.textContent = Number(LikesEL.textContent.split(' ')[0]) + 1 + ' likes'
}