import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import Wiget from '../../components/wigets/Wiget';
import Featurd from '../../components/featurd/Featurd';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="wigets">
        <Wiget type="user" />
        <Wiget type="order" />
        <Wiget type="earnings" />
        <Wiget type="balance" />
      </div>
      <div className="charts">
        <Featurd />
        <Chart title='Last 6 month (Revenue)' aspect={2/1}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">latest Transections</div>
        <Table />
      </div>


      </div>
      
      </div>
  )
}

export default Home