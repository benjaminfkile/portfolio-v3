import { FunctionComponent } from "react"
import { useSelector, useDispatch, DefaultRootState } from "react-redux"
import { setTheme } from '../../Redux/Slices/themeSlice'
import { Charcoal } from "../../Pallettes/Charcoal"
import JelloText from "../../Utilis/JelloText/JelloText"
import "./About.css"
import { RetroPunch } from "../../Pallettes/RetroPunch"

interface AboutProps {
    theme: string
}

const About: FunctionComponent<AboutProps> = (props: AboutProps) => {
    const theme = useSelector((state: any) => state.themeSlice.theme)
    const dispatch = useDispatch()

    console.log(theme)

    return (
        <div className="About">
            <div className="AboutHeader">
                <JelloText
                    text="About Me"
                    fontSize={50}
                    whiteSpacing="8px"
                    color={theme.PalleteColor1}
                    animationSpeed={75}
                />
            </div>
            <div onClick={() => dispatch(setTheme(RetroPunch))}>set theme</div>
        </div>
    )
}

export default About