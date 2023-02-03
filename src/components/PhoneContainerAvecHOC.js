import React from 'react';
import phone from "../images/phone.png";
import { buyPhone } from "../redux/phone/actionPhone";
import { connect } from "react-redux";//Composants d’ordre supérieur Higher-Order Component ou HOC, NdT
//un composant d’ordre supérieur est une fonction qui accepte un composant et renvoie un nouveau composant.

const PhoneComponent = (props) => {
    // console.log(props)
    
    return (
        <div className="container">

            <img src={phone} alt="phone" />
            <p>
                Disponibilité :
                <span id='count'> {props.phones}</span>
            </p>
            <button onClick={()=>props.buyPhone()} type="">Acheter</button>
        </div>
    );
}

//perment d'acceder au State
const mapStateToProps = (state)=>{
    // console.log(state)
return{
    phones : state.phones

}
}

//Perment d'acceder au dispatch pour acceder à une action
const mapDispatchToProps = (dispatch)=>{
    return{
        buyPhone: () => dispatch(buyPhone())
    }

}
//"connect" permet d'acceder à Composants d’ordre supérieur Higher-Order Component ou HOC, NdT
//Là où un composant transforme des props en interface utilisateur (UI), 
//un composant d’ordre supérieur transforme un composant en un autre composant

//export default connect(mapStateToProps)(PhoneComponent);
//Donne -> 
// dispatch: ƒ ()
// phones: 5
// [[Prototype]]: Object


export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
//Donne  -> 
// buyPhone: () => {…}
// phones: 5
// [[Prototype]]: Object
