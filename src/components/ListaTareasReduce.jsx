import React from 'react'


// Creamos un estado inicial para ejemplificar, este es un array de tareas.

const initialState = [{
    id : 0,
    tarea : "Comprar huevo",
    estado: false
}]


const nuevaTarea = {
    id : 2,
    tarea: 'Comprar pan',
    estado: false
}

const agregarTarea = {
    type : '[TAREAS] Agregar Tarea',
    payload : nuevaTarea

}
const editarTarea = {
    type : '[TAREAS] Editar Tarea',
    payload : nuevaTarea

}
const eliminarTarea = {
    type : '[TAREAS] Eliminar Tarea',
}
const eliminarTareas = {
    type : '[TAREAS] Eliminar Tareas',
}

// Creamos el reducer, es un metodo con una accion
//Defaulteamos el state en initial State y la accion en vacio, en caso de que no pasemos ningun state ni ninguna accion
const tareaReducer = (state = initialState, action = {}) => {
    // if (action.type === '[TAREAS] Agregar Tarea') {
    //     return[...state, action.payload]  // el reducer de la tarea recibe un estado y una accion, con un if para una sola accion
    // }

    // El reducer devuelve un estado nuevo con informacion y sirve para centralizar la logica del negocio en un lugar.

    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Editar Tarea':
            // return [...state, action.payload]
        case '[TAREAS] Eliminar Tarea':
            // return [...state, action.payload]
        case '[TAREAS] Eliminar Tareas':
            return []
    
        default:
            break;
    }

    return state
}

console.log(tareaReducer(initialState,agregarTarea))


export const ListaTareasReduce = () => {
  return (
    <div>ListaTareasReduce</div>
  )
}
