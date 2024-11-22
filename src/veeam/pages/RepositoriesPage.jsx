import { useState } from "react"
import { RepositoriesTable } from "../components/RepositoriesTable"
import { Modal } from "../components/Modal";
import { RepositorieForm } from "../components/RepositorieForm";

export const RepositoriesPage = () => {

  const [showForm, setShowForm] = useState(false);
  const onCloseForm = () => {
    setShowForm(false);
  }

  return (
    <>
      <h1>RepositoriesPage</h1>

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center"
        onClick={() => setShowForm(true)}
      >
        Agregar Repositorio
      </button>

      <Modal isVisible={ showForm } onClose={ onCloseForm } children={<RepositorieForm/>}/>

      <RepositoriesTable />

    </>
  )
}
