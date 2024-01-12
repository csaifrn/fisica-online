import { useNavigate as useLink } from 'react-router-dom';
import useQuery from './useQuery';

function useNavigate() {
    const navigate = useLink();
    const query = useQuery();

    return id => {
        navigate(query({ link: id }));

        window.scrollTo(0, 0);
    };
}

export default useNavigate;
