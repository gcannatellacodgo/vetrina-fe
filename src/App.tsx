import '@mantine/core/styles.css';
import NavbarHome from "./Componenti/NavbarHome";
import MenuTab from "./Componenti/MenuTab";
import HomepageRoute from "./Componenti/HomepageRoute";
import {ItemMenuTabModel} from "./models/ItemMenuTabModel";
export default function App() {

    var listMenu: ItemMenuTabModel [] = []
    listMenu.push({title:'HOME', path: '/'})
    listMenu.push({title:'PRODOTTI', path: '/prodotti'})
    listMenu.push({title:'OFFERTE', path: '/offerte'})



    return (

        <div className={'w-full h-screen bg-white'}>
            <NavbarHome/>
            {window.location.pathname === '/prodotti' ? null : <MenuTab list={listMenu}/>}
            <HomepageRoute/>
        </div>

    );
}


