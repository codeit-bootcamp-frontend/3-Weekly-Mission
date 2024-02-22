import styles from './loginButton.module.css'

interface LoginButtonProps {
  children: string;
  onClick?: () => void;
}

const LoginButton = ({ children,onClick }:LoginButtonProps) => {
  return (
    <button className={styles.login_Button} onClick={onClick}>{children}</button>
  )
}

export default LoginButton