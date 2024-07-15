import Categories from '../../components/caterory/Categeries'
import FirstContent from '../../components/FirstContent/FirstContent';
import Nav from '../../components/nav/Nav'
import styles from './Folakits.module.css'
function Folakits() {
  return (
    <div>
      <Nav />
      <div style={{ position: "absolute" }}>
        <FirstContent />
      </div>
    </div>
  );
}

export default Folakits
