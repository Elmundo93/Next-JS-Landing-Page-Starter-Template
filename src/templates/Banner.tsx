import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Schnell & einfach eine Aushilfe in der nähe finden!"
      subtitle="Starte deinen Probemonat!"
      button={
        <Link href="#">
          <Button>Zur App</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
