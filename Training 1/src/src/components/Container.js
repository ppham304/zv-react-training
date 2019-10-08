import React, { Component } from 'react';
import FormContainer from './FormContainer'
import Information from './Information'
import AirbnbService from './AirbnbService'
import { Row, Col, Icon  } from 'antd';

class Container extends Component {

	constructor(props) {
		super(props);

		this.state = {
			infors: [
				{
					name: "Alyssa",
					nationality: "United States",
					avatar: "https://a0.muscache.com/im/pictures/user/ae06c174-c8e0-4fac-a87f-3c7af35eed6c.jpg?aki_policy=large",
					image: "https://a0.muscache.com/im/pictures/13114457/65b2fd17_original.jpg",
					description: "Staying at Sky's place was an AWESOME experience. It's a great location, perfect size, and very artsy."
				},
				{
					name: "Alyssa",
					nationality: "United States",
					avatar: "https://a0.muscache.com/im/pictures/user/ae06c174-c8e0-4fac-a87f-3c7af35eed6c.jpg?aki_policy=large",
					image: "https://a0.muscache.com/im/pictures/13114457/65b2fd17_original.jpg",
					description: "Staying at Sky's place was an AWESOME experience. It's a great location, perfect size, and very artsy."
				},
				{
					name: "Alyssa",
					nationality: "United States",
					avatar: "https://a0.muscache.com/im/pictures/user/ae06c174-c8e0-4fac-a87f-3c7af35eed6c.jpg?aki_policy=large",
					image: "https://a0.muscache.com/im/pictures/13114457/65b2fd17_original.jpg",
					description: "Staying at Sky's place was an AWESOME experience. It's a great location, perfect size, and very artsy."
				}
			],
			services: [
				{
					icon: "heart",
					service: "24/7 customer support",
					description: "Day or night, we’re here for you. Talk to our support team from anywhere in the world, any hour of day."
				},
				{
					icon: "home",
					service: "Global hospitality standards",
					description: "Guests review their hosts after each stay. All hosts must maintain a minimum rating and our hospitality standards to be on Airbnb."
				},
				{
					icon: "star",
					service: "5-star hosts",
					description: "From fresh-pressed sheets to tips on where to get the best brunch, our hosts are full of local hospitality."
				}
			],
			bookedList: [
				{
					image: "https://a0.muscache.com/im/pictures/812e040f-6f6f-4cae-ad67-66c050b57c1f.jpg",
					type: "Entire House",
					place: "Joshua Tree",
					name: "The Joshua Tree House",
					price: 250,
					numRate: 465,
					isSuperHost: true
				},
				{
					image: "https://a0.muscache.com/im/pictures/812e040f-6f6f-4cae-ad67-66c050b57c1f.jpg",
					type: "Dome house",
					place: "Aptos",
					name: "Mushroom Dome Cabin: #1  on airbnb in the world",
					price: 130,
					numRate: 1382,
					isSuperHost: true
				},
				{
					image: "https://a0.muscache.com/im/pictures/812e040f-6f6f-4cae-ad67-66c050b57c1f.jpg",
					type: "Earth house",
					place: "Orondo ",
					name: "Underground Hygge",
					price: 300,
					numRate: 542,
					isSuperHost: true
				},
				{
					image: "https://a0.muscache.com/im/pictures/812e040f-6f6f-4cae-ad67-66c050b57c1f.jpg",
					type: "Entire House",
					place: "Joshua Tree",
					name: "The Joshua Tree House",
					price: 400,
					numRate: 253,
					isSuperHost: false
				}
			]
		};
	}

	render() {
		let { infors, services, bookedList } = this.state;
		let eleListInfor = infors.map((infor, index) => {
			return 	<Col span={8} key={ index }>
        				<Information 
        					name={ infor.name }
        					nationality={ infor.nationality }
        					avatar={ infor.avatar }
        					image={ infor.image }
        					description={ infor.description }
        					isInfor={ true }
        				/>
        			</Col>
		});
		let eleListService = services.map((service, index) => {
			return 	<Col span={8} key={ index }>
        				<AirbnbService
        					icon={ service.icon }
        					service={ service.service }
        					description={ service.description }
        				/>
        			</Col>
		});
		let eleListBooked = bookedList.map((booked, index) => {
			return 	<Col span={6} key={ index }>
        				<Information 
        					image={ booked.image }
        					type={ booked.type }
        					place={ booked.place }
        					name={ booked.name }
        					price={ booked.price }
        					numRate={ booked.numRate }
        					isSuperHost={ booked.isSuperHost }
        					isInfor={ false }
        				/>
        			</Col>
		});

	    return (
	        <div className="Container">
	        	<div>
		        	<Row>
		        		<Col span={24}>
		        			<h1>Book unique homes and experiences</h1>
		        		</Col>
		        	</Row>
		        	<Row>
		        		<Col span={24}>
		        			<FormContainer />
		        		</Col>
		        	</Row>
	        	</div>
	        	<div style={{ margin: "0 40px" }}>
	        		<div>
			        	<div>
			        		<h1>What guests are saying about homes in the United States</h1>
			        		<h3>
			        			<Icon type="star" style={{ margin: "0 10px" }} />
			        			United States homes were rated 4.8 out of 5 stars with 41,500,000+ reviews
			        		</h3>
			        	</div>
			        	<div>
			        		<Row gutter={16}>
			        			{ eleListInfor }
			        		</Row>
			        	</div>
		        	</div>
		        	<div>
		        		<h1>Traveling with Airbnb</h1>
		        		<div className="hrLine"></div>
		        		<div>
			        		<Row gutter={16}>
			        			{ eleListService }
			        		</Row>
			        	</div>
			        	<div className="hrLine"></div>
		        	</div>
		        	<div>
			        	<div>
			        		<h1>Just booked in the United States</h1>
			        	</div>
			        	<div>
			        		<Row gutter={16}>
			        			{ eleListBooked }
			        		</Row>
			        	</div>
		        	</div>
	        	</div>
	        	<div>
	        		
	        	</div>
	        </div>
	    );
    }
}

export default Container;
