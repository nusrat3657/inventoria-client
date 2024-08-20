import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <>
        <Helmet><title>Dine Genius | Error</title></Helmet>
            <div className="text-center px-28 mb-20">
                <img className='max-w-[500px] mx-auto' src="https://i.ibb.co/x8jCk1V/404-error-with-people-holding-the-numbers-cuate.png" alt="" />
                <div className=" text-center">
                    <p className="-mt-20 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-amber-500 text-gray-50"><Link to="/">Back to homepage</Link></a>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;