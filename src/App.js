import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import CV from './components/CV';
import Exam from './components/Exam';
import Students from './components/Students';

function App() {
  const ToggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
    }
  }
  const [mode, setMode] = useState("light mode"); //where dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  //we cannot use setAlert method to show the alert so we use ""Show Alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  return (
    <>
      <NavBar title="TextUtil" about="About us" />
      <Students></Students>
      {/* <Exam name="Adil Hussain Mughal" OrgName="OmniSoftex" /> */}
      <Alert alert="This is successful alert...Congratulations" />
      <center>
        <h1>Welcome to React</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida
          ligula pretium elit condimentum, at convallis tortor mollis. Phasellus
          tincidunt orci sed orci tempor, ut facilisis ante aliquam. Suspendisse blandit sem quis mauris commodo fermentum. Maecenas laoreet tortor est, eget congue ex consequat ac. Vivamus quis odio convallis nulla auctor sodales non eu mauris. Donec pretium sodales mi eget consequat. Phasellus nec scelerisque massa, eu sodales libero. Integer feugiat tristique ex, a malesuada ligula blandit eu.
          Suspendisse eget ullamcorper nisi. Vivamus tincidunt, enim vitae vestibulum
          vehicula, lectus leo pulvinar mi, a ultricies eros ex eget nunc. Cras vulputate rutrum diam.</p>
        <div className='container'>
          <b>Enter the text below:</b>
          <TextForm Example="" />
        </div>  </center>
    </>
  );
};

export default App;


