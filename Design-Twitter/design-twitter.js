
var Twitter = function() {

    this.tweets = [];
    this.followers = [];
    this.following = [];
    
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {

    if (!this.tweets[userId]) {
        this.tweets[userId] = [];
    }
    
    this.tweets[userId].push(tweetId);
    
    if (!this.followers[userId]) {
        this.followers[userId] = [];
    }
    
    if (!this.following[userId]) {
        this.following[userId] = [];
    }
    
    this.followers[userId].push(userId);
    this.following[userId].push(userId);
    
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {

    const result = [];
    
    if (!this.following[userId]) {
        return result;
    }
    
    for (let i = 0; i < this.following[userId].length; i++) {
        const followingId = this.following[userId][i];
        
        if (this.tweets[followingId]) {
            result.push(...this.tweets[followingId]);
        }
    }
    
    return result;
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {

    if (!this.followers[followerId]) {
        this.followers[followerId] = [];
    }
    
    if (!this.following[followerId]) {
        this.following[followerId] = [];
    }
    
    this.followers[followerId].push(followeeId);
    this.following[followerId].push(followeeId);
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {

    if (this.followers[followerId]) {
        this.followers[followerId] = this.followers[followerId].filter(id => id !== followeeId);
    }
    
    if (this.following[followerId]) {
        this.following[followerId] = this.following[followerId].filter(id => id !== followeeId);
    }
    
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// Output
// [null,null,[5],null,null,[5,6],null,[5]]
// Expected
// [null,null,[5],null,null,[6,5],null,[5]]