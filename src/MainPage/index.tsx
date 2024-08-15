import React from 'react';
import './index.css';
import video1 from "../MainPage/hipeecar.mp4";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className='main-container'>
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



      <div className='box-2'>
        <span className='text-6'>Comment ça fonctionne ?</span>
        <div className='img-2'>
          <span className='text-7'>Le vendeur va : </span>
          <span className='text-8'>Et l’agent va ensuite :</span>
          <div className='pic' />
          <span className='text-9'>Trouver des acheteurs</span>
          <span className='text-a'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel
            molestie elit ut justo.
          </span>
        </div>
        <div className='pic-2'>
          <div className='img-3' />
          <span className='text-b'>Mettre en relation</span>
          <span className='text-c'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel
            molestie elit ut justo.
          </span>
        </div>
        <div className='pic-3'>
          <div className='img-4' />
          <span className='text-d'>Le véhicule est vendu !</span>
          <span className='text-e'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel
            molestie elit ut justo.
          </span>
        </div>
        <div className='img-5'>
          <div className='img-6' />
          <span className='text-f'>Créer son compte</span>
          <span className='text-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel
            molestie elit ut justo.
          </span>
        </div>
        <div className='pic-4'>
          <span className='text-11'>Remplir son annonce</span>
          <span className='text-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel
            molestie elit ut justo.
          </span>
          <div className='img-7' />
          <div className='pic-5' />
        </div>
        <div className='pic-6'>
          <div className='img-8' />
          <span className='text-13'>Fixer sa commission </span>
          <span className='text-14'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel
            molestie elit ut justo.
          </span>
        </div>
      </div>
      <Link to="Guide" style={{ textDecoration: "none", color: "inherit" }}>
      <div className='section'>
        <span className='text-15'>En savoir plus</span>
      </div>
      </Link>
      <div className='section-2'>
        <div className='group-2'>
          <div className='section-3'>
            <span className='text-16'>A propos de Hipeecar</span>
            <span className='text-17'>Informations</span>
            <span className='text-18'>Aide</span>
            <div className='pic-7' />
            <span className='text-19'>Qui sommes-nous ?</span>
            <span className='text-1a'>C.G.U.</span>
            <span className='text-1b'>FAQ</span>
            <span className='text-1c'>Comment ça marche ?</span>
            <span className='text-1d'>Mentions légales</span>
            <span className='text-1e'>Contact</span>
            <span className='text-1f'>Blog Hipeecar</span>
            <span className='text-20'>C.G.U. MangoPay</span>
          </div>
        </div>
        <div className='img-9' />
        <div className='pic-8' />
      </div>
      <div className='group-3'>
        <div className='pic-9'>
          <div className='pic-a' />
          <div className='group-4'>
            <div className='img-a' />
            <div className='img-b' />
            <div className='img-c' />
          </div>
          <div className='wrapper-2'>
            <span className='text-21'>
              La première plateforme de vente automobile par recommandation.
            </span>
            <div className='img-d' />
            <div className='pic-b' />
            <div className='pic-c' />
          </div>
          <div className='wrapper-3'>
            <span className='text-22'>
              Hipeecar permet aux particuliers et professionnels de revendre
              leur voiture par la puissance de son réseau.
            </span>
            <div className='box-3'>
              <div className='img-e' />
              <div className='pic-d' />
            </div>
            <div className='pic-e' />
            <div className='img-f' />
            <span className='text-23'>+5000 agents dans toute la France !</span>
            <div className='pic-f' />
            <div className='pic-10' />
          <Link to="/agents" style={{ textDecoration: "none", color: "inherit" }}>
            <div className='box-4'>
              <span className='text-24'>
                Je veux devenir un agent Hipeecar
              </span>
            </div>
          </Link>
            <div className='img-10' />
          <Link to="/Vendeur" style={{ textDecoration: "none", color: "inherit" }}>
            
            <div className='section-4'>
              <span className='text-25'>Je veux vendre mon véhicule </span>
            </div>
          </Link>

            <div className='img-11'>
              <span className='text-26'>
                +300€ 🎉
                <br />
                <br />
              </span>
            </div>


            
            <div className='img-99'>
              <span className='text-27'>+500€ 🎉</span>
            </div>


            
            <div className='img-12' />
            <div className='pic-12'>
              <div className='img-13' />
            </div>
            <div className='img-14' />
            <div className='pic-13'>
              <div className='img-15' />
            </div>
            <div className='pic-14'>
              <div className='img-16' />
              <div className='pic-15' />
              <div className='img-17' />
              <div className='pic-16' />
              <div className='img-18' />
              <div className='img-19' />
            </div>
            <div className='pic-17' />
            <div className='img-1a' />
            <div className='img-1b' />
            <div className='pic-18' />
            <div className='pic-19' />
            <div className='img-1c' />
            <div className='img-1d' />
            <div className='pic-1a' />
            <div className='pic-1b' />
            <div className='img-1e' />
            <div className='img-1f'>
              <div className='group-5'>
                <div className='img-20' />
                <div className='pic-1c' />
              </div>
              <div className='pic-1d' />
            </div>
            <div className='img-21'>
              <div className='img-22' />
            </div>
            <div className='img-23' />
          </div>
        </div>
        <div className='group-6'>
          <div className='img-24'>
            <div className='pic-1e' />
          </div>
          <div className='pic-1f'>
            <div className='img-25'>
              <div className='img-26' />
            </div>
          </div>
        </div>
        <div className='pic-20'>
          <div className='img-27' />
        </div>
        <div className='img-28' />
        <div className='img-29'>
          <div className='pic-21' />
        </div>
        <div className='pic-22' />
        <div className='img-2a' />
      </div>
      <div className='img-2b'>
        <div className='img-2c' />
        <div className='pic-23' />
      </div>
      <div className='box-5'>
        <div className='box-6'>
          <div className='group-7'>
            <div className='wrapper-4'>
              <div className='img-2d' />
              <span className='text-28'>Steven RENET</span>
              <span className='text-29'>Agent particulier</span>
            </div>
            <span className='text-2a'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
              rutrum dignissim arcu vitae scelerisque pharetra massa egestas.
              Mattis faucibus feugiat in eu sit egestas amet. Ullamcorper et
              morbi.
            </span>
          </div>
          <div className='group-8'>
            <div className='section-5'>
              <div className='img-2e' />
              <span className='text-2b'>Privat MICKAEL</span>
              <span className='text-2c'>Agent professionnel</span>
            </div>
            <span className='text-2d'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
              rutrum dignissim arcu vitae scelerisque pharetra massa egestas.
              Mattis faucibus feugiat in eu sit egestas amet. Ullamcorper et
              morbi.
            </span>
          </div>
        </div>
        <div className='group-9'>
          <span className='text-2e'>
            Hipeecar, c’est quoi au juste ?<br />
          </span>
          <span className='text-2f'>
            Hipeecar offre aux particuliers et aux professionnels un espace où
            ils peuvent mettre leurs voitures à la disposition d’une communauté
            d’agents qui se chargeront de trouver un acheteur aux voitures en
            contrepartie d’une commission.
            <br />
            <br />
          </span>
          <div className='group-a'>
            <div className='img-2f' />
            <div className='pic-24' />
            <div className='pic-25' />
          </div>
          <div className='box-7'>
            <span className='text-30'>Tout le monde y gagne !</span>
            <span className='text-31'>La puissance du réseau.</span>
            <span className='text-32'>Qualité assurée.</span>
          </div>
          <div className='section-6'>
            <span className='text-33'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel
              molestie elit ut justo.
            </span>
            <span className='text-34'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel
              molestie elit ut justo.
            </span>
            <span className='text-35'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel
              molestie elit ut justo.
            </span>
          </div>
          <div className='group-b'>
          <Link to="/agents" style={{ textDecoration: "none", color: "inherit" }}>
            <div className='box-8'>
              <span className='text-36'>
                Je veux devenir un agent Hipeecar
              </span>
            </div>
          </Link>
          <Link to="/agents" style={{ textDecoration: "none", color: "inherit" }}>
            <div className='box-9'>
              <span className='text-37'>Je veux vendre mon véhicule </span>
            </div>
          </Link>

          </div>
        </div>
        <div className='img-30' />
        <span className='text-38'>Le concept en vidéo !</span>


      </div>
      <div className = 'img-31 '>
        <video src={video1} width="100%" height="100%" controls="controls"  />
        </div>
    </div>
  );
}
