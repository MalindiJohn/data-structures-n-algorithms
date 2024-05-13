
var Twitter = function() {

    this.tweets = [];
    this.followers = [];
    this.following = [];
    this.feed = [];
    this.tweetId = 0;
    
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {

    this.tweets.push({ userId, tweetId });
    
    if (!this.followers[userId]) {
        this.followers[userId] = [];
    }
    
    if (!this.following[userId]) {
        this.following[userId] = [];
    }
    
    if (!this.feed[userId]) {
        this.feed[userId] = [];
    }
    
    this.feed[userId].push(tweetId);
    
    this.tweetId++;
    
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */