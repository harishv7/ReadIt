class Topics {
    constructor() {
        if (!Topics.instance) {
            this.topics = [{
                author: 'Davis',
                title: 'Hello World!',
                upvotes: 2,
                downvotes: 2
            }];
            Topics.instance = this;
        }

        return Topics.instance;
    }

    getAllTopics() {
        return this.topics;
    }

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
        console.log(topTwentyTopics);

        return topTwentyTopics;
    }

    addNewDownvote(index) {
        this.topics[index].downvotes -= 1;
        return true;
    }

    addNewTopic(author, title) {
        this.topics.push({
            author: author,
            title: title,
            upvotes: 0,
            downvotes: 0
        });
        return true;
    }
}

module.exports = Topics;