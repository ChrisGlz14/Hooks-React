import useFetch from "../Hooks/useFetch";


export const UserComponent = () => {

const { data, isLoading, errors } = useFetch("https://jsonplaceholder.typicode.com/users")


  return (
    <>
    <h1>Fetch Custom Hook</h1>
    <h3>Lista de usuarios</h3>
    {
    isLoading 
    ? <h4>Cargando Datos...</h4> 
    :  errors 
    ? <p>Error con la carga de datos o url {errors} </p>
    :  <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>

        {data.map(user => {

            return ( 
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
          </tr>
            )
        })}

        </tbody>
      </table>
      }
    </>
    )
};


export default UserComponent;
