import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__left">
      <span className="footer__logo">QPICK</span>
      <nav className="footer__nav">
        <a href="#">Избранное</a>
        <a href="#">Корзина</a>
        <a href="#">Контакты</a>
      </nav>
    </div>

    <div className="footer__center">
      <a href="#">Условия сервиса</a>
      <div className="footer__langs">
        <span>🌐</span>
        <a href="#" className="footer__lang">Рус</a>
        <a href="#" className="footer__lang">Eng</a>
      </div>
    </div>

    <div className="footer__right">
      <a href="https://vk.com" target="_blank" rel="noreferrer" aria-label="VK">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 17c-5 0-8-3.4-8.2-9h2.5c.1 4.1 2 5.8 3.4 6.2V8h2.4v3.5c1.4-.1 2.8-1.6 3.3-3.5h2.4c-.4 2.3-1.8 3.8-2.8 4.5 1 .5 2.6 1.9 3.2 4.5h-2.6c-.5-1.7-1.7-3-3.5-3.1V17H13z" fill="currentColor"/>
        </svg>
      </a>
      <a href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 4.5 2.8 11.7c-1 .4-1 1.4 0 1.7l4.6 1.4 1.7 5.2c.2.6 1 .8 1.5.3l2.4-2.3 5 3.7c.6.4 1.4.1 1.6-.6L22.3 5.7c.2-.8-.5-1.4-1.3-1.2z" fill="currentColor"/>
        </svg>
      </a>
      <a href="https://wa.me" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 12c0 4.4-3.6 8-8 8-1.4 0-2.8-.4-4-1l-4 1 1-4c-.6-1.2-1-2.6-1-4 0-4.4 3.6-8 8-8s8 3.6 8 8z" fill="currentColor"/>
        </svg>
      </a>
    </div>
  </footer>
);

export default Footer;