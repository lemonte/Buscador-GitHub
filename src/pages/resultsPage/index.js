import { styledButtonCard, styledCard, styledRightDataModal, styledContainerUser, styledDataModal, styledDescriptionName, styledHeaderModal, styledImageBackground, styledLabelModal, styledLeftDataModal, styledListCard, styledMainResults, styledTextResults, styledUserName, styledButtonExitModal, styledTextButtonExitModal, styledImageModal, styledScoreCard, styledImageCard } from "./styles";
import M from 'materialize-css';
import { useEffect, useState } from "react";
import Tools from '../../tools/tools.js'


function ResultsPage() {
    const itens = JSON.parse(sessionStorage.getItem('itens_git')).items
    const textSearch = JSON.parse(sessionStorage.getItem('textSearch'))
    const [userSelect, setUser] = useState([])
    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});
    }, [])

   async function request(data) {
      const response =  await Tools.getData(`https://api.github.com/users/${data.login}`)
      if(!response) return M.toast({html: "Erro na consulta"})
      return setUser(response)
    }

    function modalDetail() {
        return (
            <div class="modal_detalhes modal white" id="modalDetail" >
                <div class="modal-content">
                    <div className="row" >
                        <div style={styledImageModal(userSelect.avatar_url)}>
                        </div>
                        <div style={styledLeftDataModal} >
                            <text style={styledHeaderModal} >
                                {userSelect.login}
                            </text>
                            <text style={styledLabelModal} >
                                Username:
                            </text>
                            <text style={styledDataModal} >
                                {userSelect.login}
                            </text>
                            <text style={styledLabelModal} >
                                Cadastrado
                            </text>
                            <text style={styledDataModal} >
                            {Tools.format(userSelect.created_at, null)}
                            </text>
                            <text style={styledLabelModal} >
                                URL:
                            </text>
                            <text style={styledDataModal} >
                                {userSelect.html_url}
                            </text>
                        </div>
                        <div style={styledRightDataModal} >
                            <text style={styledLabelModal} >
                                Seguindo
                            </text>
                            <text style={styledDataModal} >
                            {userSelect.following}
                            </text>
                            <text style={styledLabelModal} >
                                Seguidores
                            </text>
                            <text style={styledDataModal} >
                            {userSelect.followers}
                            </text>
                        </div>
                        <a href="#" onClick={()=> closeModal('modalDetail', [])} style={styledButtonExitModal} >
                            <text style={styledTextButtonExitModal} >Fechar</text>
                        </a>
                    </div>
                </div>
            </div >
        )
    }


   async function openModal(type, item) {
        await request(item)
        const elem = document.getElementById(type);
        const instance = M.Modal.init(elem, { dismissible: true });
        return instance ? instance.open() : 0;
    }

    function closeModal(type, item) {
        setUser(item)
        const elem = document.getElementById(type);
        const instance = M.Modal.init(elem, { dismissible: true });
        return instance ? instance.close() : 0;
    }
    return (
        <>
            <main style={styledMainResults}>
                <div style={styledListCard} >
                    <div style={styledImageBackground}>
                    </div>
                    <h1 style={styledTextResults} >Resultados para: {textSearch}</h1>
                    <div class="row" >
                        {
                            itens.map(
                                user => {
                                    return (
                                        <div class="col s12 m4 l3">
                                            <div class="card" style={styledCard}>
                                                <div class="card-image">
                                                    <img src={user.avatar_url} style={styledImageCard} />
                                                </div>
                                                <div style={styledContainerUser} >
                                                    <span style={styledUserName} >{Tools.upperCaseFirtLetter(user.login)}</span>
                                                    <br />
                                                    <a href={user.html_url} style={styledDescriptionName} >{user.html_url}</a>
                                                    <br />
                                                    <text style={styledScoreCard} >Score: {parseFloat(user.score).toFixed(2)}</text>
                                                </div>
                                                    <a href="#" onClick={() => openModal('modalDetail', user)} style={styledButtonCard} >VER MAIS</a>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </main>
            {modalDetail()}
        </>
    )
}

export default ResultsPage;