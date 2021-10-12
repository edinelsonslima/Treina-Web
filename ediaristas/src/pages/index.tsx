import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironmet';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMasl';
import { Button, Typography, Container } from '@mui/material';
import {
    FormElementContainer,
    ProfissionaisContainer,
    ProfissionaisPaper,
} from '@styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

const Home: NextPage = () => {
    const { cep, setCep } = useIndex();
    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={
                    'Preencha seu endereço e veja todos os profissionais da sua localidade'
                }
            />
            <Container>
                <FormElementContainer>
                    <TextFieldMask
                        mask={'99.999-99'}
                        label={'Digite ser CEP'}
                        variant={'outlined'}
                        fullWidth
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                    />

                    <Typography color={'error'}>CEP invalido</Typography>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        sx={{ width: '220px' }}
                    >
                        Buscar
                    </Button>
                </FormElementContainer>
                <ProfissionaisPaper>
                    <ProfissionaisContainer>
                        <UserInformation
                            name={'Edinelson'}
                            picture={'https://github.com/edinelsonslima.png'}
                            rating={3}
                            description={'Teresina'}
                        />
                        <UserInformation
                            name={'Edinelson'}
                            picture={'https://github.com/edinelsonslima.png'}
                            rating={3}
                            description={'Teresina'}
                        />
                        <UserInformation
                            name={'Edinelson'}
                            picture={'https://github.com/edinelsonslima.png'}
                            rating={3}
                            description={'Teresina'}
                        />
                        <UserInformation
                            name={'Edinelson'}
                            picture={'https://github.com/edinelsonslima.png'}
                            rating={3}
                            description={'Teresina'}
                        />
                        <UserInformation
                            name={'Edinelson'}
                            picture={'https://github.com/edinelsonslima.png'}
                            rating={3}
                            description={'Teresina'}
                        />
                    </ProfissionaisContainer>
                </ProfissionaisPaper>
            </Container>
        </div>
    );
};

export default Home;
