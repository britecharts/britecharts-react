const flatData = {
    a: {
        data: [
            {
                topicName: 'San Francisco',
                name: 1,
                date: '2017-01-16T16:00:00-08:00',
                value: 1,
            },
            {
                topicName: 'San Francisco',
                name: 1,
                date: '2017-01-17T16:00:00-08:00',
                value: 2,
            },
        ],
    },
    b: {
        data: [
            {
                topicName: 'Oakland',
                name: 2,
                date: '2017-01-16T16:00:00-08:00',
                value: 3,
            },
            {
                topicName: 'Oakland',
                name: 2,
                date: '2017-01-17T16:00:00-08:00',
                value: 7,
            },
        ],
    },
};

const dataByTopic = {
    a: {
        dataByTopic: [
            {
                topicName: 'San Francisco',
                topic: 1,
                dates: [
                    {
                        date: '2017-01-16T16:00:00-08:00',
                        value: 1,
                    },
                    {
                        date: '2017-01-16T17:00:00-08:00',
                        value: 2,
                    },
                ],
            },
        ],
    },
    b: {
        dataByTopic: [
            {
                topicName: 'Oakland',
                topic: 2,
                dates: [
                    {
                        date: '2017-01-16T16:00:00-08:00',
                        value: 3,
                    },
                    {
                        date: '2017-01-17T16:00:00-08:00',
                        value: 4,
                    },
                ],
            },
        ],
    },
};

export default {
    flatData,
    dataByTopic,
};
