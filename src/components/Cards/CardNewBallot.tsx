import React from "react";
import Web3 from "web3";
import { ABI } from "../Abi/Abi";

// components

export default function CardNewBallot() {

  const [inputList, setInputList] = React.useState([{ candidate: "" }]);
  const [proposal, setProposal] = React.useState('');

  // handle input change

  const contractAddress = "0x4bf2934cc05788e44D966e9F7177D65A079de97F";

  const handleInputChange = (e: any, index: any) => {
    const {value } = e.target;
    const list = [...inputList];
    list[index].candidate = value;
    setInputList(list);

  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { candidate: "" }]);
  };


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">New Ballot</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={async () => {
                const candidates = inputList.map(item => item.candidate);
                const web3 = new Web3(window.ethereum);

                web3.eth.handleRevert = true;
  
                const contract = new web3.eth.Contract(ABI, contractAddress);
      
                await contract.methods.createBallot(proposal, candidates).send({from: '0x700137B458995ef4A0CeAA22E03E56A8D8eF0814'});

                alert('Kaydedildi');
              }}
            >
              Create
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Proposal
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Proposal Description
                  </label>
                  <textarea
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="What color dress should I wear today? (example)"
                    rows={4}
                    value={proposal}
                    onChange={e => setProposal(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap">

              {inputList.map((x, i) => {
                return (

                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Option {i + 1}
                      </label>
                      <div className="w-full lg:w-12/12 ">
                        <div className="relative w-full mb-3">
                          <input
                            key={i}
                            type="text"
                            name="candidate"
                            value={x.candidate}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Red"
                            onChange={e => handleInputChange(e, i)}

                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 ">
                        <div className="relative w-full mb-3">
                          {inputList.length !== 1 && <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                            onClick={() => handleRemoveClick(i)}><i className="fas fa-trash"></i></button>}
                          {inputList.length - 1 === i && <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                            onClick={handleAddClick}><i className="fas fa-plus"></i></button>}

                        </div>
                      </div>
                    </div>
                  </div>


                );
              })}

            </div>

          </form>
        </div>
      </div>
    </>
  );
}
