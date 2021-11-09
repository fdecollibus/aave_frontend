import { createElement } from 'react';

import createAXAButtonReact from '@axa-ch/button/lib/index.react';
import createAXADropdown from '@axa-ch/dropdown/lib/index.react';
import createAXACommercialHeroBanner from '@axa-ch/commercial-hero-banner/lib/index.react'

export const AXAButton = createAXAButtonReact(createElement);
export const AXADropdown = createAXADropdown(createElement);
export const AXAHeroBanner = createAXACommercialHeroBanner(createElement);
