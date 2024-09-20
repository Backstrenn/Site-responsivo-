import "../styles/utility.css";
import "../styles/header.css";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import "../styles/hero.css";
import "../styles/solution.css";
import Card from "../components/Card";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (showMobileMenu) {
            body.style.overflow = "hidden";
            body.style.position = "fixed";
            body.style.width = "100%";
        } else {
            body.style.overflow = "auto";
            body.style.position = "static";
        }

        return () => {
            body.style.overflow = "auto";
            body.style.position = "static";
        };
    }, [showMobileMenu]);

    // Função para criar quadrados animados
    useEffect(() => {
        const container = document.getElementById('square-container');

        function createSquare() {
            const square = document.createElement('div');
            square.classList.add('square');

            // Posiciona o quadrado aleatoriamente na tela
            square.style.left = `${Math.random() * 100}vw`;
            square.style.bottom = `-50px`; // Começa fora da tela, na parte inferior

            container!.appendChild(square);

            // Remove o quadrado após a animação
            square.addEventListener('animationend', () => {
                square.remove();
            });
        }

        // Cria um quadrado a cada 500ms
        const interval = setInterval(createSquare, 500);
        return () => clearInterval(interval); 
    }, []);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo FOOF" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricieng">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo pc" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo" />
                <div className="container content">
                    <span className="desktop-only"><p></p></span>
                    <h1>
                        Somos a SEEDSIS, uma empresa nacional de tecnologia da informação!
                    </h1>
                    <p>
                        Focada em auxiliar o setor privado com uma solução incrível para laboratórios de sementes. Atuamos em todos os estados brasileiros e também no Paraguai com mais de 12.000 usuários dentro da nossa solução. Nos últimos anos conquistamos de forma muito séria e comprometida a autoridade no setor de análise de sementes.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id="solution">
                <div className="container content">
                    <h2>Soluções da Empresa</h2>
                    <p>
                        Somos especializados em análise de sementes, utilizando inteligência artificial para tornar o processo 100% mais eficiente e rápido. Nossa tecnologia avançada proporciona precisão e agilidade, permitindo realizar em pouco tempo o trabalho que antes levava o dia inteiro.
                    </p>
                    <div className="card-container even-columns">
                        <Card
                            title="Coopavel"
                            description="A Seedsis automatizou o processo de análise de sementes, tornando-o mais rápido e preciso. Essa inovação melhorou a qualidade de nossos produtos, oferecendo análises detalhadas e confiáveis."
                        />

                        <Card
                            title="Coamo"
                            description="Com a Seedsis, aumentamos a eficiência da análise de sementes. O sistema foi implementado rapidamente e elevou nossa precisão, melhorando a comunicação e o fluxo de trabalho."
                        />

                        <Card
                            title="Copacol"
                            description="A solução da Seedsis otimizou nossos processos, garantindo análises de sementes seguras e precisas. Agora, contamos com um sistema confiável, que traz agilidade e suporte de qualidade."
                        />
                    </div>
                </div>
            </section>

            {/* Contêiner para os quadrados animados */}
            <div id="square-container"></div>

            <style>
                {`
                #square-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none; /* Permite interação com outros elementos */
                }

                .square {
                    position: absolute;
                    width: 50px; /* Tamanho do quadrado */
                    height: 50px;
                    background-color: #5BC124; /* Cor do quadrado */
                    opacity: 0.8;
                    animation: fly 3s forwards; /* Tempo da animação */
                }

                @keyframes fly {
                    0% {
                        transform: translateY(0); /* Começa na posição inicial */
                    }
                    100% {
                        transform: translateY(-100vh); /* Move para fora da tela */
                        opacity: 0; /* Esmaece ao voar */
                    }
                }
                `}
            </style>
        </>
    );
}
