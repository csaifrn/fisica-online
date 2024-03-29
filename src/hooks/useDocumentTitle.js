import { useRef, useEffect } from 'react';

function useDocumentTitle(title, prevailOnUnmount = false) {
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    useEffect(
        () => () => {
            if (!prevailOnUnmount) {
                document.title = defaultTitle.current;
            }
        },
        []
    );
}

export default useDocumentTitle;
