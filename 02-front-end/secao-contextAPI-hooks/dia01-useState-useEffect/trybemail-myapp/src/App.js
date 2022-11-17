import './App.css';
import Header from './pages/Header';
import MailList from './pages/MailList';

function App() {
  const arrayEmails = [
    {
      id: 1,
      title: "Invista no seu futuro! Acesse o curso de Python!",
      status: 0
    },
    {
      id: 2,
      title: "Comece a semana bem! Saiba as novidades no mundo tec",
      status: 0
    },
    {
      id: 3,
      title: "Tudo sobre JS & React!! Acesse novas informações!!",
      status: 0
    },
    {
      id: 4,
      title: "Tudo sobre os trabalhos remotos! Receba em dolar!!",
      status: 0
    }
  ];
  return (
    <div className="App">
      <Header />
      <MailList mailArray={ arrayEmails } />
    </div>
  );
}

export default App;
