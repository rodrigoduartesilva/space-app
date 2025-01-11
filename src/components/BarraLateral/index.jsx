import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";


const ListaElitilizada = styled.ul`
    width: 212px;
    list-style: none;
    padding: 0;
    margin: 0;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaElitilizada>
                    <ItemNavegacao
                        iconeAtivo='public/icones/home-ativo.png'
                        iconeInativo='public/icones/home-inativo.png'
                        ativo={true}
                    >
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo='public/icones/mais-vistas-ativo.png'
                        iconeInativo='public/icones/mais-vistas-inativo.png'
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo='public/icones/mais-curtidas-ativo.png'
                        iconeInativo='public/icones/mais-curtidas-inativo.png'
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo='public/icones/novas-ativo.png'
                        iconeInativo='public/icones/novas-inativo.png'
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo='public/icones/surpreenda-me-ativo.png'
                        iconeInativo='public/icones/surpreenda-me-inativo.png'
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaElitilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;