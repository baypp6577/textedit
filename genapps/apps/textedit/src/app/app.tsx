// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React, { ChangeEvent, useState } from 'react';


export function TextArea({ title }: { title: string }) {
  const [divElement, setDivElement] = useState(1);
  const [textEditInfo, setTextEditInfo] = useState("hello world");

  let getInitialState = function () {
    return { showMe: false };
  }
  function handleChange(event: { target: { value: any; }; }) {
    console.log(event.target.value);
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ')
      event.target.classList.add('nostyle')
      event.target.blur()
    }

  }

  const handlefocusout = (event: any) => {
    event.target.classList.add('nostyle', 'spinner')
    setDivElement(1)

    if (event.target.value === "Thanks for all the Fish") {
      setTextEditInfo("Thanks for all the Fish")
    }

  }

  function handlefocus(event: any) {
    setDivElement(0)

    event.target.classList.remove('nostyle')
  }
  function handlefocusDiv(event: any) {
    console.log("cxcvxcvxc")
    setDivElement(0)

    event.target.classList.remove('nostyle')
  }


  if (divElement === 1) {

    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `

    .nostyle{   
      border: none;
      background-color: transparent;
      resize: none;
      outline: none;
      width: 100%;
      overflow: hidden;
    }
    @keyframes spinner {
      to {transform: rotate(360deg);}
    }
     
    .spinner:before {
 
      box-sizing: border-box;
      position: absolute;
      top: 3%;
      left: 0%;
      width: 20px;
      height: 20px;
      margin-top: 10px;
      margin-left: 10px;
      border-radius: 50%;
      border: 2px solid #ccc;
      border-top-color: #000;
      animation: spinner .6s linear infinite;
      content:"";
    }
        `,
          }}
        />

        <div onClick={handlefocusDiv} className='spinner'> {textEditInfo}   </div>

      </>
    );
  } else {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `

    .nostyle{   
      border: none;
      background-color: transparent;
      resize: none;
      outline: none;
      width: 100%;
      overflow: hidden;
    }
    @keyframes spinner {
      to {transform: rotate(360deg);}
    }
     
    .spinner:before {
 
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: 10px;
      margin-left: 10px;
      border-radius: 50%;
      border: 2px solid #ccc;
      border-top-color: #000;
      animation: spinner .6s linear infinite;
    }
        `,
          }}
        />

        <textarea name="firstName" onKeyPress={handleKeyPress} onChange={handleChange} onBlur={handlefocusout} onFocus={handlefocus}>{textEditInfo}</textarea>
      </>
    );
  }


}



/*export function App() {
  return (
    <>
      <TextArea title="textedit" />
      <div />
    </>
  */



export function App() {
  return (
    <>
      <TextArea title="textedit" />

    </>
  );
}




/*
export function App() {

  function handleChange(event: { target: { value: any; }; }) {
    console.log(event.target.value);
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ')
    }
  }

  return (
    <>
    <textarea name="firstName" className='nostyle' value="Heelo world" onKeyPress={handleKeyPress} onChange={handleChange} />
    <div />
    </>
  );
}*/

export default App;


