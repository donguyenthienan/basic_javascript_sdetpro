const readline = require('readline-sync');

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url = `${BASE_URL}${SLUG}`;

let userID = readline.question("Please input user id: ");
userID = Number(userID);
let postID = readline.question("Please input post id: ");
postID = Number(postID);

printTargetPost(userID, postID);
printAllPost(userID);

async function printTargetPost(userID, postID) {
    const filterPosts = await _getAllPost(userID);
    if (filterPosts.length !== 0) {
        const targetPost = filterPosts.filter(function (posts) {
            return posts.id === postID;
        })[0]
        if (targetPost) {
            console.log(targetPost.body);
        } else {
            console.log(`The post ID :${postID} is not correct for user ID: ${userID}`);
        }
    } else {
        console.log(`Please recheck user ID: ${userID}`);
    }
}

async function printAllPost(userID) {
    const filterPosts = await _getAllPost(userID);
    if (filterPosts.length !== 0) {
        for(const post of filterPosts){
            console.log('++++++++++++++++++++++++++++++')
            console.log(post.body);
        }   
    }
    else {
        console.log(`Please recheck user ID: ${userID}`);
    }
}

async function _getAllPost(userID) {
    const posts = await sendRequest(url);
    return posts.filter(function (posts) {
        return posts.userId === userID;
    })
}

function sendRequest(url) {
    return fetch(url).then(function (response) {
        return response.json();
    })
}