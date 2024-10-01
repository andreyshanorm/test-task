import React, { useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../images/fullIcon.png";
import facebookLogo from "../../icons/Vectorfacebook.svg";
import vkLogo from "../../icons/iconmonstr-vk-4-1vk.svg";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_left}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <span className={styles.market_name}>гросс маркет</span>
        </div>
        <div className={styles.footer_center}>
          <span className={styles.share}>поделиться</span>
          <div className={styles.social_icons}>
            <img src={facebookLogo} alt="Facebook" className={styles.icon} />
            <img src={vkLogo} alt="VK" className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <span className={styles.copy}>© Гросс маркет 2020</span>
        <span onClick={toggleModal} className={styles.politics}>
          Политика обработки персональных данных
        </span>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <button onClick={toggleModal} className={styles.close_button}>
                ×
              </button>
              <h3 className={styles.modal_head}>Обработка данных</h3>
            </div>

            <h4 className={styles.modal_subTittle}>
              1. Что регулирует настоящая политика конфиденциальности
            </h4>
            <p className={styles.modal_text}>
              Настоящая политика конфиденциальности (далее — Политика) действует
              в отношении всей информации, включая персональные данные в
              понимании применимого законодательства (далее — «Персональная
              информация»), которую ООО «Гросс маркет» и/или его аффилированные
              лица, в том числе входящие в одну группу с ООО «Гросс маркет»
              (далее — «Гросс маркет»), могут получитьо Вас в процессе
              использования Вами любых сайтов, программ, продуктов и/или
              сервисов Гросс маркет (далее вместе «Сервисы»), информацию о
              которых Гросс маркет может также получать Персональную информацию
              от своих партнеров (далее — «Партнеры»), сайты, программы,
              продукты или сервисы которых Вы используете (например, от
              рекламодателей Гросс маркет или службами такси). В таких случаях
              передача Персональной информации возможна только в случаях,
              установленных применимым законодательством, и осуществляется на
              основании специальных договоров между Гросс маркет и каждым из
              Партнеров.
              <p className={styles.opacity}>
                Пожалуйста, обратите внимание, что использование любого из
                Сайтов и/или Сервисов может регулироваться дополнительными
                условиями, которые могут вносить в настоящую Политику изменения
                и/или дополнения, и/или иметь специальные условия в отношении
                персональной информации, размещенные в соответствующих разделах
                документов для таких Сайтов /или Сервисов.
              </p>
            </p>
            <h4 className={styles.modal_subTittle}>
              2. Кто обрабатывает информацию
            </h4>
            <p className={styles.modal_text}>
              Для обеспечения использования Вами Сайтов и Сервисов Ваша
              Персональная информация собирается и используется Яндексом, в том
              числе включая общество с ограниченной ответственностью «Гросс
              маркет», юридическое лицо, созданное по законодательству
              Российской Федерации и зарегистрированное по адресу: 123351,
              Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его
              аффилированным лицом, предоставляющим соответствующий Сервис в
              иных юрисдикциях. С информацией о том, какое лицо предоставляет
              тот или иной Сервис, Вы можете ознакомиться в условиях
              использования соответствующего Сервиса.
            </p>
            <h4 className={styles.modal_subTittle}>
              3. Какова цель данной Политики
            </h4>
            <p className={styles.modal_text}>
              Защита Вашей Персональной информации и Вашей конфиденциальности
              чрезвычайно важны для Гросс маркета. Поэтому при использовании
              Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу
              Персональную информацию в строгом соответствии с применимым
              законодательством.
            </p>
            <h4 className={styles.modal_subTittle}>
              4. Какую Персональную информацию о Вас собирает Гросс маркет
            </h4>
            <p className={styles.modal_text}>
              Для обеспечения использования Вами Сайтов и Сервисов Ваша
              Персональная информация собирается и используется Яндексом, в том
              числе включая общество с ограниченной ответственностью «Гросс
              маркет», юридическое лицо, созданное по законодательству
              Российской Федерации и зарегистрированное по адресу: 123351,
              Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его
              аффилированным лицом, предоставляющим соответствующий Сервис в
              иных юрисдикциях. С информацией о том, какое лицо предоставляет
              тот или иной Сервис, Вы можете ознакомиться в условиях
              использования соответствующего Сервиса.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
