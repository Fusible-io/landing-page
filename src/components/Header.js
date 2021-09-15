import React from "react";
import dAppIcon from "./assets/dAppIcon.png";
import bscIcon from "./assets/bscIcon.png";
import bridege from "./assets/bridge.png";
import buyIcon from "./assets/buyIcon.png";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";
import arrow from "./assets/arrow.png";
import Amesten from "./assets/Amesten.png";
import MoonWhale from "./assets/Moonwhale.png";
import x21 from "./assets/x21.png";
import Magnus from "./assets/MagnusCapital.png";
import buildImage from "./assets/buildImage.png";

const Header = () => {
  return (
    <div className="container">
      <div className="headerContainer">
        <h1>Explore the Fusible Ecosystem</h1>
        <p>
          Enjoy the most innovative NFT and DeFi dApps. Fast, decentralized,
          affordable and secure.
        </p>

        <div className="iconsDiv">
          <div>
            <img src={dAppIcon} alt="Dapp" width={40} height={40} />
            <p>Explore the dApps</p>
          </div>

          <div>
            <img src={bridege} alt="Dapp" width={40} height={40} />
            <p>Bridge</p>
          </div>

          <div>
            <img src={bscIcon} alt="Dapp" width={40} height={40} />
            <p>Build on BSC</p>
          </div>

          <div>
            <img src={bscIcon} alt="Dapp" width={40} height={40} />
            <p>FUSIIES</p>
          </div>

          <div>
            <img src={buyIcon} alt="Dapp" width={40} height={32} />
            <p>Buy FUSII</p>
          </div>
        </div>

        <div className="blogCards">
          <div className="cards">
            <div className="card_div"></div>
            <h4>Celebrate to the BSC 1st Anniversary</h4>
            <p>
              Be a part of BSC’s celebrations, and check out the most exciting
              journey in the Blockchain uni... 2021-08-26
            </p>
          </div>

          <div className="cards">
            <div className="card_div"></div>
            <h4>Celebrate to the BSC 1st Anniversary</h4>
            <p>
              Be a part of BSC’s celebrations, and check out the most exciting
              journey in the Blockchain uni... 2021-08-26
            </p>
          </div>

          <div className="cards">
            <div className="card_div"></div>
            <h4>Celebrate to the BSC 1st Anniversary</h4>
            <p>
              Be a part of BSC’s celebrations, and check out the most exciting
              journey in the Blockchain uni... 2021-08-26
            </p>
          </div>
        </div>

        <div>
          <h1>Join the BSC DeFi Ecosystem</h1>
          <p>
            Participating in DeFi projects is easy. Set up your account in 3
            steps and unlock more features.
          </p>

          <div className="defiCardContainer">
            <div className="defiCards">
              <div className="head">Step 1</div>
              <img
                src={step1}
                alt="Step1"
                width={128}
                height={120}
                style={{ display: "block", margin: "0 auto" }}
              />
              <div>
                <h4>Download a Wallet</h4>

                <p>
                  Supports Binance Extension Wallet, Trust Wallet, MetaMask,
                  Math Wallet, MEW wallet, imToken and other wallets.
                </p>

                <div className="button">
                  <button>Download</button>
                </div>
              </div>
            </div>

            <div>
              <img src={arrow} alt="arrow" />
            </div>

            <div className="defiCards">
              <div className="head">Step 2</div>
              <img
                src={step2}
                alt="Step1"
                width={229}
                height={111}
                style={{ display: "block", margin: "0 auto" }}
              />
              <div>
                <h4>Download a Wallet</h4>

                <p>
                  Supports Binance Extension Wallet, Trust Wallet, MetaMask,
                  Math Wallet, MEW wallet, imToken and other wallets.
                </p>

                <div className="button">
                  <button>Download</button>
                </div>
              </div>
            </div>

            <div>
              <img src={arrow} alt="arrow" />
            </div>

            <div className="defiCards">
              <div className="head">Step 3</div>
              <img
                src={step3}
                alt="Step3"
                width={195}
                height={113}
                style={{ display: "block", margin: "0 auto" }}
              />
              <div>
                <h4>Download a Wallet</h4>

                <p>
                  Supports Binance Extension Wallet, Trust Wallet, MetaMask,
                  Math Wallet, MEW wallet, imToken and other wallets.
                </p>

                <div className="button">
                  <button>Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1>Build on Fusible</h1>
          <p>Learn how to build your dApps on top of Fusible Smart Chain.</p>

          <div className="bscContainer">
            <div>
              <div className="containerData1">
                <h4>Build dApps</h4>

                <ul>
                  <li>Learn the fundamentals</li>
                  <li>Start experimenting codes</li>
                  <li>Tutorial</li>
                  <li>Developer resources</li>
                </ul>
              </div>

              <div className="containerData2">
                <h4>Most Valuable Builders (MVB)</h4>

                <ul>
                  <li>BSC accelerator fund</li>
                  <li>BUIDL reward leaderboard</li>
                </ul>
              </div>
            </div>
            <img src={buildImage} alt="BSC" />
            <div>
              <div className="containerData1">
                <h4>Integrate Existing Solutions</h4>

                <ul>
                  <li>Ecosystem</li>
                  <li>BEW Integration</li>
                  <li>Fusible Bridge Integration</li>
                </ul>
              </div>

              <div className="containerData2">
                <h4>Join the Developer Community</h4>

                <ul>
                  <li>Developer discord</li>
                  <li>Developer telegram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1>Backed by Investors</h1>

          <div className="investorImage">
            <div className="investorCard">
              <img src={Amesten} alt="amester" />
            </div>

            <div className="investorCard2">
              <img src={MoonWhale} alt="MoonWhale" />
            </div>

            <div className="investorCard">
              <img src={x21} alt="x21" />
            </div>

            <div className="investorCard2">
              <img src={Magnus} alt="Magnus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
