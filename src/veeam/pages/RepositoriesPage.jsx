import { RepositoriesTable } from "../components/RepositoriesTable"

export const RepositoriesPage = () => {
  return (
    <>
      <h1>RepositoriesPage</h1>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center">Agregar Repositorio</button>
      <RepositoriesTable/>

    </>
  )
}
