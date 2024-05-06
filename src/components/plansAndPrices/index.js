import React,{useState} from 'react';
import './index.css';
import Title from '../title';
import Button from '../button';
import Modal from '../modal';
import Register from '../register';
import ImagePlans from '../imagePlans';
import Values from '../values';
import img from '/home/patrickr/ProjetosReact/academia-stackx-patrick/src/img/img.jpeg';
import img2 from '/home/patrickr/ProjetosReact/academia-stackx-patrick/src/img/img2.jpeg';
import img3 from '/home/patrickr/ProjetosReact/academia-stackx-patrick/src/img/img3.jpeg';


const listItems=[
    { title:'combo 1',
      src:img,
      alt:'descrição da imagem1',
      price:'89,99'
    },
      
    
      {title:'combo 2',
      src:img2,
      alt:'descrição da imagem2',
      price:'119,99'
      },

      {title:'combo 3',
      src:img3,
      alt:'Descrição da imagem3',
      price:'199,99'
    }
];
    


function PlansAndPrices(){
 const [selectedCombo,setselectedCombo]=useState(null)
 
 const handleOpenModal=(index)=>{
    setselectedCombo(index);
    
 }
 
const handleCloseModal=()=>{
    setselectedCombo(null);
    
}

const handlePurchase=()=>{
    alert(`Cadastro para o combo ${selectedCombo +1} 
    realizado com sucesso entraremos em contato em até 24 horas`)
handleCloseModal();
}

 return(
<div className='plansAndPrices'>
{listItems.map(function(item,index){
    return(
        <div>
        <div className='plansContainer'>
            <Title title={item.title}/>
            <ImagePlans src={item.src} alt={item.alt}/>
            <Values price={item.price}/>
            </div>
            
            <div>
            <Button className='button' onClick={()=>handleOpenModal(index)} text="Comprar"/>
            <Modal onClose={handleCloseModal} isOpen={selectedCombo===index}>
            <Register/>
            <Button className='button2' onClick={handlePurchase} text="Cadastrar"/>
            </Modal>        
            </div>
       
        </div>
    )
}
  
)}
</div>
 );
}

export default PlansAndPrices;
