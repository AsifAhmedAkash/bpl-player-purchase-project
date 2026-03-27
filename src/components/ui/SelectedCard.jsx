import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedCard = ({ player, handleDeleteSelectedPlayer }) => {
    return (
        <div>
            <div className='flex items-center gap-6 justify-between p-10 rounded-xl border'>
                <div className='flex items-center gap-4'>
                    <img src={player.playerimg} alt={player.playername} className='h-[75px] w-auto rounded-md' />
                    <div>
                        <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser /> {player.playername}</h2>
                        <p>{player.playertype}</p>
                    </div>
                </div>
                <button className='btn text-red-500' onClick={() => handleDeleteSelectedPlayer(player)}><MdDelete /></button>
            </div>
        </div>
    );
};

export default SelectedCard;