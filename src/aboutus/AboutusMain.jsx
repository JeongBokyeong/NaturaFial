import AboutUsImg from './AboutUs.png';
import AboutUsMainStyle from './AboutUsMain.module.css';

function AboutusMain() {
    return (
        <img src={AboutUsImg} alt="About Us" className={AboutUsMainStyle.AboutUsImg} />
    )
}

export default AboutusMain