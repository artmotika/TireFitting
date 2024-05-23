import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <div className="App">
      <h1>Login Google</h1>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const credentialResponseDecoded = jwtDecode(
            credentialResponse.credential
          );
          console.log(credentialResponseDecoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}

export default App;
