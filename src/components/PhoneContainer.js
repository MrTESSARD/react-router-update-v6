import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phone from "../images/phone.png";
import { buyPhone } from "../redux/phone/actionPhone";


const PhoneContainer = () => {
    const [totalPhone, setTotalPhone] = useState(1);
    const phones =useSelector(state=>state.phone.phones)
    const dispatch = useDispatch()



    return (
        <div className="container">

            <img src={phone} alt="phone" />
            <p>
                Disponibilité :
                <span id='count'>{phones}</span>
            </p>


            <div className="btnContainer">
            <button onClick={()=> dispatch(buyPhone(totalPhone))} type="">Acheter</button>
            <input type="text" name="" value={totalPhone} onChange={e=>setTotalPhone(e.target.value)} />
            </div>
        </div>
    );
}





export default PhoneContainer;


/******************************************************AVEC  Composants d’ordre supérieur Higher-Order Component ou HOC, NdT  */
// import React from 'react';
// import phone from "../images/phone.png";
// import { buyPhone } from "../redux/phone/actionPhone";
// import { connect } from "react-redux";//Composants d’ordre supérieur Higher-Order Component ou HOC, NdT
// //un composant d’ordre supérieur est une fonction qui accepte un composant et renvoie un nouveau composant.

// const PhoneContainer = (props) => {
//     console.log(props)
    
//     return (
//         <div className="container">

//             <img src={phone} alt="phone" />
//             <p>
//                 Disponibilité :
//                 <span id='count'> {props.phones}</span>
//             </p>
//             <button onClick={()=>props.buyPhone()} type="">Acheter</button>
//         </div>
//     );
// }

// //perment d'acceder au State
// ownProps(facultatif )
// // Vous pouvez définir la fonction avec un deuxième argument, ownProps, si votre composant a besoin des données de ses propres accessoires pour récupérer les données du magasin. Cet argument contiendra tous les accessoires donnés au composant wrapper qui a été généré par connect.
// //mapStateToProps vérifie regulierement si modifications
// const mapStateToProps = (state)=>{//(state, ownProps) de <PhoneContainer warning={"warning"}/> 
//     // console.log(state)
// return{
//     phones : state.phones// pour acceder sur phones => props.phones

// }
// }

// //Perment d'acceder au dispatch pour acceder à une action
// const mapDispatchToProps = (dispatch)=>{//fonction syncrone! ne pas utiliser AJAX
//     return{
//         buyPhone: () => dispatch(buyPhone())
//     }

// }
// //"connect" permet d'acceder à Composants d’ordre supérieur Higher-Order Component ou HOC, NdT
// //Là où un composant transforme des props en interface utilisateur (UI), 
// //un composant d’ordre supérieur transforme un composant en un autre composant

// //export default connect(mapStateToProps)(PhoneContainer);
// //Donne -> 
// // dispatch: ƒ ()
// // phones: 5
// // [[Prototype]]: Object


// export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);
// //Donne  -> 
// // buyPhone: () => {…}
// // phones: 5
// // [[Prototype]]: Object
