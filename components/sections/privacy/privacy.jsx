// pages/privacy-policy.js
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import SectionTitle from '../../blocks/section.title.block'
import styles 			from '../../../styles/sections/privacy/privacy.module.scss'

export default function PrivacyPolicy() {
  return (
    <Section classProp={styles['privacy-policy-section']}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Privacy Policy"
          preTitle="Effective Date: 21/06/2023"
          subTitle=""/>
        <section>
          <h2> Introduction</h2>
          <p>
            Ignite LTD ("Ignite," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access and use our application, Ignite, and any associated services (collectively referred to as the "Services"). By accessing or using our Services, you consent to the terms of this Privacy Policy.
          </p>
          <h2>2. Information We Collect</h2>
          <h3>2.1. Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us, such as your name, email address, social media profiles, date of birth, phone/mobile number, home/mailing address, work address, website address, payment information, driver's license details, passport number, tax/SSN/Medicare/etc. number, and other similar information.
          </p>
          <h3>2.2. Log Data</h3>
          <p>
            When you access our Services, our servers automatically log certain information provided by your device. This may include your device's Internet Protocol (IP) address, device type and version, activities within the application, date and time of access, and other relevant details.
          </p>
          <h3>2.3. Device Data</h3>
          <p>
            Our application may also access and collect data from your device's built-in tools, such as your identity, location data, camera, microphone, accelerometer, body sensor, calendar, contacts, phone/SMS, storage, photos and/or media, notifications, voice assistance, background data refresh, mobile data, device/app history, flashlight, and Bluetooth. The specific data collected depends on your device settings and permissions.
          </p>
          <h3>2.4. Business Data</h3>
          <p>
            As part of our Services, we may collect and process business data that accumulates during your use of our platform. This may include transaction records, stored files, user profiles, analytics data, and other metrics generated as you interact with our Services.
          </p>
          <h2>3. Legal Basis for Processing</h2>
          <p>We process your personal information lawfully, fairly, and transparently based on legal grounds permitted by applicable data protection laws. We collect and process your information only when:</p>
          <h3>3.1. Contract Performance</h3>
          <p>It is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract.</p>
          <h3>3.2. Legitimate Interests</h3>
          <p>We have a legitimate interest that is not overridden by your data protection interests, such as research and development, marketing our Services, protecting our legal rights and interests, and ensuring the security of our Services.</p>
          <h3>3.3. Consent</h3>
          <p>You have given us your consent to process your personal information for specific purposes, which you may withdraw at any time.</p>
          <h3>3.4. Legal Obligations</h3>
          <p>We are legally obligated to process your data to comply with applicable laws and regulations.</p>
          <h2>4. Use and Sharing of Information</h2>
          <p>We may use the information collected from you for various purposes, including but not limited to:</p>
          <ul>
            <li>Providing and improving our Services.</li>
            <li>Processing transactions and payments.</li>
            <li>Enabling access to and usage of our application and associated platforms.</li>
            <li>Communicating with you and responding to your inquiries.</li>
            <li>Conducting internal record keeping and administrative tasks.</li>
            <li>Analyzing data for research, market research, and business development.</li>
            <li>Running competitions and offering additional benefits.</li>
            <li>Sending you promotional information about our products, services, and third-party offerings that may interest you.</li>
            <li>Complying with legal obligations and resolving disputes.</li>
            <li>Considering employment applications.</li>
          </ul>
          <p>We may share your information with various third parties, including service providers, employees, contractors, sponsors or promoters of competitions, credit reporting agencies, regulatory authorities, law enforcement agencies, and third parties who assist us in providing information, products, services, or direct marketing to you.</p>
          <h2>5. International Transfers of Information</h2>
          <p>We may transfer and store your personal information outside of your country of residence, including to countries that may have different data protection laws. By providing us with your information, you consent to such transfers. We will ensure that any international transfers comply with applicable data protection laws. We will take appropriate safeguards to protect your information, such as using standard data protection clauses approved by relevant authorities or employing other legally accepted means.</p>
          <h2>6. Your Rights and Choices</h2>
          <p>You have certain rights and choices regarding your personal information. These include:</p>
          <h3>6.1. Choice and Consent</h3>
          <p>By providing your personal information, you consent to our collection, use, and disclosure of your information as outlined in this Privacy Policy.</p>
          <h3>6.2. Restriction of Processing</h3>
          <p>You may choose to restrict or limit the collection or use of your personal info. If you have previously agreed to receive direct marketing communications, you may change your preferences at any time.</p>
          <h3>6.3. Access and Data Portability</h3>
          <p>You have the right to access and request a copy of the personal information we hold about you. You may also request the erasure of your personal information or the transfer of your information to another party.</p>
          <h3>6.4. Correction</h3>
          <p>If you believe that any information we hold about you is inaccurate, incomplete, or outdated, you may request its correction.</p>
          <h3>6.5. Notification of Data Breaches</h3>
          <p>We will comply with applicable laws and notify you in the event of a data breach involving your personal information.</p>
          <h3>6.6. Complaints</h3>
          <p>If you believe we have violated applicable data protection laws, you have the right to lodge a complaint with us or with a regulatory body or data protection authority.</p>
          <h3>6.7. Unsubscribe</h3>
          <p>You may unsubscribe from our email database or opt-out of receiving communications, including marketing communications, at any time.</p>
          <h2>7. Cookies</h2>
          <p>Our Services may use cookies to enhance your experience. Cookies are small data files that are placed on your device. We use cookies for various purposes, such as providing core features of our application, tracking usage and performance, personalizing your experience, and serving targeted advertisements. By using our Services, you consent to the use of cookies.</p>
          <h2>8. Business Transfers</h2>
          <p>In the event of a merger, acquisition, or bankruptcy involving Ignite LTD, your information may be transferred as part of the business assets. Any acquiring party will be required to adhere to this Privacy Policy.</p>
          <h2>9. External Links</h2>
          <p>Our Services may contain links to external websites that are not operated by us. We do not control the content and policies of these third-party sites and are not responsible for their privacy practices. We recommend reviewing the privacy policies of any external sites you visit.</p>
          <h2>10. Changes to this Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy within our Services or through other communication channels. Your continued use of our Services after such modifications constitutes your acceptance of the updated Privacy Policy.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the privacy practices of Ignite LTD, please contact us at igniteint69@gmail.com.</p>
        </section>
      </Container>
    </Section>
  );
}
