import React from "react";
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div>
      <div className={styles.sidebar}>
        <div class="logo-details">
          <i class="bx bxl-c-plus-plus"></i>
          <span class="logo_name">Loan</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="/dashboard" class="active">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/dashboard-profile">
              <i class="bx bx-box"></i>
              <span class="links_name">Profile</span>
            </a>
          </li>
          <li>
            <a href="/request">
              <i class="bx bx-list-ul"></i>
              <span class="links_name">Request Loan</span>
            </a>
          </li>
          <li>
            <a href="/pending">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="links_name">Pending Loans</span>
            </a>
          </li>
          <li>
            <a href="/pay">
              <i class="bx bx-coin-stack"></i>
              <span class="links_name">Pay</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <i class="bx bx-book-alt"></i>
              <span class="links_name">Setiings</span>
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i class="bx bx-user"></i>
              <span class="links_name">Team</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-message"></i>
              <span class="links_name">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-heart"></i>
              <span class="links_name">Favrorites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
              <span class="links_name">Setting</span>
            </a>
          </li> */}
          <li class="log_out">
            <a href="#">
              <i class="bx bx-log-out"></i>
              <span class="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..."></input>
            <i class="bx bx-search"></i>
          </div>
          <div class="profile-details">
            <image src="images/profile.jpg" alt=""></image>
            <span class="admin_name">Prem Shahi</span>
            <i class="bx bx-chevron-down"></i>
          </div>
        </nav>

        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Loan Pending</div>
                <div class="number">40,876</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bx-cart-alt cart"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Paid Already</div>
                <div class="number">38,876</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bxs-cart-add cart two"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Next Due Date</div>
                <div class="number">12/5/2022</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bx-cart cart three"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Tenure Left</div>
                <div class="number">2 years</div>
                <div class="indicator">
                  <i class="bx bx-down-arrow-alt down"></i>
                  <span class="text">Down From Today</span>
                </div>
              </div>
              <i class="bx bxs-cart-download cart four"></i>
            </div>
          </div>

          <div class="sales-boxes">
            <div class="recent-sales box">
              <div class="title">Payment History</div>
              <div class="sales-details">
                <ul class="details">
                  <li class="topic">Date</li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                </ul>
                <ul class="details">
                  <li class="topic">Customer</li>
                  <li>
                    <a href="#">Alex Doe</a>
                  </li>
                  <li>
                    <a href="#">David Mart</a>
                  </li>
                  <li>
                    <a href="#">Roe Parter</a>
                  </li>
                  <li>
                    <a href="#">Diana Penty</a>
                  </li>
                  <li>
                    <a href="#">Martin Paw</a>
                  </li>
                  <li>
                    <a href="#">Doe Alex</a>
                  </li>
                  <li>
                    <a href="#">Aiana Lexa</a>
                  </li>
                  <li>
                    <a href="#">Rexel Mags</a>
                  </li>
                  <li>
                    <a href="#">Tiana Loths</a>
                  </li>
                </ul>
                <ul class="details">
                  <li class="topic">Sales</li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Returned</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Returned</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                </ul>
                <ul class="details">
                  <li class="topic">Total</li>
                  <li>
                    <a href="#">$204.98</a>
                  </li>
                  <li>
                    <a href="#">$24.55</a>
                  </li>
                  <li>
                    <a href="#">$25.88</a>
                  </li>
                  <li>
                    <a href="#">$170.66</a>
                  </li>
                  <li>
                    <a href="#">$56.56</a>
                  </li>
                  <li>
                    <a href="#">$44.95</a>
                  </li>
                  <li>
                    <a href="#">$67.33</a>
                  </li>
                  <li>
                    <a href="#">$23.53</a>
                  </li>
                  <li>
                    <a href="#">$46.52</a>
                  </li>
                </ul>
              </div>
              <div class="button">
                <a href="#">See All</a>
              </div>
            </div>
            <div class="top-sales box">
              <div class="title">Top Seling Product</div>
              <ul class="top-sales-details">
                <li>
                  <a href="#">
                    <image src="images/sunglasses.jpg" alt=""></image>
                    <span class="product">Vuitton Sunglasses</span>
                  </a>
                  <span class="price">$1107</span>
                </li>
                <li>
                  <a href="#">
                    <image src="images/jeans.jpg" alt=""></image>
                    <span class="product">Hourglass Jeans </span>
                  </a>
                  <span class="price">$1567</span>
                </li>
                <li>
                  <a href="#">
                    <image src="images/nike.jpg" alt=""></image>
                    <span class="product">Nike Sport Shoe</span>
                  </a>
                  <span class="price">$1234</span>
                </li>
                <li>
                  <a href="#">
                    <image src="images/scarves.jpg" alt=""></image>
                    <span class="product">Hermes Silk Scarves.</span>
                  </a>
                  <span class="price">$2312</span>
                </li>
                <li>
                  <a href="#">
                    <image src="images/blueBag.jpg" alt=""></image>
                    <span class="product">Succi Ladies Bag</span>
                  </a>
                  <span class="price">$1456</span>
                </li>
                <li>
                  <a href="#">
                    <image src="images/bag.jpg" alt=""></image>
                    <span class="product">Gucci Womens's Bags</span>
                  </a>
                  <span class="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    <image src="images/addidas.jpg" alt=""></image>
                    <span class="product">Addidas Running Shoe</span>
                  </a>
                  <span class="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    <image src="images/shirt.jpg" alt=""></image>
                    <span class="product">Bilack Wear's Shirt</span>
                  </a>
                  <span class="price">$1245</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
