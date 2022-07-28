import '../styles/components/informationcontainer.sass';
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

const cards = [
  {
    icon: <AiFillPhone />,
    name: 'Telefone',
    dado: '(33) 999636478',
    id: 'phone_icon',
  },
  {
    icon: <AiOutlineMail />,
    name: 'E-mail',
    dado: 'lucasgomesmatosdev@gmail.com',
    id: 'email_icon',
  },
  {
    icon: <AiFillEnvironment />,
    name: 'Localização',
    dado: 'Novo Oriente de Minas - MG',
    id: 'pin_icon',
  },
];

export const InformationContainer = () => {
  return (
    <section id="information_container">
      {cards.map(({ icon, name, dado, id }) => (
        <div key={name} className="info_card">
          <span id={id}>{icon}</span>
          <div>
            <h3>{name}</h3>
            <p>{dado}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InformationContainer;
