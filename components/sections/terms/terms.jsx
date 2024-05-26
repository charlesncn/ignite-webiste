// pages/terms.js
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';
import styles from '../../../styles/sections/terms/terms.module.scss';

export default function Terms() {
  return (
    <Section classProp={styles['terms-section']}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Ignite Terms of Service"
          preTitle=""
          subTitle=""
        />
        
        <section>
          <h2>1. Agreement</h2>
          <p>
            By accessing our platform, Ignite, you agree to comply with these terms of service, as well as all applicable laws and regulations. You acknowledge that you are responsible for complying with local laws in your jurisdiction. If you do not agree to any of these terms, you are not permitted to use or access Ignite. The materials available on Ignite are protected by copyright and trademark laws.
          </p>
          <h2>2. License to Use</h2>
          <p>
            You are granted a temporary, non-transferable license to download one copy of Ignite per device for personal, non-commercial use only. This license does not transfer ownership, and under no circumstances may you:
          </p>
          <ul>
            <li>Modify or duplicate the materials;</li>
            <li>Use the materials for any commercial purpose or public display, whether commercial or non-commercial;</li>
            <li>Attempt to decompile or reverse engineer any software contained in Ignite;</li>
            <li>Remove any copyright or proprietary notations from the materials;</li>
            <li>Transfer the materials to another person or "mirror" them on any other server.</li>
          </ul>
          <p>
            This license will automatically terminate if you violate any of these restrictions and may be terminated by Ignite at any time. Upon termination, you must destroy any downloaded materials in your possession, whether in electronic or printed format.
          </p>
          <h2>3. Disclaimer</h2>
          <p>
            The materials provided on Ignite are on an "as is" basis. Ignite makes no warranties, expressed or implied, and hereby disclaims all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Furthermore, Ignite does not warrant or make any representations regarding the accuracy, likely results, or reliability of the use of the materials on its platform or in relation to any materials on linked websites.
          </p>
          <h2>4. Limitations of Liability</h2>
          <p>
            In no event shall Ignite or its suppliers be liable for any damages arising from the use or inability to use Ignite, including but not limited to, damages for loss of data, profit, or business interruption, even if Ignite or its authorized representative has been notified orally or in writing of the possibility of such damages. These limitations may not apply to you if your jurisdiction does not allow limitations on implied warranties or limitations of liability for consequential or incidental damages.
          </p>
          <h2>5. Accuracy of Information</h2>
          <p>
            The materials appearing on Ignite may contain technical, typographical, or photographic errors. Ignite does not warrant that any of the materials on its platform are accurate, complete, or current. Ignite may make changes to the materials at any time without notice. However, Ignite does not commit to updating the materials.
          </p>
          <h2>6. External Links</h2>
          <p>
            Ignite has not reviewed all of the websites linked to its platform and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ignite of the site. Your use of any linked website is at your own risk.
          </p>
          <h2>7. Modifications</h2>
          <p>
            Ignite may revise these terms of service for its platform at any time without notice. By using Ignite, you agree to be bound by the most recent version of these terms of service.
          </p>
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and interpreted in accordance with the laws applicable in each respective country. You agree to submit to the exclusive jurisdiction of the courts in your jurisdiction for any disputes arising from or related to these terms and conditions.
          </p>
        </section>
      </Container>
    </Section>
  );
}
