
import Sidebar from '../../global/sideBar';
import CabinetBoard from '../../../pages/cabinetBoard';
import './index.css';

const CabinetLayout = () => {
    return (
        <div className='cabinet_layout_container'>
      <Sidebar/>     
         <main className="main_container">
         <CabinetBoard/>
         </main>
        </div>
    )
}
export default CabinetLayout;