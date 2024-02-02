const Burger = () => {
  return (
    <div>
      <button
        class="menu-toggle js-open-menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg class="burger-icon" width="32" height="22">
          <use href="./images/icons.svg#burger-btn"></use>
        </svg>
      </button>
    </div>
  );
};

export default Burger;
