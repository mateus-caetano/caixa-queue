import React from "react";

import "./Display.css";
import { Peaple } from '../../assets/peaple'
import { Ticket } from "../../assets/ticket";

export default function Display(props) {


    return (
        <div className='display'>
            <section>
                <h1>{props.title}</h1>
                <div>
                    <Peaple width={50} />
                    <p>Total de senhas: 200</p>
                </div>

                <div>
                    <Ticket />
                    <p>Em atendimento: 128</p>
                </div>
            </section>
        </div>
    )
}