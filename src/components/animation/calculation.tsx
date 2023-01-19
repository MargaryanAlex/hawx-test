import {MutableRefObject, useEffect, useState} from "react";

const Calculation = ({number, element}: { number: number, element: MutableRefObject<HTMLElement | null> }) => {
    const [scroll, setScroll] = useState<boolean>(false)
    let [start, setStart] = useState(0)

    const checkScroll = () => {
        if (element?.current ? window.scrollY + window.innerHeight - 100 > element.current?.offsetTop : false) {
            setScroll(true)
        }
    }

    useEffect(() => {

        checkScroll()

        if (scroll) {
            document.removeEventListener("scroll", checkScroll)

            let increment = setInterval(() => {
                if (start <= number) {
                    setStart(start++)
                } else {
                    clearInterval(increment)
                }
            }, 2000 / number)

        } else {
            document.addEventListener("scroll", checkScroll)
        }

    }, [scroll])


    return (<span className={`calculation`}>{start}</span>)
}
export default Calculation