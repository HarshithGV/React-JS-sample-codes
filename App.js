import React, {useState} from  'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
		  </p>
        
      </header>
    </div>
  );
}

function Test_Company() {
	function table() {
	fetch('https://admin.swifttapp.com/CompaniesController?company_name=san&indicator=MODE_2&csrfPreventionSalt=v8XvmMqjIla7wrgDlz9WMv1c5aMWCg').then(response => {
	response.json();
	
		
		
		
	} ).then(data => {
		data.results;
		
		
		
		
		
	});
	
	}
	
	
	
	
	
	
  return (
  <React.fragment>
  <section>
  <button>View Company Details</button>
  
  
  </section>
  
  </React.fragment>
  
  
  );
}

export default App;
