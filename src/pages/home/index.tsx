import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="brand12">Olá, me chamo {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="brand12">Sou um desenvolvedor <Text as="span" type="heading1" color="brand10">Full Stack</Text> em desenvolvimento</Text>
            <Text type="body1" color="brand12">
              Minha jornada começou por volta de 2007, quando descobri que um dos meus jogos de navegador preferidos tinha diversos blogs feitos por outros jogadores. Essa descoberta acendeu em mim uma chama de curiosidade e, sem perceber, comecei a aprender a construir blogs simples em HTML e CSS inline. Com o passar dos anos, aprimorei meus conhecimentos e aprendi a utilizar essas tecnologias de forma correta, criando páginas responsivas e complexas.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Veja meus projetos
              </Button>
              <Button
                color="brand12"
                as="a"
                css={{ "&:hover": { color: "brand6" } }}
                type="circle"
                target="_blank"
                href={"https://github.com/typhonn003"}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading1" color="brand10">
                Projetos
              </Text>
              <Text as="p" type="body1" color="brand12">
                Alguns dos meus projetos
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
