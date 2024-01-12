import { useNavigate as useLink } from 'react-router-dom';
import useQuery from './useQuery';

function useNavigate() {
    const navigate = useLink();
    const query = useQuery();

    return id => {
        navigate(query({ link: id }));
    };
}

export default useNavigate;
