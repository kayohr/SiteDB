import { useState } from 'react';

const estadosECidades = {
    AC: ['Rio Branco', 'Cruzeiro do Sul', 'Tarauacá'],
    AL: ['Maceió', 'Arapiraca', 'Rio Largo', 'Palmeira dos Índios'],
    AM: ['Manaus', 'Parintins', 'Itacoatiara', 'Coari'],
    AP: ['Macapá', 'Santana', 'Laranjal do Jari', 'Oiapoque'],
    BA: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Itabuna'],
    CE: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú'],
    DF: ['Brasília', 'Ceilândia', 'Taguatinga', 'Samambaia'],
    ES: ['Vitória', 'Cariacica', 'Vila Velha', 'Serra'],
    GO: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde'],
    MA: ['São Luís', 'Imperatriz', 'Timon', 'Caxias'],
    MG: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora'],
    MS: ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá'],
    MT: ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop'],
    PA: ['Belém', 'Ananindeua', 'Santarém', 'Marabá'],
    PB: ['João Pessoa', 'Campina Grande', 'Santa Rita', 'Patos'],
    PE: ['Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru'],
    PI: ['Teresina', 'Parnaíba', 'Picos', 'Floriano'],
    PR: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa'],
    RJ: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu'],
    RN: ['Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante'],
    RO: ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena'],
    RR: ['Boa Vista', 'Rorainópolis', 'Caracaraí', 'Mucajaí'],
    RS: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas'],
    SC: ['Florianópolis', 'Joinville', 'Blumenau', 'Chapecó'],
    SE: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana'],
    SP: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo'],
    TO: ['Palmas', 'Araguaína', 'Gurupi'],
  };

const siglasEstados = Object.keys(estadosECidades);

export default function SelectEstadosECidades({ onEstadoChange, cidades }) {
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  const handleEstadoChange = (event) => {
    const estado = event.target.value;
    setEstadoSelecionado(estado);
    onEstadoChange(estado);
  };

  return (
    <>
      <select value={estadoSelecionado} onChange={handleEstadoChange}>
        <option value="">Selecione um estado</option>
        {siglasEstados.map((sigla) => (
          <option key={sigla} value={sigla}>
            {sigla}
          </option>
        ))}
      </select>
      {cidades.length > 0 && (
        <select value="" onChange={() => {}}>
          <option value="">Selecione uma cidade</option>
          {cidades.map((cidade) => (
            <option key={cidade} value={cidade}>
              {cidade}
            </option>
          ))}
        </select>
      )}
    </>
  );
}