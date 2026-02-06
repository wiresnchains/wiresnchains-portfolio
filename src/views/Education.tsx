import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Form';
import { Inline } from '../components/Inline';
import { Modal, ModalHeader } from '../components/Modal';
import { useTranslation } from '../hooks/use-locale';

export function Education() {
    const translation = useTranslation();
    const [showScaldaResults, setShowScaldaResuts] = useState(false);
    const [showIskResults, setShowIskResults] = useState(false);
    const [showJammResults, setShowJammResults] = useState(false);
    const [showBisuResults, setShowBisuResults] = useState(false);

    return (
        <>
            <Inline center>
                <Card>
                    <h3>Scalda Software Development MBO-4</h3>
                    <p>Vlissinen, NL</p>
                    <p>
                        {translation.common.august} 2024 - {translation.common.august} 2028
                    </p>
                    <Button type="primary" onClick={() => setShowScaldaResuts(true)}>
                        {translation.common.learnMore}
                    </Button>
                </Card>
                <Card>
                    <h3>ISK Walcheren</h3>
                    <p>Middelburg, NL</p>
                    <p>
                        {translation.common.august} 2022 - {translation.common.july} 2024
                    </p>
                    <Button type="primary" onClick={() => setShowIskResults(true)}>
                        {translation.common.learnMore}
                    </Button>
                </Card>
                <Card>
                    <h3>JAMM Online School</h3>
                    <p>Kyiv, UA</p>
                    <p>
                        {translation.common.september} 2020 - {translation.common.june} 2022
                    </p>
                    <Button type="primary" onClick={() => setShowJammResults(true)}>
                        {translation.common.learnMore}
                    </Button>
                </Card>
                <Card>
                    <h3>British International School of Ukraine</h3>
                    <p>Kyiv, UA</p>
                    <p>
                        {translation.common.september} 2013 - {translation.common.june} 2020
                    </p>
                    <Button type="primary" onClick={() => setShowBisuResults(true)}>
                        {translation.common.learnMore}
                    </Button>
                </Card>
            </Inline>

            <Modal show={showScaldaResults}>
                <ModalHeader onClose={() => setShowScaldaResuts(false)}>
                    <h3>Scalda</h3>
                    <p className="muted">Description</p>
                </ModalHeader>
            </Modal>

            <Modal show={showIskResults}>
                <ModalHeader onClose={() => setShowIskResults(false)}>
                    <h3>ISK</h3>
                    <p className="muted">Description</p>
                </ModalHeader>
            </Modal>

            <Modal show={showJammResults}>
                <ModalHeader onClose={() => setShowJammResults(false)}>
                    <h3>JAMM</h3>
                    <p className="muted">Description</p>
                </ModalHeader>
            </Modal>

            <Modal show={showBisuResults}>
                <ModalHeader onClose={() => setShowBisuResults(false)}>
                    <h3>BISU</h3>
                    <p className="muted">Description</p>
                </ModalHeader>
            </Modal>
        </>
    );
}
