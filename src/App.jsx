import React from 'react';
import Header from "./components/Header/Header"
import RedStripe from './components/RedStripe/RedStripe';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import Employees from './utils/employees.json';


function App () {

 const [employees] = React.useState(Employees);
 const [searchTerm, setSearchTerm] = React.useState('');

 const handleInputChange = event => {
   setSearchTerm(event.target.value);
 }

 const searchEmployees = employees.filter(result => {
   const searchName = result.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
   const searchPhone = result.phone.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
   const searchEmail = result.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
   return searchName || searchPhone || searchEmail;
 })

  return (
    <div>
      <Header />
      <RedStripe />
      <Search onSearch={handleInputChange} search={searchTerm} />
      <Table employees = {searchEmployees}/>
    </div>
  );
}

export default App;
