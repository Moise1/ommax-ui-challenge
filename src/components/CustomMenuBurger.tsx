import '../styles/menu-burger.scss';

export const CustomMenuBurger = () => {
  return (
    <button 
    className="navbar-toggler d-flex d-lg-none flex-column justify-content-around"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="ToggleNavigation"
    >
        <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
    </button>
  )
}
