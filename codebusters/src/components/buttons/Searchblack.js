import Button from 'react-bootstrap/Button';
import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

function SearchButton () {

    const colorSearch = {
        color: 'black',
        width: '31px',
        height: '30px',
    }

    const buttonStyle={
        borderRadius:"10em",
        border:"none",
        display:"flex",
        background:"none",
    
    }

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
    return (
        <div ref={ref}>
      <Button onClick={handleClick}>CLick ME !</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header href="">Popover bottom</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
    );
}

export default SearchButton;