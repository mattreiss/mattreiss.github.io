import React from 'react';
import { List } from '..';

export default { title: 'List' };

const data = [];
for (let i = 0; i < 20; i++) {
    let item = {id: i};
    data.push(item);
}

const renderItem = ({item, index}) => (
    <div style={{
            width: 300,
            height: 100,
            backgroundColor: 'white',
            borderRadius: 8,
            margin: 8,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex'
        }}>
        {`id ${item.id} is at index ${index}`}
    </div>
);

export const basic = () => (
    <List
        height="300px"
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
