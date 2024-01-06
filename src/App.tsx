import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react'
import { useIdentityMutation } from './hooks/useIdentityMutation'
import SuccessModal from './components/Modal/modal'

function App() {
  const { mutate, isSuccess } = useIdentityMutation()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName: secondName
    })
  }

  return (
    <div className='container'>
      <SuccessModal 
        title='Confirmado com sucesso' 
        isVisible={isSuccess}
        subText='Fique atento ao seu e-mail, logo você deverá receber a confirmação da assinatura'
      />
      <form>
        <div className='name-form-container'>
          <PrimaryInput 
            value={firstName} 
            onChange={event => setFirstName(event.target.value)}
            name="firstName"
            label="Primeiro"
            placeholder="Rubens"
          />
          <PrimaryInput 
            value={secondName} 
            onChange={event => setSecondName(event.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder="Fifer"
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput 
          value={email} 
          onChange={event => setEmail(event.target.value)}
          name="email"
          label="Digite seu e-mail"
          placeholder="fulano@email.com"
        />
        <Spacer height="4" />
        <Button colorScheme='green' width="100%" onClick={submit}>enviar</Button>
      </form>
      <div className="product-details">
        <h2>Assinatura Mensal</h2>
        <Spacer height="4" />
        <p>você irá pagar</p>
        <span>R$ 300,00</span>
        <Spacer height="4" />
        <p>O melhor serviço pelo menor preço.</p>
      </div>
    </div>
  )
}

export default App
