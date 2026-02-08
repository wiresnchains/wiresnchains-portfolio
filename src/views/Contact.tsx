import { forwardRef } from 'react';
import { Block, BlockTitle } from '../components/Block';
import { FluidContainer } from '../components/FluidContainer';
import { ContactForm } from '../components/Form';
import { useTranslation } from '../hooks/use-locale';

export const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    const translation = useTranslation();

    return (
        <Block ref={ref}>
            <BlockTitle>{translation.navigation.contact}</BlockTitle>
            <FluidContainer center>
                <ContactForm />
            </FluidContainer>
        </Block>
    );
});
