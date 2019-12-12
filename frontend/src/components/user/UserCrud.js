import React,{ Component } from 'react'
import axios from 'axios';
import Main from '../template/Main';


const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users';
const initialStete = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {
    stete = { ...initialState }
    clear() {
        this.setState({ user: initialStete.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${sabeUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(res => {
                const list = this.getUpdatedList(res.data)
                this.setState({ user: initialStete.user, list})
            })
    }

    getUpdatedList(user) {
        const list = this.stete.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadatro de Usuário
            </Main>
        )
    }
}