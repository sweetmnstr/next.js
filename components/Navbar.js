import {Navbar,Nav} from 'react-bootstrap'
import Link from "next/link";

const AppLink = ({children, className, href}) =>
       <Link href={href}>
        <a className={className}>
            {children}
        </a>
    </Link>


const AppNavbar = () =>
        <div className="navbar-wrapper">
            <Navbar expand="lg" className="navbar-dark fj-mw9">
                <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">
                    Sweetmnstr
                </AppLink>
               <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <AppLink href="/portfolios" className="mr-3 nav-link">
                            Portfolios
                        </AppLink>
                        <AppLink href="/forum/categories" className="mr-3 nav-link">
                            Courses
                        </AppLink>
                        <AppLink href="/cv" className="mr-3 nav-link">
                            Cv
                        </AppLink>
                        <AppLink href="/askme" className="mr-3 nav-link">
                            Ask me
                        </AppLink>
                    </Nav>
                    <Nav>
                        <AppLink href="/signup" className="mr-3 nav-link">
                            Sign Up
                        </AppLink>
                        <AppLink href="/login" className="mr-3 nav-link btn btn-success bg-green-2 bright">
                            Sign In
                        </AppLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>



export default AppNavbar;
