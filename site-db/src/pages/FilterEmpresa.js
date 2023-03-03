import React, { useState } from "react";
import SelectRamo from '../componets/SelectRamo'

const estadosECidades = {
  AC: ["Rio Branco", "Cruzeiro do Sul", "Tarauacá"],
  AL: ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios"],
  AM: ["Manaus", "Parintins", "Itacoatiara", "Coari"],
  AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque"],
  BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Itabuna"],
  CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú"],
  DF: ["Brasília", "Ceilândia", "Taguatinga", "Samambaia"],
  ES: ["Vitória", "Cariacica", "Vila Velha", "Serra"],
  GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde"],
  MA: ["São Luís", "Imperatriz", "Timon", "Caxias"],
  MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
  MS: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá"],
  MT: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop"],
  PA: ["Belém", "Ananindeua", "Santarém", "Marabá"],
  PB: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos"],
  PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru"],
  PI: ["Teresina", "Parnaíba", "Picos", "Floriano"],
  PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"],
  RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"],
  RN: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante"],
  RO: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena"],
  RR: ["Boa Vista", "Rorainópolis", "Caracaraí", "Mucajaí"],
  RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas"],
  SC: ["Florianópolis", "Joinville", "Blumenau", "Chapecó"],
  SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana"],
  SP: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo"],
  TO: ["Palmas", "Araguaína", "Gurupi"],
};

export default function FilterEmpresa() {
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidades, setCidades] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");

  const siglasEstados = Object.keys(estadosECidades);

  const handleEstadoChange = (event) => {
    const estado = event.target.value;
    setEstadoSelecionado(estado);
    const cidadesDoEstado = estadosECidades[estado] || [];
    setCidades(cidadesDoEstado);
    setCidadeSelecionada("");
  };

  const handleCidadeChange = (event) => {
    const cidade = event.target.value;
    setCidadeSelecionada(cidade);
  };
  return (
    <div>
      <header>
        <h1> xablau</h1>
        <nav> link </nav>
      </header>
      <article>
        <section>
          <div>
            <h2>
            Filtros
            </h2>

              <form>
                <div>
                  <p> <strong>SEGMENTO</strong></p>
                  <label>
                    <p>Selecione uma ou mais áreas de mercado das Empresas que deseja em sua Lista.</p>
                    {/* <select>
                      <option> <SelectRamo /> </option>
                    </select> */}
                  </label>
                </div>
                <>
                  <select
                    value={estadoSelecionado}
                    onChange={handleEstadoChange}
                  >
                    <option value="">Selecione um estado</option>
                    {siglasEstados.map((sigla) => (
                      <option key={sigla} value={sigla}>
                        {sigla}
                      </option>
                    ))}
                  </select>
                  {cidades.length > 0 && (
                    <select
                      value={cidadeSelecionada}
                      onChange={handleCidadeChange}
                    >
                      <option value="">Selecione uma cidade</option>
                      {cidades.map((cidade) => (
                        <option key={cidade} value={cidade}>
                          {cidade}
                        </option>
                      ))}
                    </select>
                  )}
                </>
                <p>
                  <input
                    type="checkbox"
                    id="todosEstados"
                    onChange={(event) => {
                      if (event.target.checked) {
                        setEstadoSelecionado("");
                        const todasCidades =
                          Object.values(estadosECidades).flat();
                        setCidades(todasCidades);
                        setCidadeSelecionada("");
                      } else {
                        setEstadoSelecionado("");
                        setCidades([]);
                        setCidadeSelecionada("");
                      }
                    }}
                  />
                  <label htmlFor="todosEstados">Todos os Estados</label>

                  <input
                    type="checkbox"
                    id="todasCidades"
                    onChange={(event) => {
                      if (event.target.checked) {
                        setCidadeSelecionada("");
                        setCidades(
                          Object.values(
                            estadosECidades[estadoSelecionado] || []
                          ).flat()
                        );
                      } else {
                        setCidadeSelecionada("");
                        setCidades([]);
                      }
                    }}
                  />
                  <label htmlFor="todasCidades">Todas as Cidades</label>
                </p>
                <span></span>
                <label for></label>
                <div>
                  <p>
                    <strong></strong>
                  </p>
                </div>
              </form>
          </div>
        </section>
      </article>
    </div>
  );
}
