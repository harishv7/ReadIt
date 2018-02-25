/** 
 * An in-memory data structure to handle the list of topics submitted.
 */
class Topics {
    constructor() {
        this.topics = [{
            author: 'Davis',
            title: 'Hello World!',
            upvotes: 2,
            downvotes: 2
        }];
    }

    /** 
     * Returns all the topics
     */
    getAllTopics() {
        return this.topics;
    }

    /** 
     * Returns only the top 20 topics by upvotes
     */
    getTopTwentyTopics() {
        var topTwentyTopics = [];
        var i = 0;

        if (this.topics.length < 20) {
            i = this.topics.length - 1;
        } else {
            i = 19;
        }

        var j = 0;
        while (j <= i) {
            topTwentyTopics.push(this.topics[j++]);
        }
        return topTwentyTopics;
    }

    /**
     * Adds an upvote to a topic
     * @param {number} index 
     */
    addNewUpvote(index) {
        this.topics[index].upvotes += 1;

        // bubble down the current topic to keep array sorted
        for (var i = this.topics.length - 1; i >= 1; i--) {
            if (this.topics[i].upvotes > this.topics[i - 1].upvotes) {
                var temp = this.topics[i - 1];
                this.topics[i - 1] = this.topics[i];
                this.topics[i] = temp;
            }
        }

        var topTwentyTopics = this.getTopTwentyTopics(this.topics);

        return topTwentyTopics;
    }

    /**
     * Adds a downvote to a topic
     * @param {number} index 
     */
    addNewDownvote(index) {
        this.topics[index].downvotes += 1;
        return true;
    }

    /**
     * Adds a new topic as per the title and author given.
     * New topics have a default of 0 upvotes and 0 downvotes.
     * @param {string} author 
     * @param {string} title 
     */
    addNewTopic(author, title) {
        this.topics.push({
            author: author,
            title: title,
            upvotes: 0,
            downvotes: 0
        });
        return true;
    }

    /**
     * Returns a specific topic by index.
     * @param {number} index 
     */
    getTopic(index) {
        return this.topics[index];
    }

    /**
     * For testing purposes.
     */
    clearAllTopics() {
        this.topics = [];
    }
}

module.exports = Topics;