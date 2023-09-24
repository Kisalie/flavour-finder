import { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

<<<<<<< HEAD
<<<<<<< HEAD

export default function AccountModal({ isVisible, closeModal }) {
=======
export default function AccountModal({ isVisible, closeModal, setIsLoggedIn }) {
>>>>>>> 36d844d (Updated register/login modal to fix some issues)
=======
export default function AccountModal({ isVisible, closeModal, setIsLoggedIn, setUserId }) {
>>>>>>> 89507b5 (Fixed authentication for the header, gave it userid properties and also fixed the profile navigation and also added a create new recipe to <Profile> component.)
  const [isLogin, setIsLogin] = useState(false)

  const switchToRegister = () => {
    setIsLogin(false)
  }

  const switchToLogin = () => {
    setIsLogin(true)
  }

  return (
    <div className={`account-modal-container ${isVisible ? 'open' : ''}`}>
<<<<<<< HEAD
      <img src={Illustration} width='480px' />
<<<<<<< HEAD
      <div className='form-and-title-container'>
=======
      <div className='form-container'>
        <div className='heading-container'>
          <h1>Register</h1>
          <button onClick={closeModal}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-x'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#f7f3e8'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M18 6l-12 12' />
              <path d='M6 6l12 12' />
            </svg>
          </button>
        </div>
>>>>>>> 419e701 (Finished register form and added a close button to close the account modal)
        {isLogin ? <LoginForm switchToRegister={switchToRegister} /> : <RegisterForm switchToLogin={switchToLogin} />}
=======
      <div className='form-container'>
        {isLogin ? (
          <LoginForm setUserId={setUserId} switchToRegister={switchToRegister} closeModal={closeModal} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <RegisterForm switchToLogin={switchToLogin} closeModal={closeModal} />
        )}
>>>>>>> 32fd0d2 (Added loading and success animations)
      </div>
    </div>
  )
}
