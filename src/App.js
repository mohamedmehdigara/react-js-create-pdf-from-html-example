import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 
import PdfComponent from './components/PdfComponent';
import DataComponent from './components/DataComponent';
 
function App() {
  return (
    <div className="App">
<DataComponent/>
<PdfComponent/>
    </div>
  );
}
 
export default App;