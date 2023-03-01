import { useState, useEffect } from "react";
import React from "react";
import { db } from "../firebase/Database";
import { addDoc, collection, onSnapshot, doc, deleteDoc, setDoc } from "firebase/firestore";

const Form = () => {
const [cliente, setCliente] = useState([]);
const [form, setForm] = useState(null)

    const getData = () => {
      const arrData = [];
      onSnapshot(collection(db, "clientes"), (snapshot) => {
        snapshot.docs.forEach((item) => {
          console.log(item.data());
          arrData.push({
            ...item.data(),
            id: item.id,
          });
          setCliente(arrData);
        });
      });
    };

    const createClient = (() => {
      e.preventDefault()
      if (form) {
        addDoc(collection(db, 'clientes'), form)
      } else {
        alert('formulario vacio')
      }
      getData()
    })

    const handleChange = (ev) => {
      setForm({
        ...form,
        [ev.name]: ev.value
      })
      getData();
    }

    useEffect(() => {
      
    }, []);

  return (
    <section className="sectForm">
      <div className="formTex">
        <h1>Reserva con nosotros</h1>
        <p>
          A partir de tu contacto, nos comunicaremos contigo para revisar fechas
          y disponibilidad de horarios.
        </p>
      </div>
      <div className="formBox">
        <div className="value">
          <form name="form">
            <h2>Datos del cliente</h2>
            <div className="input">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={(e) => handleChange(e.target)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                name="numero"
                placeholder="Numero de telefono"
                onChange={(e) => handleChange(e.target)}
              />
            </div>
            <div className="input">
              <input
                type="date"
                name=" fecha"
                placeholder="Fecha"
                onChange={(e) => handleChange(e.target)}
              />
            </div>

            <div className="input">
              <input
                type="number"
                name="personas"
                id=""
                placeholder="#  de Personas"
                onChange={(e) => handleChange(e.target)}
              />
            </div>
            <button
              type="submit"
              className="botonForm"
              onClick={() => createClient()}
            >
              enviar
            </button>
            <p>resultado: </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
