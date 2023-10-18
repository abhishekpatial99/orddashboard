import React from 'react'
import Piechart from './Piechart'
import img from './favi.jpg'

export default function Home() {
  return (
    <>
    {/* <!-- Class Wrapper Start --> */}
 <div class="class--wrapper">
    {/* <!-- Side Bar Start --> */}
    
    <div class="sidebar">
        <div class="logo">
          <i class="fab fa-dashcube"></i>
          <span><h2>Dashboard</h2></span>
           
              
        </div>
        <ul class="main">
            <li class="first">
                <a href="#">
                    <i class="fab fa-dashcube"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#">
                <i class="fa-brands fa-alipay" />
                    <span class="text">Product</span>
                    <i class="fa-solid fa-greater-than"></i>
                </a>
                
            </li> 
            <li>
                <a href="#">
                <i class="fa-regular fa-circle-user"></i>
                    <span class="text">Customer</span>
                    <i class="fa-solid fa-greater-than"></i>
                </a>
            </li> 
            <li>
                <a href="#">
                <i class="fa-brands fa-slack"></i>
                    <span class="text">Income</span>
                    <i class="fa-solid fa-greater-than"></i>
                </a>
            </li>
            <li>
                <a href="#">
                <i class="fa-solid fa-pen-to-square"></i>
                    <span class="text">Promote</span>
                    <i class="fa-solid fa-greater-than"></i>
                </a>
            </li>
            <li>
                <a href="#">
                <i class="fa-brands fa-hire-a-helper"></i>
                    <span class="text">Help</span>
                    <i class="fa-solid fa-greater-than"></i>
                </a>
            </li>
            <li class="last">
                <a href="#">
                    <img src={img} alt=""/> 
                    <span class="text">
                        <h5>Abhi</h5>
                        <h6>Project Manager</h6>
                    </span>
                   <i class="fab fa-dropbox"></i>
                
                </a>
            </li>
        </ul>
    </div>
{/* <!-- Side Bar End -->
 
<!-- NAvbar Content start --> */}
    <div  class="nav-content">
        <div class="nav-wrap">
            <div class="nav-title">
                <span>Hello User</span>
            </div>
            <div class="user-info">
                <div class="searchbox">
                <i class="fas fa-search"></i>
                <input type="search" name="" id="" placeholder="search"/>
            </div>
        </div>
    </div>
    
    {/* <!-- NAvbar Content end -->

<!-- Head content start --> */}
<div class="head-content">
    <div class="head-wrap">
        <div class="payment">
            <div class="head">
                <div class="amount">
                   <div class="set">
                    <img src={img} alt=""/>
                   </div>
                   <div class="set1">
                    <h5>Earnig</h5>
                    <h4>$198k</h4>
                    <h6><i class="fa-solid fa-arrow-up"></i><span class="green">37.8%</span>this month</h6>
                   </div>
                </div>  
            </div>
        </div>
        <div class="payment">
            <div class="head">
                <div class="amount">
                   <div class="set">
                    <img src={img} alt=""/>
                   </div>
                   <div class="set1">
                    <h5>Order</h5>
                    <h4>$2.4k</h4>
                    <h6><i class="fa-solid fa-arrow-down"></i><span class="red">2%</span>this month</h6>
                   </div>
                </div>  
            </div>
        </div>
        <div class="payment">
            <div class="head">
                <div class="amount">
                   <div class="set">
                    <img src={img} alt=""/>
                   </div>
                   <div class="set1">
                    <h5>Balance</h5>
                    <h4>$2.4k</h4>
                    <h6><i class="fa-solid fa-arrow-down"></i><span class="red">2%</span>this month</h6>
                   </div>
                </div>  
            </div>
        </div>
        <div class="payment">
            <div class="head">
                <div class="amount">
                   <div class="set">
                    <img src={img} alt=""/>
                   </div>
                   <div class="set1">
                    <h5>Total Sales</h5>
                    <h4>$89k</h4>
                    <h6><i class="fa-solid fa-arrow-up"></i><span class="green">11%</span>this month</h6>
                   </div>
                </div>  
            </div>
        </div>
    </div>
</div>
    {/* <!--Head content end  -->

    <!-- Chart Start --> */}
    <div class="chart">
        
        <div class="chart--main">
        <div class="chart-content">
            <div>
                <h3>Overview</h3>
                <h6>Monthly Earning</h6>
            </div>  
            <div class="chart--1">
                <select>
                    <option>
                        Quantity
                    </option>
                </select>
            </div>
        </div>
        <section class="bar-chart">
            <div class="skill">
                <div class="graph" style={{height: "85%"}}>
                    <div class="percentage">85%</div>
                </div>
                <div class="name"><h6>Jan</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "92%"}}>
                    <div class="percentage">92%</div>
                </div>
                <div class="name"><h6>Feb</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "80%"}}>
                    <div class="percentage">80%</div>
                </div>
                <div class="name"><h6>Mar</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "75%"}}>
                    <div class="percentage">75%</div>
                </div>
                <div class="name"><h6>Apr</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "80%"}}>
                    <div class="percentage">50%</div>
                </div>
                <div class="name"><h6>May</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "80%"}}>
                    <div class="percentage">50%</div>
                </div>
                <div class="name"><h6>Jun</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "85%"}}>
                    <div class="percentage">98%</div>
                </div>
                <div class="name"><h6>Jul</h6></div>
            </div>
            <div class="skill">
                <div class="graph-1" style={{height: "92%"}}>
                    <div class="percentage">92%</div>
                </div>
                <div class="name"><h6>Aug</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "80%"}}>
                    <div class="percentage">80%</div>
                </div>
                <div class="name"><h6>Sept</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "75%"}}>
                    <div class="percentage">75%</div>
                </div>
                <div class="name"><h6>Oct</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "80%"}}>
                    <div class="percentage">50%</div>
                </div>
                <div class="name"><h6>Nov</h6></div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "80%"}}>
                    <div class="percentage">50%</div>
                </div>
                <div class="name"><h6>Dec</h6></div>
            </div>
        </section>
    </div>
    <div class="chart-cus">
        <h3>Customers</h3>
        <h6>Customers that buy products</h6>
        <Piechart/>
    </div>
    
    </div>
    {/* <!--Chart End  -->

    <!-- Table start  --> */}
    <div class="table">
        <div class="table-space">
            <div>
        <h3 class="main-t"> Product sell</h3>
    </div>
    <div class="table-opt-1">
        <div class="table-opt">
                <i class="fas fa-search"></i>
                <input type="search" name="" id="" placeholder="search"/>
                <select>
                    <option>Last 30 days</option></select>
                </div>
            </div> 
            </div>

            <div class="table-cont">
                <table class="table-1">
                    <thead class="space--table">
                        <tr>
                           <th>Product Name</th>
                           <th>Stock</th>
                           <th>Price</th>
                           <th>Total Sales</th>
                        </tr>
                    </thead>
                    <tbody class="space--table">
                        <tr>
                            <td class="favi">
                                <img src={img} alt=""/>
                                <div>
                                <h5>Abstract 3D</h5>
                                <h6>Lorem ipsum dolor sit amet.</h6>
                            </div>
                        </td>
                        <td>32 in stock</td>
                        <td><h5>$ 45.66</h5></td>
                        <td>20</td>
                    </tr>
                    <tr>
                    <td class="favi">
                    <img src={img} alt=""/>
                    <div>
                    <h5>Abstract 3D</h5>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                </div>
                </td>
                    <td>32 in stock</td>
                    <td><h5>$ 45.66</h5></td>
                    <td>20</td>
                </tr>
                <tr>
                    <td class="favi">
                    <img src={img} alt="" />
                <div>
                    <h5>Abstract 3D</h5>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                </div>
                    </td>
                    <td>32 in stock</td>
                    <td><h5>$ 45.66</h5></td>
                    <td>20</td>
                </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
{/*  Table end  */}
</div>

{/*  Class Wrapper End  */}
    
    
    
    
    
    </>
  )
}
