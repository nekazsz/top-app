import {FunctionComponent}               from 'react';
import {Layout}                          from '../layout/Layout';
import {AppContextProvider, IAppContext} from '../context/app.context';


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return (props: T): JSX.Element => {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        );
    };
};