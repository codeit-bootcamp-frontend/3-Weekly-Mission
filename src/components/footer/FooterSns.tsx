interface PropsFooterSns {
  value: string;
}

function FooterSns({ value }:PropsFooterSns) {
  return (
    <div className="FooterSns">
      <img src={value} alt={value} />
    </div>
  )
}

export default FooterSns;