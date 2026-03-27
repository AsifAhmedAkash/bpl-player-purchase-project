import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import SelectedCard from '../../ui/SelectedCard';

const SelectedPlayers = ({ selectedPlayer, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayer);

    const handleDeleteSelectedPlayer = (player) => {
        // console.log(selectedPlayer, "selected player");

        const filterdPlayers = selectedPlayer.filter((everySeletedPlayer) => everySeletedPlayer.playername != player.playername);

        // console.log(filterdPlayers);
        setSelectedPlayers(filterdPlayers);
        setCoin(coin + player.price);
        toast(`${player.playername} is deleted`);
    }

    return (
        <div>
            <div className='space-y-4'>
                {selectedPlayer.length === 0 ?
                    <div className='h-[400px] flex items-center justify-center flex-col gap-4'>
                        <h2 className='font-semibold text-xl'>No players selected</h2>
                        <p> go to available tab for players</p>
                    </div>
                    : selectedPlayer.map((player, index) => {
                        return <SelectedCard key={index} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
                    })}
            </div>


        </div>

    );
};

export default SelectedPlayers;