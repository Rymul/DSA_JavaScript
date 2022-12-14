/**
 * 355. Design Twitter
 * Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.
 * Implement the Twitter class:
 * Twitter() Initializes your twitter object.
 * void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
 * List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
 * void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
 * void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.
 */

 class Twitter {
    constructor() {
        this.users = {};
        this.tweets = [];
    }


    createGetUser(userId) {
        if(!this.users[userId]){
            this.users[userId] = {
                following: new Set(),
            }
        }
        return this.users[userId];
    }

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
    postTweet(userId, tweetId) {
        this.tweets.push({
            user: userId,
            tweetId
        })
    };

/** 
 * @param {number} userId
 * @return {number[]}
 */
    getNewsFeed(userId) {
        const user = this.createGetUser(userId);
        const tweets = this.tweets.filter(t => t.user === userId || user.following.has(t.user));
        return tweets.slice(-10).map((d) => d.tweetId).reverse();
    };

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
    follow(followerId, followeeId) {
        const {following} = this.createGetUser(followerId);
        following.add(followeeId);
    };

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
    unfollow(followerId, followeeId) {
        const {following} = this.createGetUser(followerId);
        following.delete(followeeId);
    };
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */