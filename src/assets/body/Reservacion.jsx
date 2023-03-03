import { useState, useEffect } from "react";
import React from "react";
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc
} from 'firebase/firestore'
import { db } from "../firebase/Database";

const Form = () => {
  const [cliente, setCliente] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    numero: '',
    fecha: '',
    personas: 0,
  });

  const getData = () => {
    onSnapshot(collection(db, 'clientes'), (snapshot) => {
      const arrData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCliente(arrData);
    });
  };

  const sendData = () => {
    if (form.nombre && form.numero && form.fecha && form.personas) {
      addDoc(collection(db, 'clientes'), form);
      setForm({
        nombre: '',
        numero: '',
        fecha: '',
        personas: 0,
      });
    } else {
      alert('formulario incompleto');
    }
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onDelete = async (id) => {
    await deleteDoc(doc(db, 'clientes', id));
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="formBox">
      <div className="value">
        <form name="form">
          <h2>Datos del cliente</h2>
          <div className="input">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="numero"
              placeholder="Numero de telefono"
              value={form.numero}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="date"
              name="fecha"
              placeholder="Fecha"
              value={form.fecha}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="number"
              name="personas"
              placeholder="#  de Personas"
              value={form.personas}
              onChange={handleChange}
            />
          </div>
          <button className="botonForm" type="button" onClick={sendData}>
            enviar
          </button>
        </form>
      </div>
      {cliente.map((item) => (
      <div className="card w-50"  key={item.id}>
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.Fecha}</p>
        <p className="card-text">{item.numero}</p>
        <p className="card-text">{item.numero}</p>
        <a href="#" className="btn btn-primary">Button</a>
      </div>
    </div>
      ))}
    </div>
  );
};







export default Form;