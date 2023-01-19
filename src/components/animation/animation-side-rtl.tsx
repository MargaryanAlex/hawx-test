import {FC, MutableRefObject, ReactNode, useEffect, useState} from "react";

interface IAnimationProps {
    children: ReactNode,
    element: MutableRefObject<HTMLElement | null> | null
}

const AnimationSideRTL: FC<IAnimationProps> = ({children, element}) => {
    const [scroll, setScroll] = useState<boolean>(false)

    const checkScroll = () => {
        if (element?.current ? window.scrollY + window.innerHeight - 100 > element.current?.offsetTop : false) {
            setScroll(true)
        }
    }

    useEffect(() => {

        checkScroll()
        if (scroll) {
            document.removeEventListener("scroll", checkScroll)
        } else {
            document.addEventListener("scroll", checkScroll)
        }
    }, [scroll])

    return (
        <div className={scroll ? "slideToLeft animation" : "animation"}>{children}</div>
    )
}

export default AnimationSideRTL