import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/contacts.css';
import {ReactComponent as Instagram} from '../img/contacts/instagram.svg';
import {ReactComponent as Github} from '../img/contacts/github.svg';
import {ReactComponent as Telegram} from '../img/contacts/telegram.svg';
import {ReactComponent as Linkedin} from '../img/contacts/linkedin.svg';
import {ReactComponent as Upwork} from '../img/contacts/upwork.svg';
import {ReactComponent as Freelancer} from '../img/contacts/freelancer.svg';
import {ReactComponent as Fiverr} from '../img/contacts/fiverr.svg';
import {ReactComponent as Freelancehunt} from '../img/contacts/freelancehunt.svg';

const Contact = () => {
	const {t} = useTranslation();

    return (
        <div className="contact" id="contact">
			<div className="container">
				<div className="contact__inner">
					<div className="work__title-decrt">
						<h2 className="title">{t('contact title')}</h2>
						<div className="descr">
						{t('contact descr')}
						</div>
					</div>
					<div className="contact__content">
						<div className="contact__box">
							<div className="contact__item">
								<a className="contact__instagram" href="https://www.instagram.com/varg07" target="_blank" rel="noopener noreferrer">
                                    <Instagram/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__github" href="https://github.com/vargoscreator" target="_blank" rel="noopener noreferrer">
                                    <Github/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__telegram" href="https://t.me/V_ASI_L" target="_blank" rel="noopener noreferrer">
                                    <Telegram/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__linkedin" href="https://www.linkedin.com/in/vasyl-horiuk" rel="noopener noreferrer">
                                    <Linkedin/>
								</a>
							</div>
						</div>


						<form className="contact__form" name="gform" id="gform" action="https://docs.google.com/forms/d/e/1FAIpQLSefAugEBl6ZYH6gDP1LjLcZ9fCx8w8ZvVD1ugUNQmoiG3Cjpw/formResponse?" target="hidden_iframe">
							<div className="contact__form-item">
								<label htmlFor="fname">{t('contact name')}</label>
								<input type="text" name="entry.1553219433" id="entry.1553219433" placeholder={t('contact nameplace')} required/>
							</div>
							<div className="contact__form-item">
								<label htmlFor="femail">{t('contact email')}</label>
								<input type="email" name="entry.228950647" id="entry.228950647" placeholder={t('contact emailplace')} required/>
							</div>
							<div className="contact__form-item">
								<label htmlFor="fmessage">{t('contact message')}</label>
								<textarea type="text" name="entry.422929803" id="entry.422929803" placeholder={t('contact messageplace')} cols="30" rows="10" required></textarea>
							</div>					
							<input type="submit" value={t('contact send')}/>						
						</form>
					
						
						<div className="contact__box">
							<div className="contact__item">
								<a className="contact__upwork" href="https://www.upwork.com/freelancers/~011694f897e25a7f8c" target="_blank" rel="noopener noreferrer">
                                    <Upwork/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__freelancer" href="https://www.freelancer.com/u/Vargos" target="_blank" rel="noopener noreferrer">
                                    <Freelancer/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__fiverr" href="https://www.fiverr.com/vargosit" target="_blank" rel="noopener noreferrer">
                                    <Fiverr/>
								</a>
							</div>
							<div className="contact__item">
								<a className="contact__freelancehunt" href="https://freelancehunt.com/freelancer/Vargos.html" target="_blank" rel="noopener noreferrer">
                                    <Freelancehunt/>
								</a>
							</div>
						</div>
					
					
					
					</div>
				</div>
			</div>
		</div>
    );
};

export default Contact;