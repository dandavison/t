import * as d3 from 'd3';

import eventDrops from 'event-drops';

const chart = eventDrops({ d3 });

const repositoriesData = [
    {
        name: 'admin-on-rest',
        data: [{ date: new Date('2014/09/15 14:21:31') } /* ... */],
    },
    {
        name: 'event-drops',
        data: [{ date: new Date('2014/09/15 13:24:57') } /* ... */],
    },
    {
        name: 'sedy',
        data: [{ date: new Date('2014/09/15 13:25:12') } /* ... */],
    },
];

function component() {
  let element = document.createElement('div');

  d3.select(element)
    .data([repositoriesData])
    .call(chart);

  return element;
}

document.body.appendChild(component());
