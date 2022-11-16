import React from "react";
import './CrudFunc.css';
import Main from '../template/Main';
import axios from "../../../ProjetoFinal_React/node_modules/axios";

const title = "Cadastro de Funcionários";

export default function CrudFunc(props){
    return(
        <Main title={title}>
            {this.renderTable()}
        </Main>
        )
}