import { withLayout }     from '../hoc/withLayout';
import { GetStaticProps } from 'next';
import { MenuItem }       from '../interfaces/menu.interface';
import axios              from 'axios';
import { Button, Tag }    from '../components';


const Home = ({ menu }: HomeProps): JSX.Element => {

	return (
		<>

		</>
	);
};

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;

	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});

	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[]
	firstCategory: number
}