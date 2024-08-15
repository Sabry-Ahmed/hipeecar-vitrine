import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className='Lmain-container'>
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
 
       <span className='Ltext-6'>
        MENTIONS LEGALES
        <br />
      </span>
      <div className='Lgroup-2'>
        <span className='Ltext-7'>
          Informations générales
          <br />
          <br />
          <br />
          <br />
        </span>
        <span className='Ltst'>
          Propriété intellectuelle
          <br />
          <br />
        </span>
      </div>
      <div className='Lgroup-3'>
        <span className='Ltext-9'>
          Le site hipeecar.fr est la propriété de la société HIPEECAR.
          <br />
          La S.A.S.U. HIPEECAR, est la société éditrice du site hipeecar.fr, au
          capital de 3.000 €, immatriculée au registre du commerce et des
          sociétés de NANTERRE sous le numéro 832 048 425 R.C.S, dont le siège
          social se situe au :<br />
          <br />
          11, avenue Marc Sangnier92390 Villeneuve la Garenne.
          <br />
          <br />
          En utilisant le site, l'utilisateur reconnaît avoir pris connaissance
          de ses conditions et les avoir acceptées. Celles-ci pourront être
          modifiées à tout moment et sans préavis par la société HIPEECAR.
          <br />
          <br />
          Par ailleurs, l'utilisateur reconnaît avoir été informé que le présent
          site est accessible 24 heures sur 24 et 7 jours sur 7, à l'exception
          des cas de force majeure, difficultés informatiques, difficultés liées
          à la structure des réseaux de communication ou difficultés techniques.
          Pour des raisons de maintenance, la société HIPEECAR pourra
          interrompre le site et s'efforcera d'en avertir préalablement les
          utilisateurs.
          <br />
          <br />
          L'hébergement du site est assuré par :<br />
          o2switch222-224 Boulevard Gustave Flaubert63000 Clermont-FerrandSiret
          510 909 80700024
        </span>
        <span className='Ltext-a'>
          Tout le contenu du site hipeecar.fr, ainsi que les graphismes, images,
          textes, logos et leur mise en forme sont la propriété exclusive de la
          société HIPEECAR à l'exception des marques, logos ou contenus
          appartenant à d'autres sociétés partenaires.
          <br />
          Toute représentation totale ou partielle de ce site par quelque
          procédé que ce soit, sans l'autorisation expresse de la société
          HIPEECAR est interdite et constituerait une contrefaçon sanctionnée
          par les articles L.335-2 et suivants du code de la propriété
          intellectuelle.
          <br />
          Toute reproduction totale ou partielle des marques ou logos de la
          société HIPEECAR ou de ses partenaires, effectuée à partir des
          éléments du site sans l'autorisation expresse de la société HIPEECAR
          ou du propriétaire du logo ou de la marque est prohibée selon le code
          de la propriété intellectuelle.
        </span>
        <span className='Ltext-b'>
          Attribution de juridiction
          <br />
          <br />
          <br />
        </span>
        <span className='Ltext-c'>
          En cas de litige entre la société HIPEECAR et tout tiers du fait du
          présent site, la juridiction compétente sera celle dont ressort le
          siège social de la société HIPEECAR.
        </span>
      </div>
      <div className='Lwrapper'>
        <div className='Lwrapper-2'>
          <span className='Ltext-d'>A propos de Hipeecar</span>
          <span className='Ltext-e'>Informations</span>
          <span className='Ltext-f'>Aide</span>
          <div className='Lpic-2' />
          <span className='Ltext-10'>Qui sommes-nous ?</span>
          <span className='Ltext-11'>C.G.U.</span>
          <span className='Ltext-12'>FAQ</span>
          <span className='Ltext-13'>Comment ça marche ?</span>
          <span className='Ltext-14'>Mentions légales</span>
          <span className='Ltext-15'>Contact</span>
          <span className='Ltext-16'>Blog Hipeecar</span>
          <span className='Ltext-17'>C.G.U. MangoPay</span>
        </div>
      </div>
    </div>
  );
}
