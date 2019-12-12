import React,{ Component } from 'reac'
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subTitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...props}>
                Cadatro de Usuário
            </Main>
        )
    }
}