import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import MovingArrow from './Arrow';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white-300">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            Wir helfen ihnen eine{' '}
            <span className="text-primary-500">helfende Hand</span> zu finden!
          </>
        }
        description="-oder eine zu werden!"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Zur App</Button>
          </Link>
        }
      />
      <MovingArrow />
    </Section>
  </Background>
);

export { Hero };
