
import { useNavigate } from 'react-router-dom';
import ParticlesCompo from '../../assets/ParticlesCompo';
import GithubSVG from "../../assets/GithubSVG";
import LinkedinSVG from "../../assets/LinkedinSVG";
import LogoSVG from "../../assets/LogoSVG";
import development from '../../assets/development.svg'
import dsa from '../../assets/data-structure.svg'

import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
   
    const navigate = useNavigate()
    const availableFeature = [
        {
            name: 'DSA Staff',
            slug: '/dsa',
            active: true,
            imgUrl: dsa
        },
        {
            name: 'Development Staff',
            slug: '/dev',
            active: true,
            imgUrl: development
        }
    ];

    return (
        <>
            <div className="back">
                <div id="particles-js">
                <ParticlesCompo/>
                </div>
                
                <div className="box title">
                    <div className="container-fluid solid">
                        <ul className="links">
                            <li onClick={() => window.open("https://google.com", "_blank")}>
                                <i>
                                    <GithubSVG />
                                </i>
                            </li>
                            <li onClick={() => window.open("https://google.com", "_blank")}>
                                <i>
                                    <LinkedinSVG />
                                </i>
                            </li>
                        </ul>
                    </div>
                </div>
                <h1 className="main-title center">
                    <div className="logo">
                        <LogoSVG />
                    </div>
                    All In One <strong style={{ color: "var(--home-color)" }}><br></br>TECH</strong>
                </h1>
                <div>
                    <p className="description-title center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae sunt delectus ipsum maxime corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur voluptatibus veritatis, sed consectetur vel nesciunt nemo aut vero error.</p>
                </div>
                <ul className="list-inline mt-5">
                    {availableFeature.map((item) =>
                        item.active ? (
                            <li key={item.name} className="list-inline-item ml-5 mr-5 mb-2" style={{ cursor: "pointer" }} onClick={() => navigate(item.slug)}>
                                <div className="card" style={{ width: "14rem", backgroundColor: "transparent" }}>
                                    <img className="card-img-top img algo-image" src={item.imgUrl} alt="Card image cap" />
                                    <div style={{ backgroundColor: "transparent" }} className="card-body">
                                        <h3 className=" card-text algo-name">{item.name}</h3>
                                    </div>
                                </div>
                            </li>
                        ) : null)}
                </ul>
            </div>
        </>
    )
}

export default Home;
