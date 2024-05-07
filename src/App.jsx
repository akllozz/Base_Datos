import { BaseColaboradores } from "./BaseColaboradores.js";
import { useEffect, useState } from "react";
import Formulario from "./componentes/Formulario.jsx";
import Listado from "./componentes/Listado.jsx"
import Alert from "./componentes/Alert.jsx";
import Buscador from "./componentes/Buscador.jsx";
import "./App.css";

function App () {

  const [dataBase, setDataBase] = useState(BaseColaboradores);
	const [filter, setFilter] = useState([]);
	const [showAlert, setShowAlert] = useState(false);
	const [message, setMessage] = useState({ color: "", alertMessage: "" });
	
	useEffect(() => {
		setFilter(dataBase)
	}, [dataBase])

	return (
		<>
			<div className="container-fluid main-container p-3 pt-5 bg-white">
				<h1>Lista de colaboradores</h1>
				<div className="row mb-3">
					<div className="col-md-12 col-lg-8">
						<Buscador
							dataBase={dataBase}
							setFilter={setFilter}
						/>
					</div>
				</div>
				<div className="row row-cols-lg-2 row-cols-md-1">
					<div className="col-md-12 col-lg-8">
						<Listado colaboratorList={filter} setDataBase={setDataBase} />
					</div>
					<div className="col-md-12 col-lg-4 vstack gap-3">
						<Formulario
							dataBase={dataBase}
							setDataBase={setDataBase}
							setShowAlert={setShowAlert}
							setMessage={setMessage}
							setFilter={setFilter}
						/>
						{showAlert && <Alert message={message} />}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;