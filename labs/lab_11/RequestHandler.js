const Post = require('./Post');

class RequestHandler {

    async getTargetPost(userId, postId, url) {
        const filteredPosts = await this._getAllPost(userId, url);
        const targetPost = filteredPosts.filter(post => {
            return post.id === postId;
        })[0];

        if (targetPost) {
            return new Post(targetPost.userId, targetPost.id, targetPost.title, targetPost.body);
        } else {
            return null;
        }
    }

    async getAllMappedPosts(userId, url) {
        const allPosts = await this._getAllPost(userId, url);
        let allMappedPosts = [];

        allPosts.forEach(post => {
            const isValidPost = post.hasOwnProperty('userId') && post.hasOwnProperty('id') && post.hasOwnProperty('title') && post.hasOwnProperty('body');

            if (isValidPost) {
                allMappedPosts.push(new Post(post.userId, post.id, post.title, post.body));
            }
        });

        return allMappedPosts;
    }

    async _getAllPost(userId, url) {
        const posts = await sendRequest(url);

        return posts.filter(post => {
            return post.userId === userId;
        });
    }

    sendRequest(url) {
        //fetch return Promise so we use then() to get data to handle asynchronous
        return fetch(url).then(function (response) {
            return response.json();
        })
    }

    printPost(post) {
        const { userId, postId, title, body } = post;

        return `{\n\t"userId": "${userId}",\n\t"id": "${postId}",\n\t"title": "${title}",\n\t"body": "${body}"\n},\n`
    }

}

module.exports = RequestHandler;