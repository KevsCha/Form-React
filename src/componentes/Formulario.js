import React from "react";
import '../stylesheets/Formulario.css';


function localStorage(e) {
    e.preventDefault();
    let d = e.target;
    let name = d.name.value;
    let ap = d.lastName.value;
    let tel = d.number.value;
    let email = d.email.value;
    let signo = d.sign.value;    
    //let lenguaje = d.lenguaje.value;

    let usuario = {
        name:name,
        lastName:ap,
        phone:tel,
        email:email,
        sign:signo
    }
    //usuario();
    let x=JSON.stringify(usuario);
    let y=JSON.parse(x)
    console.log(x,y);
}


export const Formulario = () =>{
    return (
        <div className="container-form">
            <h2>Formulario</h2>
            <form className="form" onSubmit={localStorage}>
                <div className="user-box">
                    <input className="inp-form" type={'text'} name={'name'} required />
                    <label>Nombre</label>
                </div>
                <div className="user-box">
                    <input className="inp-form" type={'text'} name={'lastName'} required />
                    <label>Apellido</label>
                </div>
                <div className="user-box">
                    <input className="inp-form" type={'number'} name={'number'} required />
                    <label>Telefono</label>
                </div>
                <div className="user-box">
                    <input className="inp-form" type={'email'} name={'email'} required />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <select name={'sign'}>
                        <option>Aries</option>
                        <option>Tauro</option>
                        <option>Geminis</option>
                        <option>Cancer</option>
                        <option>Leo</option>
                        <option>Virgo</option>
                        <option>Libra</option>
                        <option>Sagitario</option>
                        <option>Acuario</option>
                        <option>Escorpio</option>
                        <option>Capricornio</option>
                        <option>Piscis</option>
                    </select>
                    <label>Signo Zodiacal</label>
                </div>
                <div className="user-check">
                    <div>
                        <label>Laravel</label>
                        <input className="inp-check" id="Laravel" name={""} value={'Laravel'} type={'checkbox'}/>
                    </div>
                    <div>
                        <label>JavaScript</label>
                        <input className="inp-check" id="JavaScript" name={""} value={'JavaScript'} type={'checkbox'} />
                    </div>
                    <div>
                        <label>Java</label>
                        <input className="inp-check" id="Java" name={""} value={'Java'} type={'checkbox'} />               
                    </div>
                    <div>
                        <label>React</label>
                        <input className="inp-check" id="Java" name={""} value={'Java'} type={'checkbox'} />               
                    </div>
                </div>
                <div className="btn-form">
                    <input type={'submit'} id="submit" value={' Enviar!!!'}/>
                    {/* <div id="register">
                        <label>Nombre</label>
                    </div> */}
                </div>
            </form>
        </div>
    )
}