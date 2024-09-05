function Header() {
  function handleClick() {}
  return (
    <header onClick={handleClick}>
      <div className="flex items-center p-2 md:p-6">
        <div>
          <img src="../src/assets/coal-logo.png" />
        </div>
        <h1 className="font-bold text-3xl text-center p-2 md:text-6xl">
          ShiftSync
        </h1>
      </div>
    </header>
  );
}

export default Header;
