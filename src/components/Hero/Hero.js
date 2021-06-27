import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        Mi objetivo como desarrollador es poder demostrar a todas las minorias que se sienten incapaces o discriminadas que a través de la tecnología esas barreras pueden finalmente derrumbarse.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Descubre más!</Button>
    </LeftSection>
  </Section>
);

export default Hero;