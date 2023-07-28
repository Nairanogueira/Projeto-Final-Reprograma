import { Link } from 'react-router-dom'
import styles from '../styles/components/menu.module.css'
import fotoslogan from "../assets/slogan1.png"

const Menu = () => {
    return(
        <>
        
        <nav className={styles.menuConteiner}>
            <img className={styles.slogan}src={fotoslogan} alt="" />

            <div className={styles.menuText}>
                <li>
                    <Link className={styles.menuLink} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles.menuLink} to="/quemsomos">Quem Somos?</Link>
                </li>
                <li>
                    <Link className={styles.menuLink} to="/cadastro">Cadastre-se!</Link>
                </li>
            </div>
            
        </nav>
        </>
    )
}

export default Menu