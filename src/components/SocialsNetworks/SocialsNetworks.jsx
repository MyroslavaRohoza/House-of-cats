import React from 'react'
import css from './socialsNetworks.module.css';
import instagramImage from '../../img/instagram.png';
import facebookImage from '../../img/facebook.png';
import youtubeImage from '../../img/youtube.png';
import tiktokImage from '../../img/tiktok.png';
import githubImage from '../../img/github.png';
import twitterImage from '../../img/twitter.png';



const SocialsNetworks = () => {
    return (
        <div className={css.socials}>
            <h2 className={`${css.socialsTitle} ${css.title}`}>Соцмережі</h2>
                    <ul className={css.socialsList}>
                        <li className={css.socialsItem}>
                            <a href="#" className={css.socialLink}>
                                <img src={instagramImage} alt="instagram" className={css.socialIcon} />
                                <p className={css.socialSubscripers}>230.000</p>
                            </a>
                        </li>
                        <li className={css.socialsItem}>
                            <a href="#" className={css.socialLink}>
                                <img src={facebookImage} alt="facebook" className={css.socialIcon} />
                                <p className={css.socialSubscripers}>230.000</p>
                            </a>
                        </li>
                        <li className={css.socialsItem}>
                            <a href="#" className={css.socialLink}>
                                <img src={youtubeImage} alt="youtube" className={css.socialIcon} />
                                <p className={css.socialSubscripers}>230.000</p>
                            </a>
                        </li>
                        <li className={css.socialsItem}>
                            <a href="#" className={css.socialLink}>
                                <img src={tiktokImage} alt="tiktok" className={css.socialIcon} />
                                <p className={css.socialSubscripers}>230.000</p>
                            </a>
                        </li>
                        <li className={css.socialsItem}>
                            <a href="#" className={css.socialLink}>
                                <img src={githubImage} alt="github" className={css.socialIcon} />
                                <p className={css.socialSubscripers}>230.000</p>
                            </a>
                        </li>
                        <li className={css.socialsItem}>
                            <a href="#" className={css.socialLink}>
                                <img src={twitterImage} alt="twitter" className={css.socialIcon} />
                                <p className={css.socialSubscripers}>230.000</p>
                            </a>
                        </li>
                    </ul>
                </div>
  )
}

export default SocialsNetworks