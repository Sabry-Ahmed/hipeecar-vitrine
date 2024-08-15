import React from 'react';
import './tst.css';
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className='Fmain-container'>
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


      
      <div className='Fsection-2'>
        <div className='Fpic-2' />
        <div className='Fwrapper-2'>
          <div className='Fimg' />
          <div className='Fpic-3' />
          <div className='Fimg-2' />
          <span className='Ftext-6'>Comment ça marche pour les agents ?</span>
          <div className='Fpic-4' />
        </div>
        <div className='Fpic-5' />
      </div>
      <div className='Fgroup'>
        <div className='Fgroup-2'>
          <div className='Fwrapper-3'>
            <span className='Ftext-7'>
              Un agent Hipeecar est un apporteur d'affaires qui fait appel à son
              réseau personnel et professionnel pour recommander et vendre des
              voitures afin de gagner des commissions. Il peut également
              utiliser ses techniques de vente et ses propres outils pour
              réaliser des ventes.
              <br />
            </span>
            <div className='Fpic-6' />
            <span className='Ftext-8'>
              Qu’est-ce qu’un agent Hipeecar ?<br />
            </span>
          </div>
        </div>
        <div className='Fwrapper-4'>
          <div className='Fgroup-3'>
            <span className='Ftext-9'>
              En devenant agent, vous aurez à votre disposition un garage en
              ligne rien que pour vous. Cet espace vous permettra de présenter
              les voitures de votre choix. Vous serez également notifié des
              meilleures occasions. Le garage en ligne vous permettra également
              de suivre vos ventes et de répondre aux messages des potentiels
              acheteurs.
              <br />
              <br />
            </span>
            <div className='Fimg-3' />
            <span className='Ftext-a'>
              Qu’est-ce que mon e-garage personnel ?
            </span>
          </div>
        </div>



      </div>
      <div className='Fgroup-4'>
        <div className='Fsection-3'>
          <div className='Fwrapper-5'>
            <span className='Ftext-b'>
              Étudiants, employés, retraités, entrepreneurs… Tout le monde peut
              devenir agent. Hipeecar offre à chacun(e) la possibilité de gagner
              sa vie, en fonction de ses besoins et à son rythme.
              <br />
            </span>
            <div className='Fimg-4' />
            <span className='Ftext-c'>
              Qui peut devenir agent Hipeecar ?<br />
              <br />
            </span>
          </div>
        </div>
        <div className='Fbox-2'>
          <div className='Fgroup-5'>
            <div className='Fsection-4'>
              <span className='Ftext-d'>
                C’est très simple, vous devez créer gratuitement un compte en
                vous inscrivant. Une fois le compte validé, vous pouvez
                consulter votre garage en ligne, le personnaliser et y ajouter
                les voitures que vous souhaitez vendre. À chaque véhicule
                recommandé, vous obtiendrez une commission supérieure à 300
                euros, en fonction de la valeur du véhicule.
                <br />
              </span>
              <div className='Fpic-7' />
              <span className='Ftext-e'>
                Mais comment ça fonctionne ?<br />
                <br />
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='Fbox-3'>
        <div className='Fimg-5' />
        <div className='Fwrapper-6'>
          <span className='Ftext-f'>Et pour les vendeurs alors ?</span>
          <span className='Ftext-10'>
            Contrairement aux autres sites d'annonces automobiles, nous mettons
            à votre disposition des agents qui ont un seul objectif : vendre
            votre voiture, de ce fait l'annonce n'est plus passive mais devient
            active.
            <br />
            <br />
            <br />
          </span>
        </div>
      </div>
      <div className='Fsection-5'>
        <div className='Fwrapper-7'>
          <div className='Fgroup-6'>
            <span className='Ftext-11'>
              Tout ce que vous avez à faire c’est de créer un compte pour
              accéder à votre espace personnel pour déposer une annonce.
              Renseignez les informations relatives à votre véhicule, choisissez
              le prix de vente et la commission que vous souhaitez attribuer à
              l’agent qui vous trouvera un acheteur.
              <br />
              <br />
            </span>
            <div className='Fimg-6' />
            <span className='Ftext-12'>
              Comment mettre une voiture en vente ?<br />
            </span>
          </div>
        </div>
        <div className='Fwrapper-8'>
          <div className='Fbox-4'>
            <span className='Ftext-13'>
              Dès qu'un client potentiel s'intéresse à votre véhicule, il
              remplit une fiche contact que vous retrouverez dans votre espace
              personnel dans la partie « Mes clients », ce qui vous permettra de
              le contacter directement.
              <br />
            </span>
            <span className='Ftext-14'>
              Comment savoir que mon véhicule intéresse quelqu’un ?<br />
            </span>
            <div className='Fimg-7' />
          </div>
        </div>
      </div>
      <div className='Fwrapper-9'>
        <div className='Fwrapper-a'>
          <div className='Fbox-5'>
            <span className='Ftext-15'>
              Votre annonce restera en ligne jusqu'à la vente de votre véhicule.
              Par contre, vous devrez la renouveler tous les deux mois
              gratuitement en cliquant simplement sur « renouveler mon annonce
              », ce qui prolongera sa publication de deux mois. <br />
              Dans le cas contraire, elle sera automatiquement supprimée.
              <br />
              <br />
            </span>
            <span className='Ftext-16'>
              Quelle est la durée de validité de mon annonce ?<br />
            </span>
            <div className='Fpic-8' />
          </div>
        </div>
        <div className='Fgroup-7'>
          <div className='Fwrapper-b'>
            <div className='Fsection-6'>
              <span className='Ftext-17'>
                Afin de vendre votre véhicule rapidement, nous vous conseillons
                de choisir un prix en cohérence avec le marché.
                <br />
                <br />
              </span>
              <span className='Ftext-18'>
                Comment déterminer le prix de vente de mon véhicule ?<br />
                <br />
                <br />
                <br />
              </span>
              <div className='Fimg-8' />
            </div>
          </div>
        </div>
      </div>
      <div className='Fbox-6'>
        <div className='Fbox-7'>
          <div className='Fwrapper-c'>
            <span className='Ftext-19'>
              Vous êtes libre de choisir le montant de la commission. Toutefois,
              n'oubliez pas qu'elle devra être raisonnable afin de motiver les
              agents. Il est préférable de ne pas descendre en dessous de 3 % du
              prix de vente initial du véhicule.
              <br />
            </span>
            <span className='Ftext-1a'>
              Comment estimer la commission que je vais attribuer à l'agent qui
              me trouvera un client ?<br />
            </span>
            <div className='Fimg-9' />
          </div>
        </div>
        <div className='Fsection-7'>
          <div className='Fbox-8'>
            <div className='Fbox-9'>
              <div className='Fbox-a'>
                <span className='Ftext-1b'>
                  Contrairement aux sites d'annonces traditionnelles où votre
                  annonce est passive (attente du client), chez Hipeecar nous
                  mettons en place une stratégie active en utilisant notre
                  réseau d'agents afin de déclencher la vente de votre véhicule,
                  notamment grâce à la recommandation faite par nos agents
                  auprès de leurs réseaux personnel ou professionnel. Cette
                  stratégie engendre des frais de fonctionnement, amortis en
                  partie grâce aux annonces.
                  <br />
                  <br />
                </span>
                <div className='Fpic-9' />
                <span className='Ftext-1c'>
                  Pourquoi le dépôt d'annonce est-il payant ?<br />
                  <br />
                  <br />
                  <br />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Fbox-b'>
        <span className='Ftext-1d'>Inscrivez-vous ici !</span>
        <div className='Fsection-8'>
        <Link to="/Agents" style={{ textDecoration: "none", color: "inherit" }}>
          <div className='Fwrapper-d'>
            <div className='Fgroup-8'>
              <span className='Ftext-1e'>Je veux devenir agent.</span>
            </div>
          </div>
          </Link>
          <Link to="/Vendeur" style={{ textDecoration: "none", color: "inherit" }}>

          <div className='Fwrapper-e'>
            <div className='Fbox-c'>
              <span className='Ftext-1f'>Je veux vendre ma voiture</span>
            </div>
          </div>
          </Link>

        </div>
      </div>
      <div className='Fgroup-9'>
        <div className='Fwrapper-f'>
          <span className='Ftext-20'>A propos de Hipeecar</span>
          <span className='Ftext-21'>Informations</span>
          <span className='Ftext-22'>Aide</span>
          <div className='Fimg-a' />
          <span className='Ftext-23'>Qui sommes-nous ?</span>
          <span className='Ftext-24'>C.G.U.</span>
          <span className='Ftext-25'>FAQ</span>
          <span className='Ftext-26'>Comment ça marche ?</span>
          <span className='Ftext-27'>Mentions légales</span>
          <span className='Ftext-28'>Contact</span>
          <span className='Ftext-29'>Blog Hipeecar</span>
          <span className='Ftext-2a'>C.G.U. MangoPay</span>
        </div>
      </div>
    </div>
  );
}
