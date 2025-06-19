import logo from 'mediaFiles\img\logo.png'
export default function Pagina(props) {

    return (
    <>
      <header>
        <div class="head-left">
            <img src={logo} alt="logo" />
            <button>Products</button>
        </div>

        <div class="head-right">
            <p><a href="#">NEXUS</a></p>
            <p><a href="#">VAULT</a></p>
            <p><a href="#">ABOUT</a></p>
            <p><a href="#">SERVICES</a></p>
            <p><a href="#">CONTACT</a></p>
        </div>
      </header>
    </>
    
)}

