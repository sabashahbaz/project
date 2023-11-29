import {Link} from 'react-router-dom';
import gif from '../assets/catgif.jpeg'

// error page
const Error = () => {
    return (
            <div className ="flex items-center justify-center h-screen">
                <img className = "cat-gif" src={gif} alt="error-cat" />
                <div className="page-text ml-8">
                    <p className="error text-6xl font-bold mb-4">404</p>
                    <div className="text">
                    <p className="mb-4">Oops, we couldn't find the page you were looking for.</p>
                    <p className="mb-4">As you can see, our staff continues to improve our website.</p>
                    <Link to="/" className="button-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        go back to user page
                    </Link>
                    </div>
                </div>
            </div>
        )
    };
export default Error; 