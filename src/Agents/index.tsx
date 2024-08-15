import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import RegisterForm from './RegisterForm';

export default function Main() {
  return (
    <div className='Amain-container'>
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








      <div className='Asection-2'>
        <div className='Abox'>
          <div className='Asection-3'>
            <span className='Atext-6'>Devenez vendeur automobile <br />avec  0€ d’apport !</span>
            <span className='Atext-7'>
              
            </span>
          </div>
          <span className='Atext-8'>
            Hipeecar vous donne la possibilité de gagner un complément de revenu
            et de devenir vendeur de voitures gratuitement et en quelques clics
            seulement. En devenant agent Hipeecar, vous aurez à votre
            disposition un garage en ligne qui vous permettra de partager
            simplement vos véhicules à vos proches et ainsi obtenir de belles
            commissions.
            <br />
          </span>
          
          <div className='Asection-4'>
          <Link to="/Vendeur#Vwrapper-3"  style={{ textDecoration: "none", color: "inherit" }}>

            <div className='Awrapper-3'>
              <span className='Atext-9'>Je m’inscris ici </span>
              <div className='Aimg' />
            </div>
          </Link>
          </div>
          <div className='Apic-2' />
          <span className='Atext-a'>
            Des milliers de nouvelles voitures chaque jour
            <br />
          </span>
          <span className='Atext-b'>
            Chaque jour, de nouvelles voitures sont ajoutées dans vos garages en
            ligne. Les véhicules sont minutieusement contrôlés par nos experts
            afin de vous assurer les bonnes affaires à recommander à vos
            contacts.
            <br />
          </span>
          <div className='Apic-3' />
          <span className='Atext-c'>
            Gagner de l’argent à votre rythme
            <br />
            <br />
          </span>
          <span className='Atext-d'>
            Que vous soyez un étudiant à la recherche d’argents de poche, un
            employé à la quête d’un complément de revenu ou un entrepreneur qui
            souhaite faire de la vente automobile son métier… Hipeecar met à
            votre disposition tout un écosystème pour vous permettre de gagner
            de l’argent à votre rythme.
            <br />
          </span>
          <span className='Atext-e'>
            Gratuit et en quelques clics seulement
            <br />
          </span>
          <div className='Apic-4' />
          <span className='Atext-f'>1</span>
          <span className='Atext-10'>Créez votre compte</span>
          <div className='Aimg-2' />
          <span className='Atext-11'>
            Recommandez les voitures de votre choix
            <br />
          </span>
          <span className='Atext-12'>2</span>
          <div className='Apic-5' />
          <span className='Atext-13'>3</span>
          <span className='Atext-14'>
            Recevez vos commissions
            <br />
            <br />
          </span>
        </div>
        <div className='Aimg-3'>
          <div className='Apic-6'>
            <div className='Apic-7'>
            <div className='Apic-8'>
            <div className='Abox-2'>
                  <span className='Atext-15'>
                    Hey ! Regarde la voiture que j’ai trouvé sur
                  </span>
                  <span className='Atext-16'> www.hipeecar.fr</span>
                </div>
              </div>
              <div className='Awrapper-4'>
                <div className='Asection-5'>
                  <span className='Atext-17'>
                    Bien sur. Tu peux toutes les retrouver
                    <br />
                    sur mon e-garage :
                  </span>
                  <span className='Atext-18'> www.hipeecar.fr/id/1897</span>
                </div>
              </div>
            </div>
            <div className='Agroup' />
            <span className='Atext-19'>
              Magnifique ! T'en as d'autres à me montrer ?<br />
            </span>
            <div className='Awrapper-5' />
            <span className='Atext-1a'>
              Je cherche ce modèle là.
              <br />
            </span>
            <div className='Apic-9' />
          </div>
        </div>
        <div className='Asection-6' />
      </div>

      


          <div>
          <RegisterForm />
        </div>


  



      <div className='Abox-5'>
        <div className='Asection-b'>
          <span className='Atext-2c'>A propos de Hipeecar</span>
          <span className='Atext-2d'>Informations</span>
          <span className='Atext-2e'>Aide</span>
          <div className='Apic-a' />
          <span className='Atext-2f'>Qui sommes-nous ?</span>
          <span className='Atext-30'>C.G.U.</span>
          <span className='Atext-31'>FAQ</span>
          <span className='Atext-32'>Comment ça marche ?</span>
          <span className='Atext-33'>Mentions légales</span>
          <span className='Atext-34'>Contact</span>
          <span className='Atext-35'>Blog Hipeecar</span>
          <span className='Atext-36'>C.G.U. MangoPay</span>
        </div>
      </div>
    </div>
  );
}
