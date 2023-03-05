import React, { useState } from "react";
import SelectRamo from "../componets/SelectRamo"
import Boleto from "./Boleto";
import { useHistory } from 'react-router-dom';

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
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const [showBoleto, setShowBoleto] = useState(false);
  const history = useHistory();

  const handleBoletoClick = () => {
    // Lógica para gerar o boleto
    history.push('/boleto'); // Navegar para a página de finalização de compra
  }
  

  // const handleBoletoClick = () => {
  //   setShowBoleto(true);
  // }
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

  // const handleRamoChange = (values) => {
  //   setSelectedOptions(values);
  // }


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
      <h1>Selecione as áreas de mercado:</h1>
      <SelectRamo />
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
<br></br>
<div class="box_Form">
<label for="qtdregistros"><font id="step5" color="#e16a5a">QUANTIDADE DE EMPRESAS:</font></label>
<p>Defina a quantidade de Empresas que deseja na sua Lista.</p>

<select id="qtdregistros" name="qtdregistros" class="form-control">
<option value="12000">Selecione a quantidade de Empresas</option>
<option value="1000">Até 1.000 empresas = R$27,00</option>
<option value="2000">Até 2.000 empresas = R$44,00</option>
<option value="4000">Até 4.000 empresas = R$61,00</option>
<option value="8000">Até 8.000 empresas = R$79,00</option>
<option value="12000">Até 12.000 empresas = R$97,00</option>
<option value="16000">Até 16.000 empresas = R$124,00</option>
<option value="20000">Até 20.000 empresas = R$164,00</option>
<option value="30000">Até 30.000 empresas = R$184,00</option>
<option value="40000">Até 40.000 empresas = R$199,00</option>
<option value="50000">Até 50.000 empresas = R$210,00</option>
<option value="70000">Até 70.000 empresas = R$242,00</option>
<option value="100000">Até 100.000 empresas = R$266,00</option>
<option value="150000">Até 150.000 empresas = R$306,00</option>
<option value="200000">Até 200.000 empresas = R$344,00</option>
<option value="300000">Até 300.000 empresas = R$380,00</option>
<option value="400000">Até 400.000 empresas = R$450,00</option>
<option value="500000">Até 500.000 empresas = R$539,00</option>
</select>
</div>
<br></br>
                <div>
  <label for="checkboxes">
    <span>SOMENTE EMPRESAS COM</span>
  </label>
  <input 
    type="checkbox"
    name="checkboxes-0"
    id="checkboxes-0"
    value="1"
  />
  <label for="checkboxes-0">
    E-mail cadastrado
  </label>

  <input
    type="checkbox"
    name="checkboxes-1"
    id="checkboxes-1"
    value="2"
  />
  <label for="checkboxes-1">
    Endereço cadastrado
  </label>

  <input
    type="checkbox"
    name="checkboxes-2"
    id="checkboxes-2"
    value="3"
  />
  <label for="checkboxes-2">
    Telefone cadastrado
  </label>
</div>
<br></br>
<div class="box_Form">
<label for="email"><font id="step6" color="#e16a5a">E-MAIL:</font></label>
<p>Preencha o E-mail que vamos utilizar para enviar a Lista, após confirmação do pagamento.</p>
<input autocomplete="new-password" id="email" name="email" type="email" placeholder="Digite o seu melhor E-mail" class="form-control sel" required="" />
</div>
 
<div class="col-md-5">
<input class="button special" type="submit" value="Finalizar"/>
</div>
<div>
        <button onClick={handleBoletoClick}>Gerar boleto</button>
      {showBoleto && <Boleto valor="100" dataVencimento="10/03/2023" codigoBarra="1234567890" />}
    </div>

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
