import React, { useState } from 'react';
import { Button, Modal, Rate} from 'antd';
const Button1: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const turngrayButton =document.getElementById("myButton");
  const disableButton =document.getElementById("disButton");
  const inputfb = document.getElementById("input");
  const [index, setIndex] = useState(0);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  function onLoadFunc(){
    disableButton.addEventListener('click',function(){turngrayButton.style.backgroundColor='gray'; inputfb.readOnly =true});
  }
  const handleOk = () =>{
    setIsModalOpen(false);
    setIndex(index + 1);
    onLoadFunc();
    ;
    }
  

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <Button id="myButton" type="primary" onClick={showModal} >
        评价 
      </Button>
      <Modal 
      danger
      title="订单评价" 
      open={isModalOpen} 
     
      footer={[
        <Button 
        id="disButton" 
        key='confirm' 
        type="primary" 
        onClick={handleOk}
        
        >
          确定
          </Button>,
        <Button key='cancel'  onClick={handleCancel}>取消 </Button>
      ]}
     
      >

        <div class="container" >
          <input type="text"id="input">
            </input>
        </div>
 <div><Rate allowHalf defaultValue={2.5} /></div>
       
       
      </Modal>
    </>
  );
    };

export default Button1;