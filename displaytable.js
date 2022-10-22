import React from "react"

class displaytable extends React.Component {
	
	
	constructor(props) {
		super(props)
		this.state = {
			list:[]
		}
		
		this.callAPI = this.callAPI.bind(this)
		this.callAPI();
	}
	
	callAPI() {
		//fetch data from API
		fetch("https://admin.swifttapp.com/CompaniesController?company_name=san&indicator=MODE_2&csrfPreventionSalt=v8XvmMqjIla7wrgDlz9WMv1c5aMWCg").then(
		(response) => response.json()
		).then((data => {
			cosole.log(data)
		})
	}
	
	rende() {
		return {
			<div>
			
			<div>
			
		}
	}
}
export default displayable;