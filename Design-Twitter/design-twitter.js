
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

    const result = [];
    
    if (this.feed[userId]) {
        result.push(...this.feed[userId]);
    }
    
    if (this.followers[userId]) {
        for (const follower of this.followers[userId]) {
            if (this.feed[follower]) {
                result.push(...this.feed[follower]);
            }
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
    
    this.followers[followerId].push(followeeId);
    
    if (!this.following[followeeId]) {
        this.following[followeeId] = [];
    }
    
    this.following[followeeId].push(followerId);
    
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