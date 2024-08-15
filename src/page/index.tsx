import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className='ABAmain-container'>
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

      <div className='ABAbox'>
        <div className='ABAgroup'>
          <span className='ABAtext-6'>
            Qui sommes-nous ?<br />
          </span>
          <span className='ABAtext-7'>
            Vous ne serez plus seul à vouloir vendre votre voiture
            <br />
            <br />
          </span>
          <span className='ABAtext-8'>
            En devenant agent, vous aurez à votre disposition un garage en ligne
            rien que pour vous. Cet espace vous permettra de présenter les
            voitures de votre choix. Vous serez également notifié des meilleures
            occasions. Le garage en ligne vous permettra également de suivre vos
            ventes et de répondre aux messages des potentiels acheteurs.
            <br />
            <br />
          </span>
          <span className='ABAtext-9'>
            Une communauté d’agents pour vendre votre voiture
            <br />
          </span>
          <span className='ABAtext-a'>
            Notre communauté rassemble des agents motivés, répartis dans toute
            la France et venant de tous horizons. Ils peuvent être étudiants à
            la recherche d’argents de poche, employés à la quête d’un complément
            de revenu ou entrepreneurs qui souhaitent faire de la vente
            automobile leur métier… Leur seul objectif c’est de vendre votre
            voiture !<br />
            <br />
          </span>
          <span className='ABAtext-b'>
            Disponible dans toutes les régions de France
            <br />
          </span>
          <span className='ABAtext-c'>
            Notre solution est présente dans toutes les régions de France et
            offre aux personnes souhaitant vendre leur véhicule une nouvelle
            alternative, plus efficace pour trouver des acheteurs à leurs
            automobiles grâce à la recommandation faite par nos agents à leurs
            proches.
            <br />
            <br />
            <br />
          </span>
          <div className='ABAwrapper-2'>
          <Link to="/Agents" style={{ textDecoration: "none", color: "inherit" }}>
            <div className='ABAbox-2'>
              <div className='ABAwrapper-3'>
                <span className='ABAtext-d'>Je veux devenir agent.</span>
              </div>
            </div>
            </Link>

          <Link to="/Vendeur" style={{ textDecoration: "none", color: "inherit" }}>
            <div className='ABAsection-3'>
              <div className='ABAwrapper-4'>
                <span className='ABAtext-e'>Je veux vendre ma voiture</span>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className='ABAsection-4'>
          <div className='ABAgroup-2' />
          <div className='ABAimg-2' />
        </div>
        <div className='ABAbox-3'>
          <div className='ABAgroup-3'>
            <span className='ABAtext-f'>A propos de Hipeecar</span>
            <span className='ABAtext-10'>Informations</span>
            <span className='ABAtext-11'>Aide</span>
            <div className='ABApic' />
            <span className='ABAtext-12'>Qui sommes-nous ?</span>
            <span className='ABAtext-13'>C.G.U.</span>
            <span className='ABAtext-14'>FAQ</span>
            <span className='ABAtext-15'>Comment ça marche ?</span>
            <span className='ABAtext-16'>Mentions légales</span>
            <span className='ABAtext-17'>Contact</span>
            <span className='ABAtext-18'>Blog Hipeecar</span>
            <span className='ABAtext-19'>C.G.U. MangoPay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
