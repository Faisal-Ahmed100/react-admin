import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import TableList from '../../components/table/Table';
import Img from '../../img/profile_pic-removebg-preview.png'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
       <div className="top">
         <div className="left">
           <div className="editBtn">Edit</div>
           <h1 className="title">Information</h1>
           <div className="item">
             <img src={Img} alt="avater" className="itemImg" />
             <div className="detailes">
               <h1 className="itemTitle">Faisal Ahmad</h1>
               <div className="detaileItem">
                 <span className="itemKey">Email: </span>
                 <span className="itemValue">princepavel100@gmail.com</span>
               </div>
               <div className="detaileItem">
                 <span className="itemKey">Phone: </span>
                 <span className="itemValue">01729462003</span>
               </div>
               <div className="detaileItem">
                 <span className="itemKey">Address: </span>
                 <span className="itemValue">Puthia Rajshahi Bangladesh</span>
               </div>
               <div className="detaileItem">
                 <span className="itemKey">Country: </span>
                 <span className="itemValue">Bangladesh</span>
               </div>
             </div>
           </div>
         </div>
         <div className="right">
           <Chart aspect={3/1} title='User Spending (last 6 month)'/>
         </div>
       </div>
       <div className="bottom">
       <h1 className="title">Last Transections</h1>
         <TableList />
       </div>
      </div>
    </div>
  )
}

export default Single