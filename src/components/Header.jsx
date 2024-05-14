import '../App.css'

function Header(){
    return(
        <div className="encabezado">
            <h1>Residencial los Robles</h1>
            <div>
           <a href="/Perfil"><img src="src/assets/perfil.svg" className="perfil_img" alt="menú"/></a>
            <h3>Perfil</h3>
            </div>
        </div>
    );
}
export default Header;
