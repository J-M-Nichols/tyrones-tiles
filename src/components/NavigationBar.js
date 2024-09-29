import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { tyroneIdleImage } from '../helpers/images'

const NavigationBar = _ => {
    
    return (
        <Navbar
            className="fixed-top border-bottom border-success rounded-bottom ps-3 pe-3 gap-3"
            bg='warning'
            expand='lg'
            role='navigation'
            aria-label='Main Navigation'
        >
            <Navbar.Brand 
                className="p-0 d-flex"
                as={Link}
                to='/'
            >
                <img 
                    className="img-fluid m-auto pixelated"
                    src={tyroneIdleImage}
                    alt="Tyrone Osaurus Rex"
                    style={{
                        width:'40px',
                        height:'40px',
                    }}
                />
                <span 
                    className="ps-3 text-success fw-bolder align-content-center"
                >Tyrone's Tiles</span>
            </Navbar.Brand>
            <Navbar.Toggle 
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse 
                className="justify-content-end"
                id="basic-navbar-nav"
            >
                <Nav 
                    className='mr-auto d-flex gap-3'
                >
                    <button 
                        type='button'
                        className="btn btn-outline-success"
                    >
                        <Nav.Link 
                            as={Link}
                            to='/'
                            className='fw-bolder'
                            style={{color:'inherit'}}
                        >Home</Nav.Link>
                    </button>
                    <button 
                        type='button'
                        className="btn btn-outline-success"
                    >
                        <Nav.Link 
                            as={Link}
                            to='/casual'
                            className='fw-bolder'
                            style={{color:'inherit'}}
                        >Casual</Nav.Link>
                    </button>
                    <button 
                        type='button'
                        className="btn btn-outline-success"
                    >
                        <Nav.Link 
                            as={Link}
                            to='/challenge'
                            className='fw-bolder'
                            style={{color:'inherit'}}
                        >Challenge</Nav.Link>
                    </button>
                    <button 
                        type='button'
                        className="btn btn-outline-success"
                    >
                        <Nav.Link 
                            as={Link}
                            to='/about-me'
                            className='fw-bolder'
                            style={{color:'inherit'}}
                        >About Me</Nav.Link>
                    </button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar