import React from 'react';
import styled from 'styled-components';


export default{
    Wrapper: styled.div`   
    & input{
    margin-bottom: 10px;
    padding: 8px 16px;
    border: 1px solid #000;
    border-radius: 10px;
    box-sizing: border-box;
    outline: none;
    }
    h1{
        text-align:center;
        font-family: 'Titillium Web', sans-serif;
        font-size: 32px;
    } 
    `,
    Table: styled.table`
    width: 90%;
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    margin: 0 auto;
    & th {
    color: white;
    background-color: #9e9e9e;
    padding: 10px 50px;
    border: 1px solid black;
    font-family: 'Titillium Web', sans-serif;
    font-size: 16px;
    opacity: 0.8;
    cursor: pointer;
    &:hover{
        opacity: 1;}
    };
    td{
    color: black;
    padding: 10px 50px;
    border: 1px solid black;
    font-family: 'Titillium Web', sans-serif;
    font-size: 16px; 
    font-weight: bold;
    opacity: 0.8;
    cursor: pointer;
    &:hover{
        opacity: 1;}
    }
    tbody:nth-child(even){
        background-color: #e6e6e6;
    }
    tbody:nth-child(odd){
        background-color: #fff;
    }
    `,
    Form: styled.form`
    display: flex;
    justify-content: flex-end;
    margin: 30px 70px 30px 0;
    `
}