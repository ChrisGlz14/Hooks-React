import React, { useReducer } from "react";
import useForm from "../Hooks/useForm";

// Creamos un estado inicial para ejemplificar, este es un array de tareas.

const initialState = [
  {
    id: new Date().getTime(),
    tarea: "Comprar huevo",
    finalizada: false,
  },
];

const editarTarea = {
  type: "[TAREAS] Editar Tarea",
  //   payload: nuevaTarea,
};
const eliminarTarea = {
  type: "[TAREAS] Eliminar Tarea",
};
const eliminarTareas = {
  type: "[TAREAS] Eliminar Tareas",
};

// Creamos el reducer, es un metodo con una accion
//Defaulteamos el state en initial State y la accion en vacio, en caso de que no pasemos ningun state ni ninguna accion
const tareaReducer = (state = initialState, action = {}) => {
  // if (action.type === '[TAREAS] Agregar Tarea') {
  //     return[...state, action.payload]  // el reducer de la tarea recibe un estado y una accion, con un if para una sola accion
  // }

  // El reducer devuelve un estado nuevo con informacion y sirve para centralizar la logica del negocio en un lugar.

  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar tarea":
      return state.map(tarea => {
        if(tarea.id === action.payload) {
            return {
                ...tarea,
                finalizada: !tarea.finalizada
            }
        } return tarea
      });
    // return [...state, action.payload]
    case "[TAREAS] Eliminar Tarea":
      console.log(eliminarTarea);
    // return [...state, action.payload]
    case "[TAREAS] Eliminar Tareas":
      console.log(eliminarTareas);
      return [];

    default:
      break;
  }

  return state;
};

// console.log(tareaReducer(initialState, agregarTarea));

export const ListaTareasReduce = () => {
  const [tareaState, dispatch] = useReducer(tareaReducer, initialState);

  const { tarea, formState, onInputChange } = useForm({ tarea: "" });

  const agregarTarea = (event) => {
    if (formState.tarea == "") {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    console.log(formState);
    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const finalizarTarea = (id) => {
      const action = {
        type : '[TAREAS] Finalizar tarea',
        payload: id
      }
      dispatch(action)
  }

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="tarea"
            aria-describedby="emailHelp"
            name="tarea"
            placeholder="Ingresar tarea"
            value={tarea}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <hr />

      <ul className="list-group">
        {tareaState.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{item.tarea}</span>
              <input type="checkbox" 
               value={item.finalizada}
               onClick={() => finalizarTarea(item)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
