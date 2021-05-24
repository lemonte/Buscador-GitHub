import { styledButtonSearch, styledIconSearch, styledLogoNavBar, styledNavBar, styledSearchComponent } from "./styles";
import Logotype from '../../assets/Logotype@3x.png'
import SearchIcon from '../../assets/search_icon.svg'
import { useState } from "react";
import { withRouter } from 'react-router-dom';
import M from 'materialize-css';
import Tools from "../../tools/tools";

function NavBar(props) {
    const [textSearch, setTextSearch] = useState("")

    async function request() {
        const { history } = props;
        const response = await Tools.getData(`https://api.github.com/search/users?q=${textSearch}`)
        if (!response || !response.items) return M.toast({ html: "Erro na consulta" })
        sessionStorage.setItem('itens_git', JSON.stringify(response))
        sessionStorage.setItem('textSearch', JSON.stringify(textSearch))
        setTextSearch("")
        return history.push("/results")
    }


    return (
        <nav style={styledNavBar} >
            <a href="/" ><img src={Logotype} style={styledLogoNavBar} /></a>
            <input
                style={styledSearchComponent}
                placeholder="Pesquisar"
                value={textSearch}
                onChange={(e) => setTextSearch(e.target.value)}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        request()
                    }
                }}
            />
            <a href='#' style={styledButtonSearch} onClick={() => request()} >
                <img src={SearchIcon} style={styledIconSearch} />
            </a>
        </nav>
    )
}

export default withRouter(NavBar);