import React from 'react';

const Topics = require('../Topics');
var topics = new Topics();

test('getTopTwentyTopics() returns 20 topics', () => {
    var i = 0,
        j = 0;
    for (i = 0; i < 40; i++) {
        topics.addNewTopic(i, j);
        j += 1;
    }
    const topTwentyTopics = topics.getTopTwentyTopics();
    expect(topTwentyTopics.length).toBe(20);
});

test('Ensure topics are sorted by upvotes', () => {
    topics.clearAllTopics();

    const mockData = [{
        author: 'Davis',
        title: 'Hello World'
    }, {
        author: 'Harish',
        title: 'How to code better?'
    }, {
        author: 'Sam',
        title: 'How React works?'
    }, {
        author: 'Donal Trump',
        title: 'Politics and Me'
    }];

    for (var i = 0; i < mockData.length; i++) {
        topics.addNewTopic(mockData[i].author, mockData[i].title);
    }

    topics.addNewUpvote(2);

    const topTwentyTopics = topics.getTopTwentyTopics();

    const expectedOrder = [{
        author: 'Sam',
        downvotes: 0,
        title: 'How React works?',
        upvotes: 1
    }, {
        author: 'Davis',
        downvotes: 0,
        title: 'Hello World',
        upvotes: 0
    }, {
        author: 'Harish',
        downvotes: 0,
        title: 'How to code better?',
        upvotes: 0
    }, {
        author: 'Donal Trump',
        downvotes: 0,
        title: 'Politics and Me',
        upvotes: 0
    }];

    expect(topTwentyTopics).toEqual(expectedOrder);
});

test('Upvotes are reflected correctly', () => {
    topics.clearAllTopics();
    topics.addNewTopic('Davis', 'Java vs C++');

    topics.addNewUpvote(0);

    expect(topics.getTopic(0).upvotes).toBe(1);
});

test('Downvotes are reflected correctly', () => {
    topics.clearAllTopics();
    topics.addNewTopic('Davis', 'Java vs C++');

    topics.addNewDownvote(0);

    expect(topics.getTopic(0).downvotes).toBe(1);
});

test('Test getAllTopics()', () => {
    topics.clearAllTopics();

    var i = 0,
        j = 0;
    for (i = 0; i < 40; i++) {
        topics.addNewTopic(i, j);
        j += 1;
    }
    const topTwentyTopics = topics.getAllTopics();
    expect(topTwentyTopics.length).toBe(40);
});