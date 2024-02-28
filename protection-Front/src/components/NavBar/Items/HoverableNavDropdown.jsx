import React , {useState} from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './Hoverable.css'
function HoverableNavDropdown({ title, children, id ,drop,canvas,nested}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleMouseEnter = () => {
      if (canvas || nested) {
        setIsOpen(true);
      }
    };
  
    const handleMouseLeave = () => {
      if (canvas || nested) {
        setIsOpen(false);
      }
    };
  
    const handleClick = () => {
      if (!canvas && !nested) {
          setIsOpen(!isOpen);
      }
    };
  
    return (
      <NavDropdown
        title={title}
        id={id}
        show={isOpen}
        drop={drop}
        onMouseEnter= {handleMouseEnter} 
        onMouseLeave= {handleMouseLeave} 
        onClick={handleClick}
        className='navdropdown-menu'
      >
          {children}
      </NavDropdown>
    );
  }
  export default HoverableNavDropdown; 