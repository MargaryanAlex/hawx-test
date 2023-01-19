const useFooter = () => {

    const goTo: (url: string) => void = (url) => {
        (window.open(url, "_blank") as Window).focus();
    };

    return {
        goTo,
    }
}

export default useFooter