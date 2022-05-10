import "./global.css?modules=false";

export default function Root(props) {
  return (
    <nav className="navbar">
   
    <div className="navlogo">AFAno</div>

    <a href="#" className="ham">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </a>

    <div className="navlinks">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
    </div>
</nav>
  )
}
