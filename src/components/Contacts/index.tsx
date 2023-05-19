import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

export const Contacts = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type="heading2" color="brand12">
                Vamos conversar e <Text as="span" type="heading2" color="brand10">desenvolver soluções</Text> para sua empresa juntos!
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="brand12">
                  Meu Whatsapp
                </Text>
                <Text color="brand12" type="body2">
                  Estou disponível para conversar, que tal falarmos sobre projetos criativos juntos?
                </Text>
                <Text
                  as="a"
                  color="brand12"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  Converse agora
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="brand12">
                  Meu email
                </Text>
                <Text color="brand12" type="body2">
                  Me envie um email com alguns feedbacks, sugestões ou ideias.
                </Text>

                <Text
                  as="a"
                  color="brand12"
                  type="body2"
                  target="_blank"
                  href={`mailto=${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = `mailto:${userData.emailUser}`)
                  }
                >
                  Envie um email
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="brand12">
                  Meu LinkedIn
                </Text>
                <Text color="brand12" type="body2">
                  Podemos criar interações mais constantes, bem como uma rede de compartilhamento.
                </Text>
                <Text
                  as="a"
                  color="brand12"
                  type="body2"
                  target="_blank"
                  href={linkedInUrl}
                >
                  Acesse meu LinkedIn
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
