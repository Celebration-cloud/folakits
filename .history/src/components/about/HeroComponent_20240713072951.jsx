import img1 from '/public/dark-blue-abstract-background-minimalist-design-vector.jpg'
import styles from './HeroComponent.module.css'
function HeroComponent() {
  // Inline CSS styles


  return (
    <div style={heroStyles.container}>
      <div style={heroStyles.mainText}>Be</div>
      <p style={heroStyles.subText}>
        Folakits is the WordPress theme that <br/> makes building website much easier.
      </p>
    </div>
  );
}

export default HeroComponent;
