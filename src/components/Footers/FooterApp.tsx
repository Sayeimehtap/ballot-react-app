import React from "react";

class FooterApp extends React.Component<any, any> {
  // @ts-ignore
  public render() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-end justify-center">
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nr-footer-admin"
                    className="text-blueGray-500 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                Copyright © {new Date().getFullYear()}{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nr-footer-admin"
                    className="text-blueGray-500 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    Ballot App
                  </a>
                </li>
        
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
}

export default FooterApp;