import React, { Component } from 'react';
import { Row, Col, Select  } from 'antd';

class Footer extends Component {
	render() {
		const { Option } = Select;

		let footerCols = [
			{
				title: "Airbnb",
				list: [
					"Careers",
					"News",
					"Policies",
					"Help",
					"Diversity & Belonging"
				]
			},
			{
				title: "Discover",
				list: [
					"Trust & Safety",
					"เครดิตการเดินทาง",
					"Gift Cards",
					"Airbnb Citizen",
					"Business Travel",
					"Things To Do",
					"Airbnbmag"
				]
			},
			{
				title: "Hosting",
				list: [
					"Why Host",
					"Hospitality",
					"Responsible Hosting",
					"Community Center",
					"Host an Experience",
					"Open Homes"
				]
			},
			{
				title: "123",
				list: [
					"Terms",
					"Privacy",
					"Site Map"
				]
			}
		];
		let eleColumnFooter = footerCols.map((footerCol, index) => {
			return 	<Col key={ index } span={6}>
						<h4>{ footerCol.title }</h4>
						<ul style={{ padding: "0" }}>
							{ 
								footerCol.list.map((item, index) => (
									<li key={ index } className="liStyle">{item}</li>
								))
							}
						</ul>
					</Col>
		});

	    return (
	        <div className="Footer">
	        	<Row>
					{ eleColumnFooter }
				</Row>
				<div className="hrLine" style={{ margin: "16px 0" }}></div>
				<Row>
					<Col span={20}>
						© 2019 Airbnb, Inc. All rights reserved.
					</Col>
					<Col span={4}>
						<Select defaultValue="usd" style={{ width: 120 }}>
							<Option value="usd">USD</Option>
						</Select>
					</Col>
				</Row>
	        </div>
	    );
    }
}

export default Footer;
