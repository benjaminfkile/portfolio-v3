import { FunctionComponent } from "react"
import { useSelector, useDispatch, DefaultRootState } from "react-redux"
import JelloText from "../../Utilis/JelloText/JelloText"
import "./About.css"

interface AboutProps {
}

const About: FunctionComponent<AboutProps> = (props: AboutProps) => {
    const theme = useSelector((state: any) => state.themeSlice.theme)



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
            {/* <div onClick={() => }>set theme</div> */}
        </div>
    )
}

export default About