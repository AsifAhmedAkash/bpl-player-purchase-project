import React from 'react';

import Card from '../../ui/Card';

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayer }) => {
    // console.log(players)

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    players.map((player, index) => {
                        // console.log(setCoin);
                        // console.log(player, 'player');
                        return <Card key={index} player={player} setCoin={setCoin} coin={coin}
                            setSelectedPlayers={setSelectedPlayers} selectedPlayer={selectedPlayer}></Card>
                    })
                }
            </div>



        </div>
    );
};

export default AvailablePlayers;