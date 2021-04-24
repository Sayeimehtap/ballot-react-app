
import CardLineChart from "../../components/Cards/CardLineChart";
import CardBarChart from "../../components/Cards/CardBarChart";
import React from "react";
import Web3 from "web3";
import { ABI, contractAddress } from "../../components/Abi/Abi";
import CardBallotInfo from "../../components/Cards/CardBallotInfo";

class BallotInfo extends React.Component<any, any> {

	constructor(props: {}) {

		super(props);
		this.state = {
			id: this.props.match.params.id,
      proposal: "",
      ownerAddress: "",
      candidates: [],
		}
	}

  async componentDidMount() {
		try {
			const web3: Web3 = new Web3(window.ethereum);

			const contract = new web3.eth.Contract(ABI, contractAddress);

			const ballot = await contract.methods.getBallot(this.state.id).call();

      const ownerAddresses = await contract.methods.getAddresses().call();

				const candidates = [];
				for (let j = 0; j < ballot[1].length; j++) {
					candidates.push({
						id: ballot[1][j],
						name: ballot[2][j],
						vote: ballot[3][j]
					})
				}

			this.setState({
				proposal: ballot[0],
        candidates,
        ownerAddress: ownerAddresses[this.state.id],
			});
		} catch {

		}

	}

  render() {
    return (
      <>
        <main className="ballot-info-page">
          <section className="relative block h-500-px">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://www.freelogoservices.com/blog/wp-content/uploads/geometriccolor.jpg')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          width="400"
                          height="auto"
                          alt="..."
                          src={require("./../../assets/img/vote.png").default}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">

                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            21
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Day
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            10
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Hour
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            33
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Minute
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      { this.state.proposal }
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-4 text-blueGray-400 font-bold uppercase">
                      { this.state.ownerAddress}
                    </div>
                    <div className="block w-full overflow-x-auto">
  
                      <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                        <CardBallotInfo
                          id={this.state.id}
                          theme="light"
                          ownerAddress="0x212...1A312"
                          candidates={this.state.candidates}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap">
                      <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                        <CardLineChart />
                      </div>
                      <div className="w-full xl:w-12/12 px-4">
                        <CardBarChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );

  }

  
}

export default BallotInfo;
