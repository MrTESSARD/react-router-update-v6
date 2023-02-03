import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phone from "../images/phone.png";
import { buyTv } from "../redux/tv/actionTv";


const TvContainer = () => {
    const tv =useSelector(state=>state.television.tv)
    const dispatch = useDispatch()


    return (
        <div className="container">

            <img src={phone} alt="tv" />
            <p>
                Disponibilité :
                <span id='count'>
                    {tv}
                    </span>
            </p>
            <button onClick={()=> dispatch(buyTv())} type="">Acheter</button>
        </div>
    );
}





export default TvContainer;