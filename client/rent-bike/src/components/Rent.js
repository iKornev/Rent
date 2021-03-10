import React from 'react';
import Input from "../common/Input";
import Select from "../common/Select";
import Headline from "../common/Headline";
import Stripe from "../common/Stripe";

export default function Rent() {
  const options = [
    { value: 'mountain', label: 'Mountain' },
    { value: 'road', label: 'Road' },
    { value: 'trial', label: 'Trial' }
  ];

  let nameRef = React.createRef();
  const typeRef = React.createRef(null);
  const priceRef = React.createRef(null);

  const handleFormSubmit = () => {
    // console.log(nameRef.current.value, typeRef.current.value, priceRef.current.value);
    fetch('http://localhost:5000/api/bike/create/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        type: typeRef.current.value,
        rentPrice: priceRef.current.value,
      })
    })
  };

  return (
    <div className={'rent mb-5'}>
      <Headline className={'mb-3'} emoji={'🤑'} title={'Create new rent'}/>
      <Stripe className={'background-dark'}>
        <div className={'col-4 mb-3'}>
          <Input name={'title'} id={'bike-name'} label={'Bike name'} reference={nameRef}/>
        </div>
        <div className={'col-4'}>
          <Select label={'Bike type'} options={options} reference={typeRef}/>
        </div>
        <div className={'col-2'}>
          <Input id={'rent-price'} label={'Rent price'} reference={priceRef}/>
        </div>
        <div className={'col mb-3 d-flex align-items-end justify-content-end'}>
          <button style={{backgroundColor: "green"}} onClick={handleFormSubmit}>RENT</button>
        </div>
        
      </Stripe>
    </div>
  );
} 
