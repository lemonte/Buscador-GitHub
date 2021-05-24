import iconHome from '../../assets/Logotype_background.svg'
import { styledIconMain, styledMain } from "./styles";

function HomePage() {
    return (
        <>
            <main style={styledMain} >
                <img src={iconHome} style={styledIconMain} />
            </main>
        </>
    )
}

export default HomePage;