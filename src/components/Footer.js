import logo from '../images/logo.svg';

const Footer = () =>{
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes serverd with a modern twist.</p>
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Hours</h3>
                    <ul>
                        <li>Monday - Friday <br/> 8am - 10pm </li>
                        <li>Saturday & Sunday <br/> 10am - 4pm </li>
                        <li>Online Ordering <br/> 11am - 9pm </li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> Address Here </li>
                        <li>Phone Number: <br/> 01244852083 </li>
                        <li>Email: <br/> littlelemon123@gmail.com </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;