import React from "react";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div>
          <h4>Technology</h4>

          <div>
            <ul>
              <li>
                <a href="/" className="li_item">
                  Binance DEX
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  BEP8 DEX
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Binance Smart Chain
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Bridge
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Staking
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Token Management
                </a>
              </li>
              <li>
                <a
                  href="https://trustwallet.com/"
                  rel="noopener"
                  className="li_item"
                >
                  Trust Wallet
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4>Developers</h4>

          <div>
            <ul>
              <li>
                <a href="/" className="li_item">
                  GitHub
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  SDKs
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Docs
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Fusible Chain Wallet
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Integration
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Fusible Bridge
                </a>
              </li>
              <li>
                <a
                  href="https://trustwallet.com/"
                  rel="noopener"
                  className="li_item"
                >
                  BSC Accelerator Fund
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4>Explore</h4>

          <div>
            <ul>
              <li>
                <a href="/" className="li_item">
                  Fiat on Ramp
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Exchange Support
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Projects
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Wallets
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Btokens
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Proof of Assets
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4>Community</h4>

          <div>
            <ul>
              <li>
                <a href="/" className="li_item">
                  Activity
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Events/News
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Hackathon
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Martian Program
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  BSC 1st Anniversary
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4>About</h4>

          <div>
            <ul>
              <li>
                <a href="/" className="li_item">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Media Kit
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Bug Bounty
                </a>
              </li>
              <li>
                <a href="/" className="li_item">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className="footerDesc">
        <p>© 2018 - 2021 Fusible.io. All rights reserved.</p>

        <div>
          <FaTwitter size={24} color="#3F4859" />
          <FaTelegram
            size={24}
            color="#3F4859"
            style={{ marginLeft: "15px" }}
          />
          <FaDiscord size={24} color="#3F4859" style={{ marginLeft: "15px" }} />
          <IoMdChatbubbles
            size={24}
            color="#3F4859"
            style={{ marginLeft: "15px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
