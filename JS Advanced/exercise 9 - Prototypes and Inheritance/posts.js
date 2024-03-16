function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            if (this.comments !== undefined && this.comments.length > 0) {
                let res = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments:\n`;
                for (let comment of this.comments) {
                    res += ` * ${comment}\n`;
                }
                res = res.substring(0, res.length - 1);
                return res;
            } else if (this.likes !== undefined) {
                let res = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
                return res;
            } else if (this.views !== undefined) {
                let res = `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
                return res;
            } else {
                let res = `Post: ${this.title}\nContent: ${this.content}`;
                return res;
            }

        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;

            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

const classes = solution();

let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post

// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");

scm.addComment("Very good post");

scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle

// Content: TestContent

// Rating: -5

// Comments:

// * Good post

// * Very good post

// * Wow