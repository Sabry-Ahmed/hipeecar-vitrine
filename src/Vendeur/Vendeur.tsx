import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import RegisterForm from './RegisterForm';


export default function Main() {
  const scrollToSection = () => {
    const element = document.getElementById("Vsection-3");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='Vmain-container'>
            <div className='wrapper'>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div className='img'></div>
        </Link>
          <div className='box'>
            <div className='textcliclk'>
              <span className='text'>
                <Link to="/Origines" style={{ textDecoration: "none", color: "inherit" }}>
                  Qui sommes-nous
                </Link>
              </span>
            </div>
            <div className='textcliclk'>
              <span className='text-2'>
                <Link to="/Agents" style={{ textDecoration: "none", color: "inherit" }}>
                  Devenir Agent
                </Link>
              </span>
            </div>
            <div className='textcliclk'>
              <span className='text-3'>
                <Link to="/Vendeur" style={{ textDecoration: "none", color: "inherit" }}>
                  Vendre mon véhicule
                </Link>
              </span>
            </div>
            <div className='textcliclk'>
              <span className='text-4'>
                <Link to="/Guide" style={{ textDecoration: "none", color: "inherit" }}>
                  Comment ça marche ?
                </Link>
              </span>
            </div>
            <div className='group'>
              <span className='text-5'>
                <Link to="/Origines" style={{ textDecoration: "none", color: "inherit" }}>
                  CONNEXION
                </Link>
              </span>
            </div>
          </div>
        </div>




      <div className='Vbox'>
        <div className='Vbox-2'>
          <div className='Vbox-3'>
            <span className='Vtext-6'>
              Une nouvelle manière de vendre votre voiture
              <br />
            </span>
            <span className='Vtext-7'>
              <br />
            </span>
          </div>
          <span className='Vtext-8'>
            Procédure longue, risques d’arnaques, démarche administrative
            fatigante… vendre sa voiture n’est pas de tout repos pour certains.
            Hipeecar vous aide à trouver un acheteur à votre véhicule en mettant
            à votre disposition des milliers d'agents dont le seul objectif est
            de vendre votre automobile en contrepartie d’une commission.
            <br />
            <br />
          </span>
          <div className='Vwrapper-2'>
          
          <Link to="/Vendeur#Vwrapper-3" onClick={scrollToSection}  style={{ textDecoration: "none", color: "inherit" }}>
            <div className='Vwrapper-3'>
            <span className='Vtext-9'>
                Je m’inscris ici
              </span>
            </div>
            </Link>
          </div>
          <span className='Vtext-a'>
            Gratuit et en quelques clics seulement
            <br />
          </span>
          <div className='Vimg-3' />
          <span className='Vtext-b'>
            Une communauté de plus de 5 000 agents
            <br />
          </span>
          <span className='Vtext-c'>
            Des milliers d’agents de vente automobile sélectionnés
            minutieusement vont s’occuper de vendre votre voiture au meilleur
            prix. En fonction de votre zone géographique, les agents seront
            notifiés de l’ajout de votre annonce.
            <br />
          </span>
          <div className='Vimg-4'>
            <div className='Vimg-5' />
          </div>
          <span className='Vtext-d'>
            Tout le monde est gagnant
            <br />
          </span>
          <span className='Vtext-e'>
            En utilisant les services d’Hipeecar, vous offrez aux agents de
            faire de la vente d’automobiles un métier à plein temps. En
            contrepartie, les agents sont là pour vous éviter cette lourde
            tâche.
            <br />
          </span>
          <div className='Vpic' />
          <span className='Vtext-f'>
            Pour les particuliers mais aussi pour les professionnels
            <br />
          </span>
          <span className='Vtext-10'>
            Vous êtes un professionnel de la vente automobile ? Vous pouvez à
            travers Hipeecar, doubler vos ventes en peu de temps grâce à la
            vente par recommandation.
            <br />
          </span>
          <div className='Vpic-2' />
          <span className='Vtext-11'>1</span>
          <span className='Vtext-12'>Créez votre compte</span>
          <div className='Vimg-6' />
          <span className='Vtext-13'>
            Mettez votre véhicule en ligne
            <br />
          </span>
          <span className='Vtext-14'>2</span>
          <div className='Vimg-7' />
          <span className='Vtext-15'>
            Fixez le montant de la voiture et de la commission
            <br />
          </span>
          <span className='Vtext-16'>3</span>
          <div className='Vimg-8' />
          <span className='Vtext-17'>4</span>
          <span className='Vtext-18'>
            Recevez votre argent
            <br />
          </span>
        </div>
        <div className='Vpic-3' />
        <div className='Vsection-2' />
      </div>
      <div>
          <RegisterForm />
        </div>

     <div className='Vsection-7'>
        <div className='Vwrapper-a'>
          <span className='Vtext-2a'>A propos de Hipeecar</span>
          <span className='Vtext-2b'>Informations</span>
          <span className='Vtext-2c'>Aide</span>
          <div className='Vimg-a' />
          <span className='Vtext-2d'>Qui sommes-nous ?</span>
          <span className='Vtext-2e'>C.G.U.</span>
          <span className='Vtext-2f'>FAQ</span>
          <span className='Vtext-30'>Comment ça marche ?</span>
          <span className='Vtext-31'>Mentions légales</span>
          <span className='Vtext-32'>Contact</span>
          <span className='Vtext-33'>Blog Hipeecar</span>
          <span className='Vtext-34'>C.G.U. MangoPay</span>
        </div>
      </div>
    </div>
  );
}
