import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AccountIcon from '../images/account-icon.png'
import SearchIcon from '../images/search-icon.png'
import MenuIcon from '../images/menu-icon.png'
import CloseIcon from '../images/close-icon.png'
import NewLogo from '../images/new-logo.png'
import ArrowIcon from '../images/arrow-icon.png'
import AccountModal from './AccountModal'
import UserDropdown from './UserDropdown'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [isUserDropdownVisible, setUserDropdownVisible] = useState(false)
  const [animation, setAnimation] = useState('none')
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    setUserId(userId)
    setIsLoggedIn(!!token)
  }, [])

  useEffect(() => {
    if (animation === 'shrinking') {
      setTimeout(() => {
        setIsMenuOpen(!isMenuOpen)
        setAnimation('growing')
      }, 250)
    } else if (animation === 'growing') {
      setTimeout(() => {
        setAnimation('none')
      }, 250)
    }
  }, [animation])

  const handleClick = () => {
    setAnimation('shrinking')
    if (isModalVisible) {
      setTimeout(() => setOpenSideMenu(!openSideMenu), 500)
      setModalVisible(false)
    } else {
      setOpenSideMenu(!openSideMenu)
    }
  }

  const toggleModal = () => {
    if (isLoggedIn) {
      setUserDropdownVisible(!isUserDropdownVisible)
      return
    }
    if (isMenuOpen) {
      setOpenSideMenu(false)
      setTimeout(() => setModalVisible(!isModalVisible), 400)
      setAnimation('shrinking')
    } else {
      setModalVisible(!isModalVisible)
    }
  }

  const logOutuser = () => {
    setUserDropdownVisible(false)
    setIsLoggedIn(false)
    setUserId('')
    localStorage.removeItem('token')
<<<<<<< HEAD
    localStorage.removeItem('userId')
    // window.location.reload()
  }

  const UserDropdown = () => {
    return (
      <div className='user-dropdown'>
        {/* <Link className='nav-link' to='/my-recipes/:userId'>
          My Profile
        </Link> */}
        {userId ? <Link className='nav-link' to={`/user/${userId}`}>
          My Recipes
        </Link> : <></>}
        {userId ? <Link className='nav-link' to={`/user/${userId}/create`}>
          Create New Recipe
        </Link> : <></>}
        <Link className='nav-link' to='/' onClick={logOutuser}>
          Log Out
        </Link>
      </div>
    )
=======
>>>>>>> 64ed2c0 (Added dropdown sliding animation and adjust width of side menu links)
  }

  return (
    <>
      <header>
        {/* MENU ICON */}
        <div className='menu-icon-container'>
          <img
            src={isMenuOpen ? CloseIcon : MenuIcon}
            width={isMenuOpen ? '11px' : '16px'}
            className={`menu-icon ${
              animation === 'shrinking' ? 'shrink-icon' : animation === 'growing' ? 'grow-icon' : ''
            }`}
            onClick={handleClick}
            alt='menu-icon'
          />
        </div>

        {/* LOGO */}
        <Link
          to='/'
          onClick={() => {
            if (openSideMenu) setAnimation('shrinking')
            setOpenSideMenu(false)
            setModalVisible(false)
          }}
        >
          <img src={NewLogo} className='logo' />
        </Link>

        {/* BUTTONS */}
        <div className='header-buttons'>
          <div className='search-bar'>
            <input type='text' placeholder='Search...' />
            <img src={SearchIcon}></img>
          </div>
          <img src={SearchIcon} className='header-buttons-search' />
          <img src={AccountIcon} onClick={toggleModal} />
        </div>
      </header>

      {/* MENU */}
      <div className={`side-menu ${openSideMenu ? 'open' : ''}`}>
        <Link
          className='nav-link'
          to='/recipes'
          onClick={() => {
            if (openSideMenu) setAnimation('shrinking')
            setOpenSideMenu(false)
            setModalVisible(false)
          }}
        >
          <span>Recipes</span>
          <img src={ArrowIcon} height='13px' />
        </Link>
        <Link
          className='nav-link'
          to='/blogs'
          onClick={() => {
            if (openSideMenu) setAnimation('shrinking')
            setOpenSideMenu(false)
            setModalVisible(false)
          }}
        >
          <span>Blogs</span>
          <img src={ArrowIcon} height='13px' />
        </Link>
      </div>

<<<<<<< HEAD

<<<<<<< HEAD
      <AccountModal setUserId={setUserId} isVisible={isModalVisible} setIsLoggedIn={setIsLoggedIn} closeModal={toggleModal} />
=======
      {!isLoggedIn && <AccountModal isVisible={isModalVisible} setIsLoggedIn={setIsLoggedIn} closeModal={toggleModal} />}
      {isLoggedIn && <UserDropdown isVisible={isUserDropdownVisible} logOutuser={logOutuser} />}
>>>>>>> 64ed2c0 (Added dropdown sliding animation and adjust width of side menu links)
=======
      {!isLoggedIn && (
        <AccountModal isVisible={isModalVisible} setIsLoggedIn={setIsLoggedIn} closeModal={toggleModal} />
      )}
      {isLoggedIn && <UserDropdown isVisible={isUserDropdownVisible} logOutuser={logOutuser} />}
>>>>>>> 9f5e371 (Fixed merge)
    </>
  )
}