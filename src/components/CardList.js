import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            name={user.name}
                            email={user.email}
                            id={user.id}
                            key={i}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;