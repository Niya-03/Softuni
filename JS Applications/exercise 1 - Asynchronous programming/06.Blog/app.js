function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    const loadPostBtn = document.getElementById('btnLoadPosts');
    loadPostBtn.addEventListener('click', loadPost);
    const viewPostBtn = document.getElementById('btnViewPost');
    viewPostBtn.addEventListener('click', viewPost);

    const selectRef = document.getElementById('posts');

    const postTitleRef = document.getElementById('post-title');
    const postBodyRef = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    const endpoints = {
        allPost: 'http://localhost:3030/jsonstore/blog/posts',
        allComments: 'http://localhost:3030/jsonstore/blog/comments'
    }

    async function loadPost(ev) {

        const response = await fetch(endpoints.allPost);
        const data = await response.json();
        selectRef.innerHTML = '';

        Object.values(data).forEach(post => {
            selectRef.appendChild(createOptionElement(post));
        })
    }


    function createOptionElement(data) {
        const op = document.createElement('option');
        op.value = data.id;
        op.textContent = data.title;
        return op;
    }

    async function viewPost(ev) {
        const currentPostId = selectRef.selectedOptions[0].value;
        const responseWithSinglePost = await fetch(endpoints.allPost + '/' + currentPostId);
        const singlePostData = await responseWithSinglePost.json();
        const currentPost = Object.values(singlePostData).filter(x => x.id === currentPost.id);
        const responseComments = await fetch(endpoints.allComments);
        const dataComments = await responseComments.json();
        const filteredComments = Object.values(dataComments).filter(x => x.postId == currentPostId);
        postTitleRef.textContent = currentPost.title;
        postBodyRef.textContent = currentPost.body;

        postComments.innerHTML = '';

        filteredComments.forEach(element => {
            const el = createListItem(element);
            postComments.appendChild(el);
        });

    }

    function createListItem(data) {
        const li = document.createElement('li');
        li.id = data.id;
        li.textContent = data.text;
        return li;
    }
}

attachEvents();