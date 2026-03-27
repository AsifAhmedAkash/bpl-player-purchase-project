import React from 'react';
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayer }) => {

    const [isSlected, setSelected] = useState(false)

    const handleChoosePlayer = () => {


        let newCoin = coin - player.price;
        if (newCoin >= 0) {
            setSelected(true);
            setCoin(coin - player.price)

            toast(`${player.playername} is selected`);
            setSelectedPlayers([...selectedPlayer, player]);
        } else {
            toast(`not enough coin`);
        }

    }
    // console.log(setCoin)
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={player.playerimg}
                        alt="Shoes" />
                </figure>


                <div className="card-body">
                    <h2 className="card-title"><FaUser />{player.playername}</h2>

                    <div className='flex justify-between gap-2 items-center'>

                        <div className="flex gap-2 items-center ">
                            <FaFlag />
                            <p>{player.playercountry}</p>
                        </div>

                        <button className='btn'>{player.playertype}</button>
                    </div>

                    <div className="divider"></div>

                    <h2 className='font-bold'>{player.rating}</h2>

                    <div className='flex justify-between gap-4 font-bold'>
                        <p>{player.battingstyle}</p>
                        <p className='text-right'>{player.bowlingstyle}</p>
                    </div>

                    <div className="card-actions justify-between">
                        <p className='font-semibold'>Price: {player.price}</p>
                        <button className="btn" onClick={handleChoosePlayer
                        } disabled={isSlected}>{isSlected === true ? "Selected" : "Choose player"}</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;