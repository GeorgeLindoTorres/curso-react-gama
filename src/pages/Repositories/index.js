import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

 

const Repositories = () => {
    const [ repositories, setRepositories ] = useState([]);
    const history = useHistory();
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/');
        }
        
    }, [])


    return (
        <S.Container>
            <S.Title>Repositorios</S.Title>
            <S.List>
                { repositories.map( repository => {
                    return (
                    <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                })}               
                </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

export default Repositories
