/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {

    this.capacity = capacity;
    this.cache = new Map();
    this.keys = [];
    
    this.get = function(key) {
        if (this.cache.has(key)) {
            // Remove the key from the keys array
            let index = this.keys.indexOf(key);
            this.keys.splice(index, 1);
            
            // Add the key to the end of the keys array
            this.keys.push(key);
            
            return this.cache.get(key);
        }
        
        return -1;
    }
    
    this.put = function(key, value) {
        if (this.cache.has(key)) {
            // Remove the key from the keys array
            let index = this.keys.indexOf(key);
            this.keys.splice(index, 1);
        } else if (this.keys.length === this.capacity) {
            // Remove the least recently used key
            let lruKey = this.keys.shift();
            this.cache.delete(lruKey);
        }
        
        // Add the key to the end of the keys array
        this.keys.push(key);
        this.cache.set(key, value);
    }
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

    if (this.cache.has(key)) {
        // Remove the key from the keys array
        let index = this.keys.indexOf(key);
        this.keys.splice(index, 1);
        
        // Add the key to the end of the keys array
        this.keys.push(key);
        
        return this.cache.get(key);
    }
    
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
    if (this.cache.has(key)) {
        // Remove the key from the keys array
        let index = this.keys.indexOf(key);
        this.keys.splice(index, 1);
    } else if (this.keys.length === this.capacity) {
        // Remove the least recently used key
        let lruKey = this.keys.shift();
        this.cache.delete(lruKey);
    }
    
    // Add the key to the end of the keys array
    this.keys.push(key);
    this.cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */