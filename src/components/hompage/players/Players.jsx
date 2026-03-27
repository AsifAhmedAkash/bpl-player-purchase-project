import React, { use, useState } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';



const Players = ({ playersPromise, setCoin, coin }) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    // console.log(players);
    const [selectedType, setSelectedType] = useState('available');
    // console.log(selectedType);
    const [selectedPlayer, setSelectedPlayers] = useState([])

    return (
        <div className='container mx-auto  my-15'>
            {/* Players: {players.length} */}

            <div className='flex justify-between gap-4 items-center mb-5'>
                {selectedType === "available" ? <h2 className='font-bold text-3xl'>Available players</h2> : <h2 className='font-bold text-3xl'>Selected players ({selectedPlayer.length}/{players.length})</h2>}

                <div>
                    <button onClick={() => setSelectedType("available")} className={`btn ${selectedType === "available" ? 'bg-[#E7FE29] text-black' : 'bg-neutral'} rounded-r-none rounded-l-xl `}>Available</button><button onClick={() => setSelectedType("selected")} className={`btn ${selectedType === "selected" ? 'bg-[#E7FE29] text-black' : 'bg-neutral'} rounded-l-none rounded-r-xl `}>Selected ({selectedPlayer.length})</button>
                </div>
            </div>
            {
                selectedType === "available" ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayer={selectedPlayer}></AvailablePlayers> :
                    <SelectedPlayers selectedPlayer={selectedPlayer} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>
            }
        </div>
    );
};

export default Players;