function Header() {
  function handleClick() {}
  return (
    <header onClick={handleClick}>
      <div className="flex items-center p-2 md:p-6">
        <span>image</span>
        <h1 className="font-bold text-3xl text-center p-2 md:text-6xl">
          Coal Gaurd
        </h1>
      </div>
    </header>
  );
}

export default Header;
