import React from "react";
import Web3 from "web3";
import { ABI, contractAddress } from "../../components/Abi/Abi";

// components

import CardBallot from "../../components/Cards/CardBallot";
import CardStats from "../../components/Cards/CardStats";


class Ballots extends React.Component<any, any> {

	constructor(props: {}) {

		super(props);
		this.state = {
			ballots: [],
			length: 0,
		}
	}

	async componentDidMount() {
		try {
			const web3: Web3 = new Web3(window.ethereum);

			const contract = new web3.eth.Contract(ABI, contractAddress);

			const length = await contract.methods.allBallotsLength().call();

			const ownerAddresses = await contract.methods.getAddresses().call();

			const ballots: any[] = [];

			for (let index = 0; index < length; index++) {
				const ballot: any[] = await contract.methods.getBallot(index).call();

				const subOwnerAddress = `${String(ownerAddresses[index]).slice(0, 6)}...${String(ownerAddresses[index]).slice(-5)}`;

				const candidates = [];
				for (let j = 0; j < ballot[1].length; j++) {
					candidates.push({
						id: ballot[1][j],
						name: ballot[2][j],
						vote: ballot[3][j]
					})
				}
				ballots.push(
					<div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
						<CardBallot
							id={index}
							key={index}
							theme="dark"
							ownerAddress={subOwnerAddress}
							proposal={ballot[0]}
							candidates={candidates}
							 />
					</div>
				);
			}

			this.setState({
				ballots,
				length
			});
		} catch {

		}

	}

	render() {


		return (
			<>
				<div className="relative md:pt-16 pb-16 pt-16">
					<div className="px-4 md:px-10 mx-auto w-full">
						<div>
							{/* Card stats */}
							<div className="flex flex-wrap">
								<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
									<CardStats
										key={1}
										statSubtitle="BALLOTS NUMBER"
										statTitle={this.state.length.toString()}
										statArrow="up"
										statPercent="3.48"
										statPercentColor="text-emerald-500"
										statDescripiron="Since last month"
										statIconName="far fa-chart-bar"
										statIconColor="bg-red-500"
									/>
								</div>
								<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
									<CardStats
										key={2}
										statSubtitle="Blockchain Number"
										statTitle="1"
										statArrow="up"
										statPercent="12"
										statPercentColor="text-emerald-500"
										statDescripiron="Since last month"
										statIconName="fas fa-chart-pie"
										statIconColor="bg-lightBlue-500"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap my-12">
					{
						this.state.ballots
					}
				</div>
			</>
		);
	}
}

export default Ballots;
