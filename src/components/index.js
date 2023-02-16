function Header({ eggsNHam }) {
return (
    <header>
        <ul>
            <li> Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
            
        


          <p> {eggsNHam.isLoggedIn ? 'Welcome back to the site!' : 'Oh! Youre new here.'}</p>
          </header>
    );
 }
        
export default Header;
    