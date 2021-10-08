import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironmet';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

const Home: NextPage = () => {
    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={
                    'Preencha seu endereço e veja todos os profissionais da sua localidade'
                }
            />
            <UserInformation
                name={'Edinelson'}
                picture={'https://github.com/edinelsonslima.png'}
                rating={3}
                description={'Teresina'}
            />
        </div>
    );
};

export default Home;
