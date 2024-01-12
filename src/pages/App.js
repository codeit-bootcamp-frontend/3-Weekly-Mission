import Header from '../component/Header/Header'
import CardSection from '../component/CardSection/CardSection'
import Footer from '../component/Footer/Footer'

export default function App() {
  
  return (
    <>
    <Header/>
    <CardSection/>
    <Footer/>
    </>
    
  )
}


//api를 공통으로 사용하기 위해 App.js에서 api를 호출하고, 각각의 컴포넌트에서는 props로 받아서 사용하도록 구현
//그럼 network에서 api를 한번만 호출하게 됨/불필요한 api 호출을 줄일 수 있음

