import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import SocialMediaBox from '@components/ui/molecules/box/social-media-box/SocialMediaBox';

import styles from './CommonFooter.module.css';
import { socialMediaIcons } from './data/socialMediaIcons';

const cn = classNames.bind(styles);

const CommonFooter = forwardRef<HTMLElement | null>((_, ref) => {
  return (
    <footer id='footer' className={cn('footer')} ref={ref}>
      <section className={cn('footer-area')}>
        <address className={cn('copyright')} role='contentinfo'>
          <span>&#169;codeit</span>- 2023
        </address>
        <div className={cn('service-box')} role='contentinfo link'>
          <a className={cn('service-policy')} href='/privacy/'>
            Privacy Policy
          </a>
          <a className={cn('service-faq')} href='/faq/'>
            FAQ
          </a>
        </div>
        <SocialMediaBox socialMediaIcons={socialMediaIcons} />
      </section>
    </footer>
  );
});

CommonFooter.displayName = 'CommonFooter';

export default CommonFooter;
