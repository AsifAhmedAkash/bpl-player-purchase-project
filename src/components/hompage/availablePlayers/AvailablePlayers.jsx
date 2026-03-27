import React from 'react';

import Card from '../../ui/Card';

const AvailablePlayers = ({ players, setCoin, coin }) => {
    // console.log(players)

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    players.map(player => {
                        // console.log(setCoin);
                        // console.log(player, 'player');
                        return <Card player={player} setCoin={setCoin} coin={coin}></Card>
                    })
                }
            </div>



        </div>
    );
};

export default AvailablePlayers;