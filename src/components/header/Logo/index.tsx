interface PropsLogo {
  value: string;
}

function Logo({value}: PropsLogo) {
  const src = value
  const handleClick = ():void => {
    window.location.href = '/'
  }
  return (
    <div className="Logo">
      <img src={src} alt={value} onClick={handleClick}/>
    </div>
  )
}

export default Logo;