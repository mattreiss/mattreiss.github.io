import React from 'react';
import { List } from '..';

export default { title: 'List' };

const data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
];

const renderItem = ({item, index}) => (
    <div>
        {`id ${item.id} is at index ${index}`}
    </div>
);

export const basic = () => (
    <List
        data={data}
        renderItem={renderItem}
    />
);

export const horizontal = () => (
    <List
        horizontal={true}
        data={data}
        renderItem={renderItem}
    />
);
