import React from 'react';
import './index.css';

function Modal({isOpen,onClose,children}){
if(!isOpen){
return null;
}

return(
<div className="modalContainer">
<div className='modal'>

<span className='close' onClick={onClose}>
Fechar
</span>
{children}
</div>

</div>
)

}

export default Modal;