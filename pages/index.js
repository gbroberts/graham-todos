// import firebase from '../firebase'
import { Button } from 'components/ui/buttons'
import { GoogleProvider } from 'components/auth/providers/google'


export default function Home() {
  
  return (
     <div>
       <h1>Graham&apos;s Todos</h1>
      <Button bgcolor="tomato" color="white">
        {/* children */}
        sign up with firebase
      </Button>
      <GoogleProvider />
     </div>
  )
}
