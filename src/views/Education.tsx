import { forwardRef, useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Form';
import { Modal, ModalHeader } from '../components/Modal';
import { Block, BlockTitle } from '../components/Block';
import { FluidContainer } from '../components/FluidContainer';
import { Table, TableData, TableHeader, TableRow } from '../components/Table';
import { useTranslation } from '../hooks/use-locale';

export const Education = forwardRef<HTMLDivElement>((_, ref) => {
    const translation = useTranslation();
    const [showScaldaResults, setShowScaldaResuts] = useState(false);
    const [showIskResults, setShowIskResults] = useState(false);
    const [showJammResults, setShowJammResults] = useState(false);
    const [showBisuResults, setShowBisuResults] = useState(false);

    return (
        <>
            <Block ref={ref}>
                <BlockTitle>{translation.navigation.education}</BlockTitle>

                <FluidContainer center>
                    <div className="flex wrap g-2 scale-mobile">
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
                    </div>
                </FluidContainer>
            </Block>

            <Modal show={showScaldaResults} close={() => setShowScaldaResuts(false)}>
                <ModalHeader close={() => setShowScaldaResuts(false)}>
                    <h3>Scalda</h3>
                    <p className="muted">{translation.education.notGraduatedYet}</p>
                </ModalHeader>

                <div className="flex vertical g-2">
                    <div className="flex vertical g-1">
                        <h4>{translation.education.scalda.phases.oriented}</h4>

                        <Table>
                            <thead>
                                <TableRow>
                                    <TableHeader>{translation.education.scalda.database}</TableHeader>
                                    <TableHeader>{translation.education.scalda.frontend}</TableHeader>
                                    <TableHeader>{translation.education.scalda.javaProgramming}</TableHeader>
                                    <TableHeader>{translation.education.scalda.softwareEngineering}</TableHeader>
                                    <TableHeader>{translation.education.scalda.scrum}</TableHeader>
                                    <TableHeader>{translation.education.scalda.careerOrientation}</TableHeader>
                                </TableRow>
                            </thead>
                            <tbody>
                                <TableRow>
                                    <TableData>{translation.education.scalda.result.good}</TableData>
                                    <TableData>{translation.education.scalda.result.good}</TableData>
                                    <TableData>{translation.education.scalda.result.good}</TableData>
                                    <TableData>{translation.education.scalda.result.sufficient}</TableData>
                                    <TableData>{translation.education.scalda.result.good}</TableData>
                                    <TableData>{translation.education.scalda.result.sufficient}</TableData>
                                </TableRow>
                            </tbody>
                        </Table>
                    </div>

                    <div className="flex vertical g-1">
                        <h4>{translation.education.scalda.phases.beginner}</h4>

                        <Table>
                            <thead>
                                <TableRow>
                                    <TableHeader>{translation.education.scalda.database}</TableHeader>
                                    <TableHeader>{translation.education.scalda.frontend}</TableHeader>
                                    <TableHeader>{translation.education.scalda.javaProgramming}</TableHeader>
                                    <TableHeader>{translation.education.scalda.softwareEngineering}</TableHeader>
                                    <TableHeader>{translation.education.scalda.scrum}</TableHeader>
                                    <TableHeader>{translation.education.scalda.careerOrientation}</TableHeader>
                                </TableRow>
                            </thead>
                            <tbody>
                                <TableRow>
                                    <TableData>{translation.education.scalda.result.good}</TableData>
                                    <TableData>{translation.education.scalda.result.good}</TableData>
                                    <TableData>{translation.education.scalda.result.good}</TableData>
                                    <TableData>{translation.education.scalda.result.sufficient}</TableData>
                                    <TableData>{translation.education.scalda.result.good}</TableData>
                                    <TableData>{translation.education.scalda.result.sufficient}</TableData>
                                </TableRow>
                            </tbody>
                        </Table>
                    </div>

                    <div className="flex vertical g-1">
                        <h4>{translation.education.scalda.phases.advanced}</h4>
                        <p className="muted">{translation.education.notFinishedYet}</p>
                    </div>

                    <div className="flex vertical g-1">
                        <h4>{translation.education.dutch}</h4>

                        <Table>
                            <thead>
                                <TableRow>
                                    <TableHeader>{translation.education.reading}</TableHeader>
                                    <TableHeader>{translation.education.speaking}</TableHeader>
                                    <TableHeader>{translation.education.writing}</TableHeader>
                                </TableRow>
                            </thead>
                            <tbody>
                                <TableRow>
                                    <TableData>B1 (NT2)</TableData>
                                    <TableData>B1 (NT2)</TableData>
                                    <TableData>B1 (NT2)</TableData>
                                </TableRow>
                            </tbody>
                        </Table>
                    </div>

                    <div className="flex vertical g-1">
                        <h4>{translation.education.english}</h4>

                        <Table>
                            <thead>
                                <TableRow>
                                    <TableHeader>{translation.education.reading}</TableHeader>
                                    <TableHeader>{translation.education.speaking}</TableHeader>
                                    <TableHeader>{translation.education.writing}</TableHeader>
                                </TableRow>
                            </thead>
                            <tbody>
                                <TableRow>
                                    <TableData>B1+</TableData>
                                    <TableData>B1+</TableData>
                                    <TableData>B1+</TableData>
                                </TableRow>
                            </tbody>
                        </Table>

                        <a href="/certificate-english.pdf" target="_blank">
                            <Button type="primary">{translation.education.viewCertificate}</Button>
                        </a>
                    </div>

                    <div className="flex vertical g-1">
                        <h4>{translation.education.maths}</h4>
                        <p className="muted">{translation.education.notFinishedYet}</p>
                    </div>
                </div>
            </Modal>

            <Modal show={showIskResults} close={() => setShowIskResults(false)}>
                <ModalHeader close={() => setShowIskResults(false)}>
                    <h3>ISK</h3>
                    <p className="muted">{translation.education.graduated}</p>
                </ModalHeader>

                <div className="flex vertical g-2">
                    <div className="flex vertical g-1">
                        <h4>{translation.education.dutch}</h4>

                        <Table>
                            <thead>
                                <TableRow>
                                    <TableHeader>{translation.education.reading}</TableHeader>
                                    <TableHeader>{translation.education.speaking}</TableHeader>
                                    <TableHeader>{translation.education.writing}</TableHeader>
                                </TableRow>
                            </thead>
                            <tbody>
                                <TableRow>
                                    <TableData>B1 (NT2)</TableData>
                                    <TableData>B1 (NT2)</TableData>
                                    <TableData>B1 (NT2)</TableData>
                                </TableRow>
                            </tbody>
                        </Table>
                    </div>

                    <div className="flex vertical g-1">
                        <h4>{translation.education.maths}</h4>

                        <Table>
                            <thead>
                                <TableRow>
                                    <TableHeader>{translation.education.maths}</TableHeader>
                                    <TableHeader>{translation.education.calculations}</TableHeader>
                                </TableRow>
                            </thead>
                            <tbody>
                                <TableRow>
                                    <TableData>3F</TableData>
                                    <TableData>3F</TableData>
                                </TableRow>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Modal>

            <Modal show={showJammResults} close={() => setShowJammResults(false)}>
                <ModalHeader close={() => setShowJammResults(false)}>
                    <h3>JAMM</h3>
                    <p className="muted">{translation.education.graduated}</p>
                </ModalHeader>

                <div className="flex vertical g-2">
                    <p>{translation.education.jamm.ukrainianEvaluationSystem}</p>

                    <Table>
                        <thead>
                            <TableRow>
                                <TableHeader>{translation.education.jamm.ukrainianLanguage}</TableHeader>
                                <TableHeader>{translation.education.jamm.ukrainianLiterature}</TableHeader>
                                <TableHeader>{translation.education.jamm.foreignLiterature}</TableHeader>
                                <TableHeader>{translation.education.jamm.history}</TableHeader>
                                <TableHeader>{translation.education.jamm.algebra}</TableHeader>
                                <TableHeader>{translation.education.jamm.geometry}</TableHeader>
                                <TableHeader>{translation.education.jamm.ict}</TableHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            <TableRow>
                                <TableData>9</TableData>
                                <TableData>9</TableData>
                                <TableData>10</TableData>
                                <TableData>9</TableData>
                                <TableData>9</TableData>
                                <TableData>9</TableData>
                                <TableData>10</TableData>
                            </TableRow>
                        </tbody>
                    </Table>

                    <Table>
                        <thead>
                            <TableRow>
                                <TableHeader>{translation.education.jamm.geography}</TableHeader>
                                <TableHeader>{translation.education.jamm.biology}</TableHeader>
                                <TableHeader>{translation.education.jamm.physics}</TableHeader>
                                <TableHeader>{translation.education.jamm.chemistry}</TableHeader>
                                <TableHeader>{translation.education.jamm.civicsAndLaw}</TableHeader>
                                <TableHeader>{translation.education.jamm.healthEducation}</TableHeader>
                                <TableHeader>{translation.education.jamm.art}</TableHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            <TableRow>
                                <TableData>9</TableData>
                                <TableData>9</TableData>
                                <TableData>9</TableData>
                                <TableData>8</TableData>
                                <TableData>11</TableData>
                                <TableData>11</TableData>
                                <TableData>12</TableData>
                            </TableRow>
                        </tbody>
                    </Table>

                    <a href="/diploma-jamm.pdf" target="_blank">
                        <Button type="primary">{translation.education.viewDiploma}</Button>
                    </a>
                </div>
            </Modal>

            <Modal show={showBisuResults} close={() => setShowBisuResults(false)}>
                <ModalHeader close={() => setShowBisuResults(false)}>
                    <h3>BISU</h3>
                    <p className="muted">{translation.education.graduated}</p>
                </ModalHeader>
            </Modal>
        </>
    );
});
