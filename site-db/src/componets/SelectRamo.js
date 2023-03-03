import React, { useState, useEffect } from "react";

function Ramo() {
  const [ramosAtividades, setRamosAtividades] = useState([]);
  const [ramosSelecionados, setRamosSelecionados] = useState([]);

  useEffect(() => {
    async function fetchRamosAtividades() {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v2/cnae/secoes"
      );
      const data = await response.json();
      const ramosAtividades = data.map(({ descricao }) => descricao);
      setRamosAtividades(ramosAtividades);
    }
    fetchRamosAtividades();
  }, []);

  function handleRamoChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );
    setRamosSelecionados(selectedOptions);
  }

  return (
    <div>
      <label htmlFor="ramos">Selecione um ou mais ramos de atividades:</label>
      <select
        id="ramos"
        name="ramos"
        multiple
        value={ramosSelecionados}
        onChange={handleRamoChange}
      >
        {ramosAtividades.map((ramoAtividade) => (
          <option key={ramoAtividade} value={ramoAtividade}>
            {ramoAtividade}
          </option>
        ))}
      </select>
      <select>
      value={ramosSelecionados}
        onChange={handleRamoChange}
      <option value="">Ramos selecionados:</option>
      {ramosSelecionados.map((ramo) => (
        <option key={ramo} value={ramo}>
          {ramo}
        </option>
      ))}
      </select>
    </div>
  );
}

export default Ramo;
