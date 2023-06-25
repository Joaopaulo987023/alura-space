import styles from './PaginaInicial.module.scss';
import banner from './banner.png';

import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Rodape from 'componentes/Rodape'
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";
export default function PaginaInicial(){
    return(
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa de fotos do espaço!</h1>
                        <img src={banner} alt="A Imagem da terra vista do espaço " />
                    </div>
                </section>
                
                <div className={styles.galeria}>
                    <Galeria/>
                    <Populares/>
                </div>
            </main>
            <Rodape/>
            
        </>
       
    )
}